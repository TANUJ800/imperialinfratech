import Head from "next/head";
import { siteData } from "../lib/siteData";

export default function SEO({ title, description, keywords, path }) {
  const metaTitle = title || siteData.seo.title;
  const metaDescription = description || siteData.seo.description;
  const metaKeywords = keywords || siteData.seo.keywords;
  const url = path ? `${siteData.seo.url}${path}` : siteData.seo.url;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${siteData.seo.url}/images/og-cover.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={url} />
    </Head>
  );
}
