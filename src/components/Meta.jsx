import * as React from "react";
import { Helmet } from 'react-helmet-async';
import thumbnail from "../assets/preview.png"

const seo = {
  "title": "afffirmations generator",
  "description": "“global self hypnosis” daily affirmation meme generator. inspired by @afffirmations",
  "image": thumbnail
};

const Meta = () => {
  const url = window.location.hostname
  
  // React Helmet manages the content of the page head such as meta tags
  // We use the async package https://github.com/staylor/react-helmet-async
  return <Helmet>
    <title>{seo.title}</title>

    <meta
      name="description"
      content={seo.description}
    />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href={url} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={url} />
    <meta
      property="og:description"
      content={seo.description}
    />
    <meta
      property="og:image"
      content={seo.image}
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@cubeghost" />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:description" content={seo.description} />
    <meta name="twitter:image" content={seo.image} />

  </Helmet>
};

export default Meta;
