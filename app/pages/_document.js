import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Here is what I've done and what I like to do"
        />
        <meta name="author" content="Ulysse Chopard-Guillaumot" />
        <meta property="og:title" content="CV Ulysse Chopard-Guillaumot" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta
          property="og:description"
          content="Curriculum vitae hand crafted by and for Ulysse Chopard-Guillaumot"
        />
        <meta property="og:image" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="font-sans relative min-h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
