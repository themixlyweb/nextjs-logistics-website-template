// Core Imports
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

// Layout and Theme
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

// Global CSS Imports
import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  // Dynamically import Bootstrap on the client only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap');
    }
  }, []);

  // Re-initialize scrollCue animations when route changes
  useEffect(() => {
    const initScrollCue = async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400, // delay between items
        duration: 700,  // animation duration
        percentage: 0.8 // when to trigger animation
      });
      scrollCue.update();
    };
    initScrollCue();
  }, [pathname]);

  // Stop loading screen after initial mount
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Fragment>
      {/* Global Meta Tags */}
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FreightEdge – Next.js Template for Freight Forwarding & Logistics Companies</title>
        <meta name="description" content="Modern Next.js & React website template for logistics, cargo, and freight forwarding services." />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FreightEdge – Next.js Template for Freight Forwarding & Logistics Companies" />
        <meta property="og:description" content="Modern Next.js & React website template for logistics, cargo, and freight forwarding services." />
        <meta property="og:url" content="https://themixly.com/themes/freight-forwarding-react-nextjs-template/" />
        <meta property="og:image" content="https://themixly.com/wp-content/uploads/2025/07/image-3-1-scaled.jpg" />
        <meta property="og:image:secure_url" content="https://themixly.com/wp-content/uploads/2025/07/image-3-1-scaled.jpg" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="FreightEdge – Next.js Template for Freight Forwarding & Logistics Companies" />
        <meta name="twitter:description" content="Modern Next.js & React website template for logistics, cargo, and freight forwarding services." />
        <meta name="twitter:image" content="https://themixly.com/wp-content/uploads/2025/07/image-3-1-scaled.jpg" />
      </Head>

      {/* App Layout with ThemeProvider */}
      <Layout>
        <ThemeProvider>
          {loading ? (
            <div className="page-loader" />
          ) : (
            <Component {...pageProps} />
          )}
        </ThemeProvider>

      </Layout>
    </Fragment>
  );
}

export default MyApp;
