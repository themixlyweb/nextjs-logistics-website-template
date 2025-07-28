import { Button } from 'react-bootstrap';
import Image from 'next/image';

/**
 * Hero section component with a full-screen background video and call-to-action.
 */
const Hero = () => {
  return (
    <div className="wrapper text-white" style={{ position: 'relative' }}>
      {/* uncomment this to add video here */}
      {/* Background video covering full area */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center bottom',
          zIndex: -1,
        }}
      >
        <source src="/img/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <Image
          src="/img/hero-bg.webp"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div
          className="overlay position-absolute w-100 h-100"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}
        ></div>
      </div>

      {/* Content overlay */}
      <div className="content">
        <div className="container pb-14 pt-14 pt-md-20 pb-md-20 text-left">
          {/* Empty icon placeholder? Consider removing or adding content */}
          <i className="text-white fs-30 opacity-50" aria-hidden="true" />

          <div className="row mt-3">
            <div className="col-xl-9 col-xxl-8">
              <div className="swiper-container dots-light dots-closer mb-6">
                <blockquote className="border-0 fs-24 mb-0">
                  <div className="justify-content-left">
                    <div
                      className="p-5 rounded"
                      style={{
                        background:
                          'linear-gradient(75deg, rgba(68,73,82,0.5) 1%, rgba(68,73,82,0.1) 100%)',
                      }}
                    >
                      {/* Main heading */}
                      <h2 className="mb-0 text-white fs-50 w-75">
                        Global Logistics Solutions and Freight Forwarding Experts
                      </h2>

                      {/* Call-to-action button wrapped with semantic anchor */}
                      <a href="#" aria-label="Navigate to About Us page">
                        <Button className="mt-5 bg-blue text-white px-3 py-1">
                          Get Started{' '}
                          <i
                            className="uil uil-arrow-right"
                            style={{ fontSize: '25px', marginLeft: '10px' }}
                            aria-hidden="true"
                          />
                        </Button>
                      </a>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
