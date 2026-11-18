// Build-time HTML snapshots for the site's public SEO routes.
export default {
  pages: [
    { url: "/" },
    { url: "/about" },
    { url: "/features" },
    { url: "/learning" },
    { url: "/guide" },
    { url: "/app" },
    { url: "/about-app" },
    { url: "/contact" },
    { url: "/privacy" },
    { url: "/app-privacy-policy" },
    { url: "/terms" },
  ],
  buildDir: "dist",
  port: 3300,
  savePath: "pages",
  pageWaitTime: 500,
  pageTimeout: 30000,
  debug: false,
  autoStartOnBuild: true,
  concurrencyLimit: 1,
};
