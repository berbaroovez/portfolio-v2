const title = "Carter Olson - Developer";
const description = "Front-end developer, streamer/youtuber enthusiast";

const SEO = {
  title,
  description,
  canonical: "https://cartols.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://cartols.com",
    title,
    description,
    images: [
      {
        url: "https://www.cartols.com/static/banner.png",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@berbaroovez",
    site: "@berbaroovez",
    cardType: "summary_large_image",
  },
};

export default SEO;
