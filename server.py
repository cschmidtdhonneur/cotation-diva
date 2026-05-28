from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json
import re


ROOT = Path(__file__).resolve().parent
BACKUP_DIR = ROOT / "sauvegardes"


def clean_part(value):
    value = str(value or "dossier")
    value = re.sub(r"[^A-Za-z0-9_-]+", "-", value).strip("-")
    return (value or "dossier")[:60]


class DivaHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/api/save":
            self.send_error(404)
            return

        length = int(self.headers.get("Content-Length", "0"))
        raw = self.rfile.read(length)

        try:
            payload = json.loads(raw.decode("utf-8"))
            data = payload.get("data", payload)
            meta = data.get("meta", {})
            scale = clean_part(data.get("scale", "diva"))
            patient = clean_part(meta.get("patient", "patient"))
            date = clean_part(meta.get("date", "date"))
        except Exception:
            self.send_error(400, "Invalid JSON")
            return

        BACKUP_DIR.mkdir(exist_ok=True)
        path = BACKUP_DIR / f"{date}_{patient}_{scale}.json"
        path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")

        body = json.dumps({"ok": True, "path": str(path.name)}).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    server = ThreadingHTTPServer(("localhost", 4173), DivaHandler)
    print("Application DIVA disponible sur http://localhost:4173")
    print(f"Sauvegardes automatiques dans {BACKUP_DIR}")
    server.serve_forever()
