import subprocess
import os

edge = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
html = os.path.abspath("scripts/resume-template.html")
os.makedirs("scripts/preview", exist_ok=True)

# Generate screenshots
cmd1 = [
    edge,
    "--headless=new",
    "--disable-gpu",
    "--window-size=900,1200",
    "--hide-scrollbars",
    "--screenshot=" + os.path.abspath("scripts/preview/resume_preview.png"),
    f"file:///{html.replace(os.sep, '/')}"
]
subprocess.run(cmd1)
print("Preview created:", os.path.exists("scripts/preview/resume_preview.png"))
