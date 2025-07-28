import CountUp from 'react-countup';
import { factList } from 'data';
const Facts = () => {
  return (
    <section className="wrapper bg-soft-primary">
      <div className="container py-10">
        <div className="row">
          <div className="col-xl-10 mx-auto">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              <h2 className="fs-36 fw-bold">
                Why Choose Us
              </h2>
              {factList.map(({ value, title, url, id, alt }) => (
                <div className="col-md-3" key={id}>
                  <img src={url} className="text-primary mb-3" width="100px" alt={alt} />
                  <h3 className="counter">
                    <CountUp end={value} />
                  </h3>
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
