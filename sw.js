// The Neural Savanna - Service Worker
// Progressive Web App with offline capabilities

const CACHE_NAME = 'neural-savanna-v1';
const OFFLINE_CACHE = 'neural-savanna-offline';

// Critical resources for offline functionality
const CRITICAL_RESOURCES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/audio/essential.json',
  '/assets/visual/core-sprites.svg',
  '/localization/en.json',
  '/localization/zu.json',
  '/localization/xh.json'
];

// Progressive caching strategy
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching critical resources');
      // Cache resources individually to handle missing files gracefully
      return Promise.allSettled(
        CRITICAL_RESOURCES.map(resource => 
          cache.add(resource).catch(error => {
            console.warn(`Failed to cache ${resource}:`, error);
            return null;
          })
        )
      );
    }).then(() => {
      console.log('Service Worker installed successfully');
      return self.skipWaiting();
    }).catch((error) => {
      console.error('Service Worker installation failed:', error);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== OFFLINE_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activated successfully');
      return self.clients.claim();
    })
  );
});

// Fetch event handler with intelligent caching
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle different types of requests
  if (request.method === 'GET') {
    // Cache-first strategy for static assets
    if (isStaticAsset(request)) {
      event.respondWith(cacheFirst(request));
    }
    // Network-first strategy for lesson content
    else if (isLessonContent(request)) {
      event.respondWith(networkFirst(request));
    }
    // Stale-while-revalidate for API requests
    else if (isAPIRequest(request)) {
      event.respondWith(staleWhileRevalidate(request));
    }
    // Default fallback
    else {
      event.respondWith(fetchWithFallback(request));
    }
  } else {
    // For non-GET requests, just fetch
    event.respondWith(fetch(request));
  }
});

// Background sync for offline progress
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'progress-sync') {
    event.waitUntil(syncProgressToServer());
  }
  
  if (event.tag === 'bio-lumens-sync') {
    event.waitUntil(syncBioLumensEarned());
  }
});

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('Push notification received');
  
  const options = {
    body: event.data ? event.data.text() : 'Continue your learning journey in The Neural Savanna',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Continue Learning',
        icon: '/icons/icon-96x96.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/icon-96x96.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('The Neural Savanna', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event.action);
  
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions
function isStaticAsset(request) {
  return request.url.includes('/assets/') || 
         request.url.includes('/icons/') ||
         request.url.includes('/manifest.json') ||
         request.url.includes('.css') ||
         request.url.includes('.js');
}

function isLessonContent(request) {
  return request.url.includes('/lessons/') ||
         request.url.includes('/api/lesson');
}

function isAPIRequest(request) {
  return request.url.includes('/api/') ||
         request.url.includes('/supabase/');
}

// Cache-first strategy
async function cacheFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Cache-first failed, returning cached version');
    return cachedResponse;
  }
}

// Network-first strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache');
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('Offline content not available', { status: 503 });
  }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    console.log('Network failed for stale-while-revalidate');
  });
  
  return cachedResponse || fetchPromise;
}

// Fetch with fallback
async function fetchWithFallback(request) {
  try {
    return await fetch(request);
  } catch (error) {
    console.log('Fetch failed, trying cache');
    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('Resource not available offline', { status: 503 });
  }
}

// Background sync functions
async function syncProgressToServer() {
  console.log('Syncing progress to server...');
  
  try {
    // Get offline progress from IndexedDB
    const offlineProgress = await getOfflineProgress();
    
    for (const progress of offlineProgress) {
      try {
        // In a real implementation, this would sync to Supabase
        console.log('Syncing progress:', progress);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Remove from offline storage after successful sync
        await clearOfflineProgress(progress.id);
      } catch (error) {
        console.error('Progress sync failed for item:', progress.id, error);
      }
    }
    
    console.log('Progress sync completed');
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

async function syncBioLumensEarned() {
  console.log('Syncing bio-lumens...');
  
  try {
    // Get offline bio-lumens from IndexedDB
    const offlineBioLumens = await getOfflineBioLumens();
    
    for (const transaction of offlineBioLumens) {
      try {
        console.log('Syncing bio-lumens transaction:', transaction);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Remove from offline storage after successful sync
        await clearOfflineBioLumens(transaction.id);
      } catch (error) {
        console.error('Bio-lumens sync failed for transaction:', transaction.id, error);
      }
    }
    
    console.log('Bio-lumens sync completed');
  } catch (error) {
    console.error('Bio-lumens background sync failed:', error);
  }
}

// IndexedDB helper functions (simplified)
async function getOfflineProgress() {
  // In a real implementation, this would read from IndexedDB
  return [];
}

async function clearOfflineProgress(id) {
  // In a real implementation, this would remove from IndexedDB
  console.log('Cleared offline progress:', id);
}

async function getOfflineBioLumens() {
  // In a real implementation, this would read from IndexedDB
  return [];
}

async function clearOfflineBioLumens(id) {
  // In a real implementation, this would remove from IndexedDB
  console.log('Cleared offline bio-lumens:', id);
}

console.log('Service Worker loaded successfully'); 