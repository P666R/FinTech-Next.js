'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesFive() {
  const { ref: refFeaturesFiveText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: refFeaturesFiveImg, inView: inViewImg } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    const elements = [
      { inView: inViewText, selector: '.wow-featuresFive-text' },
      { inView: inViewImg, selector: '.wow-featuresFive-img' },
    ];

    elements.forEach(({ inView, selector }) => {
      if (inView) {
        const element = document.querySelector(selector);
        if (element) {
          element.classList.add('animate__animated', 'animate__fadeInUp');
        }
      }
    });
  }, [inViewText, inViewImg]);

  return (
    <section className="features5 pt-100 overflow-hidden">
      <div className="container">
        <div className="row d-flex align-items-center gx-md-5">
          {/* Text Block  */}
          <div
            className="col-md-6 order-last order-md-2 pb-5 pb-lg-0 wow-featuresFive-text"
            ref={refFeaturesFiveText}
          >
            <div className="features5-text-container">
              <span className="text-uppercase fw-semibold d-inline-block mb-4">
                Personalized Strategy
              </span>
              <h2 className="display-5 fw-bold mb-3">
                Effectively Engage Your Target Market
              </h2>
              <p className="text-muted">
                Our analytics tools help you understand your target audience
                better, allowing you to create targeted marketing campaigns that
                drive results
              </p>
              <p className="text-muted">
                Optimize your marketing budget with data-driven insights.
                Develop effective content strategies to engage your target
                audience
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-md-center mt-4 gap-4">
                <div className="custom-shadow-card py-3 px-4 vstack gap-2">
                  <img
                    src="https://img.icons8.com/ios-filled/50/228BE6/idea--v1.png"
                    alt="idea--v1"
                    className="features5-card-img img-fluid"
                  />
                  <h6 className="fs-3 fw-semibold">Smart</h6>
                  <p className="text-muted">
                    Our smart solutions are designed to help you achieve your
                    business goals. Optimize your marketing budget with data
                    driven insights
                  </p>
                </div>
                <div className="custom-shadow-card py-3 px-4 vstack gap-2">
                  <img
                    src="https://img.icons8.com/glyph-neue/64/228BE6/change.png"
                    alt="change"
                    className="features5-card-img img-fluid"
                  />
                  <h6 className="fs-3 fw-semibold">Flexible</h6>
                  <p className="text-muted">
                    Our flexible solutions are designed to adapt to your
                    business needs. Develop targeted marketing campaigns to
                    engage your target audience
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Image Block  */}
          <div
            className="col-md-6 order-first order-md-2 wow-featuresFive-img"
            ref={refFeaturesFiveImg}
          >
            <div className="features5-img-container">
              <img
                src="images/features-content.jpg"
                alt="features-content-image"
                className="rounded-4 shadow mb-6 mb-md-0 img-fluid features5-img-fluid-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesFive;
