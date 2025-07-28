import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component that wraps pages with consistent header and footer.
 * @param {React.ReactNode} children - Page content to render between header and footer.
 */
const Layout = ({ children }) => {
  return (
    <>
      {/* Site-wide header */}
      <Header />

      {/* Main page content */}
      {children}

      {/* Site-wide footer */}
      <Footer />
    </>
  );
};

export default Layout;
