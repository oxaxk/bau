import { useEffect } from 'react';
import { kiralSite } from '../../lib/kiral-content';

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

const defaultImage = '/images/optimized/hero/1-820.avif';

export default function Seo({ title, description, path = '/', image = defaultImage }: SeoProps) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${kiralSite.name}` : kiralSite.metaTitle;
    document.title = pageTitle;

    const canonical = `${kiralSite.website}${path.startsWith('/') ? path : `/${path}`}`;
    const metaDescription = description ?? kiralSite.metaDescription;

    const updateNode = (selector: string, createTag: 'meta' | 'link', attribute: string, value: string) => {
      let node = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (!node) {
        node = document.createElement(createTag);
        document.head.appendChild(node);
      }
      node.setAttribute(attribute, value);
    };

    updateNode('meta[name="description"]', 'meta', 'content', metaDescription);
    updateNode('meta[property="og:title"]', 'meta', 'content', pageTitle);
    updateNode('meta[property="og:description"]', 'meta', 'content', metaDescription);
    updateNode('meta[property="og:image"]', 'meta', 'content', image);
    updateNode('meta[property="og:url"]', 'meta', 'content', canonical);
    updateNode('meta[name="twitter:title"]', 'meta', 'content', pageTitle);
    updateNode('meta[name="twitter:description"]', 'meta', 'content', metaDescription);
    updateNode('meta[name="twitter:image"]', 'meta', 'content', image);
    updateNode('link[rel="canonical"]', 'link', 'href', canonical);
  }, [description, image, path, title]);

  return null;
}
