import React, { useRef } from 'react';
import Navbar from './Navbar';
import useSticky from 'hooks/useSticky';

/**
 * Header component that wraps the Navbar and applies sticky behavior.
 */
const Header = () => {
  // Ref to the header container (optional if you want to manipulate it)
  const stickyRef = useRef(null);

  // Custom hook that returns true if the scroll is past 350px
  const isSticky = useSticky(350);

  return (
    <div
      ref={stickyRef}
      className={`sticky-wrapper${isSticky ? ' is-sticky' : ''}`}
      aria-label="Site header"
    >
      <Navbar />
    </div>
  );
};

export default Header;
