import PyPDF2
import os
import sys

def extract_pdf_text(pdf_path):
    """Extract text from PDF file"""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
            return text
    except Exception as e:
        return f"Error reading PDF: {e}"

def main():
    documents_dir = "C:/GitHub/ml-500x/documents"
    
    # List of PDF files to extract
    pdf_files = [
        "The Neural Grove_ POC Development Plan-c163d247-bb70-42a9-94f4-d114a7751869.pdf",
        "The Neural Grove_ UI UX Mockups for Lessons 1-10-3cd8edb0-d774-45e1-945b-9c470be71bb4.pdf",
        "The Neural Grove_ An App Design Concept-f42b7faf-3f71-49f4-a306-1b1a1208dcfc.pdf",
        "The Neural Grove_ Generated POC Assets-4cbb0de2-e2ed-482f-b269-b8ce336b3505.pdf",
        "Document Review & Design-8c65a336-4d1c-4844-9957-4cfa1f9504b4.pdf",
        "Document Review & Design-146f5b81-ded9-45e8-a6ab-e4859411df9a.pdf"
    ]
    
    for pdf_file in pdf_files:
        pdf_path = os.path.join(documents_dir, pdf_file)
        if os.path.exists(pdf_path):
            print(f"\n{'='*80}")
            print(f"EXTRACTING: {pdf_file}")
            print(f"{'='*80}")
            text = extract_pdf_text(pdf_path)
            print(text[:2000] + "..." if len(text) > 2000 else text)
        else:
            print(f"File not found: {pdf_path}")

if __name__ == "__main__":
    main()