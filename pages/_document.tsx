import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function DocumentComponent() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu&family=Red+Hat+Display&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Ahmed Ghoneim's Homepage" />
        <meta name="description" content="Ahmed Ghoneim - Software Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahmedghoneim.site/" />
        <meta property="og:title" content="Ahmed Ghoneim's Homepage" />
        <meta
          property="og:description"
          content="Ahmed Ghoneim - Software Engineer"
        />
        <meta
          property="og:image"
          content="https://ahmedghoneim.site/meta-homepage.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ahmedghoneim.site/" />
        <meta property="twitter:title" content="Ahmed Ghoneim's Homepage" />
        <meta
          property="twitter:description"
          content="Ahmed Ghoneim - Software Engineer"
        />
        <meta
          property="twitter:image"
          content="https://ahmedghoneim.site/meta-homepage.png"
        />
        <meta property="twitter:image:width" content="1200" />
        <meta property="twitter:image:height" content="628" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export async function getInitialProps(ctx: DocumentContext) {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
}
