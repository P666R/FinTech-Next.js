'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesThree() {
  const { ref: refFeaturesThree1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: refFeaturesThree2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    const elements = [
      { inView: inView1, selector: '.wow-featuresThree-1' },
      { inView: inView2, selector: '.wow-featuresThree-2' },
    ];

    elements.forEach(({ inView, selector }) => {
      if (inView) {
        const element = document.querySelector(selector);
        if (element) {
          element.classList.add('animate__animated', 'animate__fadeInUp');
        }
      }
    });
  }, [inView1, inView2]);

  return (
    <section className="features3">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-9">
            <div className="features3-title-container text-center">
              <h2 className="display-4 fw-bold mb-4">
                Maximizing Your Marketing Impact
              </h2>
              <p className="lead">
                Innovative tools and strategies to elevate your marketing
                efforts
              </p>
            </div>
          </div>
        </div>
        {/* Features3 Cards  */}
        <div className="row d-flex align-items-center gx-md-5">
          {/* Features3 Card-1  */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div
              className="features3-card card bg-light border-0 custom-shadow-card wow-featuresThree-1"
              ref={refFeaturesThree1}
            >
              <div className="card-body p-4">
                <img
                  src="https://img.icons8.com/ios-filled/100/228BE6/bar-chart--v1.png"
                  alt="bar-chart--v1"
                  className="features3-card-img img-fluid mb-3"
                />
                <h5 className="card-title fw-bold fs-5 mb-3">
                  Marketing Integrations
                </h5>
                <ul className="simple-list card-text text-muted">
                  <li>
                    <p>
                      Seamlessly integrate with popular marketing platforms.
                    </p>
                  </li>
                  <li>
                    <p>
                      Enhance your campaigns with real time data and insights.
                    </p>
                  </li>
                </ul>
                <img
                  src="images/sec-feat-box-1.jpg"
                  alt="sec-feat-box-1"
                  className="img-fluid custom-shadow-card-sm"
                />
              </div>
            </div>
          </div>
          {/* Features3 Card-2  */}
          <div className="col-md-6">
            <div
              className="features3-card card bg-light border-0 custom-shadow-card wow-featuresThree-2"
              ref={refFeaturesThree2}
            >
              <div className="card-body p-4">
                <img
                  src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/228BE6/external-shuffle-arrows-arrows-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
                  alt="external-shuffle-arrows-arrows-vitaliy-gorbachev-fill-vitaly-gorbachev"
                  className="features3-card-img img-fluid mb-3"
                />
                <h5 className="card-title fw-bold fs-5 mb-3">
                  Business Intelligence
                </h5>
                <ul className="simple-list card-text text-muted">
                  <li>
                    <p>
                      Utilize powerful BI tools to gain insights into your
                      business.
                    </p>
                  </li>
                  <li>
                    <p>
                      Make more informed decisions with detailed data analysis.
                    </p>
                  </li>
                </ul>
                <img
                  src="images/sec-feat-box-2.jpg"
                  alt="sec-feat-box-2"
                  className="img-fluid custom-shadow-card-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesThree;
