import pypdfium2 as pdfium
import os

def render_pdf_pages():
    pdf_path = "public/Resume.pdf"
    pdf = pdfium.PdfDocument(pdf_path)
    os.makedirs("scripts/preview", exist_ok=True)
    
    image_paths = []
    for i, page in enumerate(pdf):
        # Render at 300 DPI (scale = 300/72 ≈ 4.1667)
        image = page.render(scale=300/72).to_pil()
        out_path = f"scripts/preview/pdf_page_{i+1}.png"
        image.save(out_path)
        image_paths.append(out_path)
        print(f"Rendered Page {i+1} -> {out_path}")
        
    return image_paths

if __name__ == "__main__":
    render_pdf_pages()
