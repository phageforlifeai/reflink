#!/usr/bin/env python3
"""Static server for the phage-quiz folder that FORCES DOWNLOAD of binary
deliverables (.pptx / .pdf / .zip) instead of letting the browser open them
inline. Everything else (html, js, png) is served normally.

Usage: python3 serve.py [port]
"""
import http.server
import socketserver
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
ATTACH = (".pptx", ".pdf", ".zip")


class Handler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        if path.lower().endswith(ATTACH):
            return "application/octet-stream"
        return super().guess_type(path)

    def end_headers(self):
        if self.path.lower().split("?")[0].endswith(ATTACH):
            fname = self.path.rstrip("/").split("/")[-1].split("?")[0]
            self.send_header("Content-Disposition", f'attachment; filename="{fname}"')
            self.send_header("Cache-Control", "no-store")
        super().end_headers()


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True


if __name__ == "__main__":
    with Server(("0.0.0.0", PORT), Handler) as httpd:
        print(f"serving on 0.0.0.0:{PORT} (binaries forced as downloads)")
        httpd.serve_forever()
