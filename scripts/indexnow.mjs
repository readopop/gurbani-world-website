const SITE = "https://gurbaniworld.netlify.app";
const KEY = "3c8249becf8e61c404c9a7c059214eef";
const KEY_LOCATION = `${SITE}/${KEY}.txt`;
const SITEMAP_URL = `${SITE}/sitemap.xml`;

const sitemapResponse = await fetch(SITEMAP_URL);
if (!sitemapResponse.ok) {
  throw new Error(`Could not fetch sitemap: HTTP ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const urls = [...sitemap.matchAll(/<loc>\s*(https:\/\/[^<\s]+)\s*<\/loc>/gi)]
  .map((match) => match[1].trim());

if (urls.length === 0) {
  throw new Error("No URLs found in the live sitemap.");
}

for (const url of urls) {
  const parsed = new URL(url);
  if (parsed.origin !== SITE || parsed.search || parsed.hash) {
    throw new Error(`Unexpected URL in sitemap: ${url}`);
  }
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: [...new Set(urls)],
  }),
});

const body = await response.text();
console.log(`Submitted ${urls.length} unique URL(s) to IndexNow.`);
console.log(`HTTP ${response.status} ${response.statusText}`);
if (body) console.log(body);

if (response.status !== 200 && response.status !== 202) {
  process.exitCode = 1;
}
