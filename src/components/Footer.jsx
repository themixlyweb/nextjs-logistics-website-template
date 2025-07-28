import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { services, usefulLinks } from '../data.js';

/**
 * Renders a widget with a list of links.
 * @param {Array} list - Array of link objects { id, url, title }.
 * @param {string} title - Widget title.
 */
const Widget = ({ list, title }) => (
  <div className="widget">
    <h3 className="widget-title fs-20 mb-3 fw-bold text-main text-uppercase">{title}</h3>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ url, title, id }) => (
        <li key={id} className='d-flex'>
          <i className="uil uil-angle-right text-main" aria-hidden="true"></i>{' '}
          <NextLink href={url ? url : "#"} title={title} className='m-0'/>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-top overflow-hidden"
      style={{ backgroundImage: 'url(/img/footer-bg.png)' }}
      aria-label="Site footer"
    >
      <div className="container pt-10 pt-md-12 pb-2">
        <div className="row gx-10 justify-content-between">
          {/* Logo and About Section */}
          <div className="col-lg-4">
            <div className="widget d-flex flex-column align-items-start">
              <div className="logo-placeholder mb-3">
                <Image
                  src="/img/logo.webp"
                  alt="Company Logo"
                  width={150}
                  height={80}
                  priority
                />
              </div>
              <p className="lead mb-2 text-justify fs-18">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo accusamus nisi quidem a ea, sint veniam molestias vitae. Excepturi.
              </p>
              <div className="d-flex flex-column align-items-start">
                <h3 className="fs-24 mb-2">Follow Us On</h3>
                <SocialLinks className="nav social text-md-end" />
              </div>
            </div>
          </div>

          {/* Useful Links Widget */}
          <div className="col-sm-6 col-md-4 col-lg-2 mt-5 mt-lg-0 d-flex justify-content-md-center">
            <Widget list={usefulLinks} title="Useful Links" />
          </div>

          {/* Services Widget */}
          <div className="col-sm-6 col-md-4 col-lg-2 mt-5 mt-lg-0 d-flex justify-content-md-center">
            <Widget list={services} title="Services" />
          </div>

          {/* Contact Us Section */}
          <div className="col-md-4 col-lg-3 mt-5 mt-lg-0 d-flex justify-content-md-center">
            <div className="widget">
              <h3 className="widget-title fs-20 mb-3 fw-bolder text-uppercase text-main">Contact Us</h3>
              
              <div className="d-flex align-items-start mb-3">
                <i className="uil uil-location-pin-alt fs-30" aria-label="Location icon" />
                <address className="ms-2 m-0 mt-1">
                  123 Tech Park, Ta. Richmond, Dist. Greater London, United Kingdom – SW1A 1AA.
                </address>
              </div>

              <div className="d-flex align-items-center mb-3">
                <i className="uil uil-envelope fs-26" aria-label="Email icon" />
                <a href="mailto:info@freightedge.com" className="link-body ms-2" aria-label="Send an email">
                  info@freightedge.com
                </a>
              </div>

              <div className="d-flex align-items-center">
                <i className="uil uil-phone-volume fs-26" aria-label="Phone icon" />
                <p className="mt-1 ms-2 fs-18 mb-0">
                  <a href="tel:+919999999999" aria-label="Call phone number">
                    +91 99999 99999
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mt-md-4 mb-3" />

        {/* Footer Bottom Section */}
        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 text-center text-muted">
            © {currentYear} Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
