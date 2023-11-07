import { DefaultSeoProps } from "next-seo";

export const getURL = (): string => {
  const url = process.env.VERCEL_URL || "https://www.spedx.exchange";
  return url.includes("http") ? url : `https://${url}`;
};

const DEFAULT_CANONICAL = getURL();

const SEO: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: DEFAULT_CANONICAL,
    siteName: "Spedx",
    title: "SpedX Exchange",
    description:
      "Hybrid Orderbook-AMM DEX to trade Perpetuals and Zero-Day Futures with maximum capital efficiency",
    images: [
      {
        url: `${DEFAULT_CANONICAL}/og-image.png`,
        alt: "SpedX Exchange",
        secureUrl: `${DEFAULT_CANONICAL}/og-image.png`,
      },
    ],
  },
  twitter: {
    handle: "@spedxhq",
    site: "@spedxhq",
    cardType: "summary_large_image",
  },
  themeColor: "#3BB078",
  titleTemplate: "%s - SpedX Exchange",
  defaultTitle: "SpedX Exchange",
  description:
    "Hybrid Orderbook-AMM DEX to trade Perpetuals and Zero-Day Futures with maximum capital efficiency",
  additionalLinkTags: [
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
  ],
};

export default SEO;
