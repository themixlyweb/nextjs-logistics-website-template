// Import necessary modules
import Image from 'next/image';
import NextLink from './NextLink';

// About component
const About = ({
  heading,
  headingH1,
  para,
  para2,
  para3,
  imgPosition = 'left', 
  src,
  btnTitle,
  btnUrl,
  video,
}) => {
  // Determine layout order based on image position
  const imageOrderClass = imgPosition === 'right' ? 'order-lg-2' : 'order-lg-1';
  const textOrderClass = imgPosition === 'right' ? 'order-lg-1' : 'order-lg-2';

  // Render either a video or an image
  const renderMedia = () => {
    if (video?.src) {
      return (
        <div className="position-relative d-flex justify-content-center">
          <video
            autoPlay
            muted
            loop
            style={{ maxWidth: '100%' }}
            title={video.title || 'Video'}
            src={video.src}
          />
        </div>
      );
    }

    return (
      <Image
        alt={`${headingH1 ? headingH1 : heading} | FreightEdge`}
        src={src}
        width={800}
        height={700}
        className="position-static"
        style={{
          height: '100%',
          minHeight: '400px',
          maxHeight: '70vh',
        }}
      />
    );
  };

  return (
    <div className="row align-items-center justify-content-between d-flex">
      {/* Media Section (Image/Video) */}
      <div className={`${imageOrderClass} col-lg-6 p-0`}>
        <figure className="rounded-top-4">
          {renderMedia()}
        </figure>
      </div>

      {/* Text Section */}
      <div className={`${textOrderClass} col-lg-6 px-8 py-10 bg-soft-primary`}>
        {/* Render H1 if provided */}
        {headingH1 && (
          <h1 className="fs-30 fw-bolder mb-5 text-main">
            {headingH1}
          </h1>
        )}

        {/* Render H2 if H1 not provided */}
        {heading && (
          <h2 className="mb-5 fs-30 text-main fw-bold">
            {heading}
          </h2>
        )}

        {/* Paragraphs */}
        {para && <p className="mb-3 text-justify">{para}</p>}
        {para2 && <p className="mb-3 text-justify">{para2}</p>}
        {para3 && <p className="mb-3 text-justify">{para3}</p>}

        {/* Optional Button */}
        {btnTitle && btnUrl && (
          <div className="mt-5 mb-5 mb-xl-0">
            <NextLink
              title={btnTitle}
              href={btnUrl}
              className="btn btn-md primary-bg text-white rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
