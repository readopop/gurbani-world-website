import { X, Download } from 'lucide-react';

const handleDownloadFile = (content, filename, mimeType = 'text/plain') => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export default function SeoBlueprintModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-[#D4AF37] shadow-2xl space-y-5">
        <div className="flex items-center justify-between border-b border-[#E6DEC8] pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#9A7418]">
              Production Deployment & SEO Export
            </span>
            <h3 className="font-serif text-xl font-bold text-[#1C120C]">
              Netlify Config, sitemap.xml & robots.txt
            </h3>
          </div>
          <button
            type="button"
            onClick={() => onClose()}
            className="p-2 rounded-lg hover:bg-[#FAF7F2] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs text-[#3D2E22]">
          {/* 1. netlify.toml */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <p className="font-bold text-[#1C120C]">
                1. netlify.toml (SPA Routing & Security Headers)
              </p>
              <button
                type="button"
                onClick={() =>
                  handleDownloadFile(
                    `[build]\n  command = "npm run build"\n  publish = "dist"\n\n[[redirects]]\n  from = "/*"\n  to = "/index.html"\n  status = 200\n\n[[headers]]\n  for = "/*"\n  [headers.values]\n    X-Frame-Options = "DENY"\n    X-Content-Type-Options = "nosniff"\n    Referrer-Policy = "strict-origin-when-cross-origin"`,
                    'netlify.toml',
                  )
                }
                className="inline-flex items-center gap-1 text-[#9A7418] hover:text-[#1C120C] font-bold cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
            <pre className="p-3 rounded-xl bg-[#1C120C] text-[#FAF7F2] overflow-x-auto">
              {`[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"`}
            </pre>
          </div>

          {/* 2. robots.txt */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <p className="font-bold text-[#1C120C]">2. public/robots.txt</p>
              <button
                type="button"
                onClick={() =>
                  handleDownloadFile(
                    `User-agent: *\nAllow: /\n\nSitemap: https://gurbaniworld.org/sitemap.xml`,
                    'robots.txt',
                  )
                }
                className="inline-flex items-center gap-1 text-[#9A7418] hover:text-[#1C120C] font-bold cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
            <pre className="p-3 rounded-xl bg-[#1C120C] text-[#FAF7F2] overflow-x-auto">
              {`User-agent: *
Allow: /

Sitemap: https://gurbaniworld.org/sitemap.xml`}
            </pre>
          </div>

          {/* 3. sitemap.xml */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <p className="font-bold text-[#1C120C]">3. public/sitemap.xml</p>
              <button
                type="button"
                onClick={() =>
                  handleDownloadFile(
                    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://gurbaniworld.org/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>\n  <url><loc>https://gurbaniworld.org/#about</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>\n  <url><loc>https://gurbaniworld.org/#features</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>\n  <url><loc>https://gurbaniworld.org/#learning</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>\n  <url><loc>https://gurbaniworld.org/#app</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>\n  <url><loc>https://gurbaniworld.org/#contact</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>\n  <url><loc>https://gurbaniworld.org/#privacy</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>\n  <url><loc>https://gurbaniworld.org/#terms</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>\n</urlset>`,
                    'sitemap.xml',
                    'application/xml',
                  )
                }
                className="inline-flex items-center gap-1 text-[#9A7418] hover:text-[#1C120C] font-bold cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
            </div>
            <pre className="p-3 rounded-xl bg-[#1C120C] text-[#FAF7F2] overflow-x-auto">
              {`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://gurbaniworld.org/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://gurbaniworld.org/#about</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://gurbaniworld.org/#features</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://gurbaniworld.org/#learning</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://gurbaniworld.org/#app</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://gurbaniworld.org/#contact</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://gurbaniworld.org/#privacy</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>
  <url><loc>https://gurbaniworld.org/#terms</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>
</urlset>`}
            </pre>
          </div>

          <p className="text-[#5C4938]">
            <strong>Active Runtime SEO:</strong> Dynamic page titles, meta descriptions, Open Graph
            / Twitter cards, SVG favicon, and JSON-LD{' '}
            <code className="font-mono">Organization</code> +{' '}
            <code className="font-mono">SoftwareApplication</code> schemas are automatically
            injected into <code className="font-mono">&lt;head&gt;</code> on every route change.
          </p>
        </div>
      </div>
    </div>
  );
}
