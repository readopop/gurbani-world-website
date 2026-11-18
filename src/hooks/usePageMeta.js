import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BRAND_CONFIG } from '../data/brand';
import { PAGE_META } from '../data/pageMeta';

// Existing runtime head management (title, meta tags, favicon, JSON-LD), relocated
// unchanged from App.jsx. Only the route key changed: it is now the URL path.
export default function usePageMeta() {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  useEffect(() => {
    const activeSeo = PAGE_META[path] || PAGE_META.notFound;
    document.title = activeSeo.title;

    const upsertMeta = (attrName, attrValue, content) => {
      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    upsertMeta('name', 'description', activeSeo.desc);

    // Keep one canonical URL per known route; omit canonicals on the 404 route.
    const canonicalId = 'gurbani-world-canonical';
    let canonicalLink = document.getElementById(canonicalId);
    if (PAGE_META[path]) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.id = canonicalId;
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = `https://gurbaniworld.netlify.app${path === '/' ? '/' : path}`;
      upsertMeta('property', 'og:url', canonicalLink.href);
    } else {
      canonicalLink?.remove();
      document.querySelector('meta[property="og:url"]')?.remove();
    }
    upsertMeta(
      'name',
      'keywords',
      'Gurbani World, Gurbani World App, Gurbani App, Nitnem App, Sikh Spiritual App, Gurbani Search, Sikh Learning, Sikh History, Waheguru Simran, Daily Hukamnama, Singh Tech, SINGH TECH',
    );
    upsertMeta('property', 'og:title', activeSeo.title);
    upsertMeta('property', 'og:description', activeSeo.desc);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', 'Gurbani World');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', activeSeo.title);
    upsertMeta('name', 'twitter:description', activeSeo.desc);

    // Dynamic Brand Crest Favicon Data URI matching Official App Icon
    const faviconSvg = encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="18" fill="#053E41"/><rect x="40" y="13" width="2.5" height="22" fill="#F97316"/><polygon points="42.5,13.5 72,20 42.5,26.5" fill="#FF6B00"/><circle cx="51.5" cy="20" r="2.2" stroke="#1E1B4B" stroke-width="1.3" fill="none"/><text x="50" y="53" text-anchor="middle" fill="#FFFFFF" font-size="24" font-weight="800" font-family="sans-serif">ਗੁਰਬਾਣੀ</text><text x="21.5" y="83" text-anchor="middle" fill="#FACC15" font-size="22" font-weight="900" font-family="sans-serif">W</text><circle cx="42.5" cy="74.5" r="10" fill="#2563EB"/><path d="M36 70C39 68 44 68 47 70C48 72 46 75 43 75C40 75 39 79 37 80C35 78 35 73 36 70Z" fill="#84CC16"/><text x="73" y="83" text-anchor="middle" fill="#FACC15" font-size="22" font-weight="900" font-family="sans-serif">RLD</text></svg>`,
    );
    let linkIcon = document.querySelector("link[rel~='icon']");
    if (!linkIcon) {
      linkIcon = document.createElement('link');
      linkIcon.rel = 'icon';
      document.head.appendChild(linkIcon);
    }
    linkIcon.href = `data:image/svg+xml,${faviconSvg}`;

    // Inject Organization & SoftwareApplication JSON-LD Schema for Google & AI Search Engines
    const schemaId = 'gurbani-world-jsonld';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          name: 'Gurbani World',
          alternateName: 'Gurbani World by Singh Tech',
          founder: {
            '@type': 'Organization',
            name: 'Singh Tech',
          },
          slogan: 'Connect with Gurbani, Connect with Guru.',
          description:
            'An all-in-one Sikh spiritual and Gurbani learning digital platform providing daily Hukamnama Sahib, Nitnem Banis, Gurbani library, Simran tools, and Sikh educational resources.',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Gurbani World',
          operatingSystem: 'Android',
          applicationCategory: 'BooksAndReferenceApplication',
          author: {
            '@type': 'Organization',
            name: 'SINGH TECH',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Singh Tech',
          },
          downloadUrl: BRAND_CONFIG.playStoreUrl,
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
        },
      ],
    };
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [path]);
}
