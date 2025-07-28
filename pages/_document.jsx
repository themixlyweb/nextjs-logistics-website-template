// Custom Document for Next.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicons and manifest (Uncomment and update paths as needed) */}
          <link rel="icon" type="image/png" href="/img/favicon/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/svg+xml" href="/img/favicon/favicon.svg" />
          <link rel="shortcut icon" href="/img/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
          <link rel="manifest" href="/img/favicon/site.webmanifest" />

          {/* Preconnect to improve font loading performance (Optional) */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /> */}

          {/* Font stylesheets can go here */}
          {/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" /> */}
        </Head>
        <body>
          {/* Main application content */}
          <Main />
          {/* Next.js scripts */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

// Optional: Customize rendering behavior (e.g., for styled-components or other SSR setups)
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // Enhance the app and component tree if needed
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => App,
      enhanceComponent: (Component) => Component
    });

  // Get initial document props
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};

export default MyDocument;
