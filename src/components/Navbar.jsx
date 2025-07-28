import { Fragment, useRef } from 'react';
import { useRouter } from 'next/router';
import useSticky from 'hooks/useSticky';
import Image from 'next/image.js';
import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import ListItemLink from 'components/ListItemLink';
import DropdownToggleLink from 'components/DropdownToggleLink';
import { services } from '../data.js';

const Navbar = ({
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
  navOtherClass = 'navbar-other d-flex d-lg-none',
  fancy = false,
  stickyBox = true,
}) => {
  // Sticky state based on scroll position (350px threshold)
  const sticky = useSticky(350);
  // Ref for the navbar element to measure height for sticky padding
  const navbarRef = useRef(null);
  const router = useRouter();

  const fixedClassName =
    'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  /**
   * Renders a list of links for dropdown menus.
   * @param {Array} links - Array of link objects with url, title, and id.
   */

  /**
   * Handler for clicking the "Services" dropdown toggle.
   * Navigates to the /services page.
   */
  const handleServices = () => {
    router.push('#');
  };

  /**
   * JSX content for the main header (logo, nav links, offcanvas menu)
   */
  const headerContent = (
    <Fragment>
      {/* Brand Logo */}
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          className="m-0"
          title={
            <Image
              alt="Logo | Company"
              src="/img/logo.webp"
              width={150}
              height={60}
            />
          }
        />
      </div>

      {/* Offcanvas navigation for mobile */}
      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none offcanvas-bg">
          <NextLink
            href="/"
            title={
              <Image
                alt="Logo | Company"
                src="/img/logo-light.webp"
                width={150}
                height={60}
              />
            }
          />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-auto"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
          {/* Navigation Links */}
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link m-0" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="About Us" className="nav-link m-0" />
            </li>

            {/* Services dropdown */}
            <li className="nav-item dropdown mt-1">
              <DropdownToggleLink
                title="Services"
                onClick={handleServices}
                className="nav-link dropdown-toggle"
              />
              <ul className="dropdown-menu mt-lg-3" data-bs-dismiss="offcanvas">
                {services.map(({ id, title }) => {
                  // Otherwise render a simple link item
                  return (
                    <ListItemLink
                      key={id}
                      href="#"
                      title={title}
                      linkClassName="dropdown-item m-0"
                    />
                  );
                })}
              </ul>
            </li>

            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Blog" className="nav-link m-0" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Contact Us" className="nav-link m-0" />
            </li>
          </ul>

          {/* Offcanvas footer: contact & social links */}
          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="info@freightedge.com"
                className="link-inverse m-0"
                href="mailto:info@freightedge.com"
              />
              <br />
              <NextLink href="tel:+919999999999" title="+91 99999 99999" className="m-0" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hamburger menu button */}
      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
          aria-label="Toggle navigation"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {/* Spacer div to prevent content jump when sticky navbar activates */}
      {stickyBox && (
        <div
          style={{
            paddingTop: sticky ? navbarRef.current?.clientHeight : 0,
          }}
        />
      )}

      {/* Main navbar element with sticky class toggle */}
      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">
            {headerContent}
          </div>
        )}
      </nav>
    </Fragment>
  );
};

export default Navbar;
