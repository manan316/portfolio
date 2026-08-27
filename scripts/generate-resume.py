import subprocess
import os
import sys
import pypdf

EDGE_PATHS = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
]

def find_edge():
    for p in EDGE_PATHS:
        if os.path.exists(p):
            return p
    return "msedge"

def main():
    root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    html_path = os.path.join(root_dir, "scripts", "resume-template.html")
    pdf_out = os.path.join(root_dir, "public", "Resume.pdf")
    
    edge_bin = find_edge()
    print(f"Using Edge binary: {edge_bin}")
    print(f"Input HTML: {html_path}")
    print(f"Output PDF: {pdf_out}")
    
    cmd = [
        edge_bin,
        "--headless=new",
        "--disable-gpu",
        "--allow-file-access-from-files",
        "--no-pdf-header-footer",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=5000",
        f"--print-to-pdf={pdf_out}",
        f"file:///{html_path.replace(os.sep, '/')}"
    ]
    
    print("Running command...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error running Edge: {res.stderr}")
        sys.exit(1)
        
    if not os.path.exists(pdf_out):
        print("PDF was not created!")
        sys.exit(1)
        
    file_size = os.path.getsize(pdf_out)
    print(f"PDF successfully created ({file_size} bytes).")
    
    reader = pypdf.PdfReader(pdf_out)
    num_pages = len(reader.pages)
    print(f"Total pages: {num_pages}")
    
    for i, page in enumerate(reader.pages):
        print(f"\n--- PAGE {i+1} PREVIEW ---")
        text = page.extract_text()
        print(text[:400] + ("..." if len(text) > 400 else ""))
        
    if num_pages != 2:
        print(f"WARNING: Page count is {num_pages}, expected exactly 2.")
    else:
        print("\nSUCCESS: Exact 2-page resume generated!")

if __name__ == "__main__":
    main()
