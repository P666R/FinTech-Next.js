'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesTwo() {
  const { ref: refFeaturesTwo1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refFeaturesTwo2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refFeaturesTwo3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refFeaturesTwo4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refFeaturesTwo5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const elements = [
      { inView: inView1, selector: '.wow-featuresTwo-1' },
      { inView: inView2, selector: '.wow-featuresTwo-2' },
      { inView: inView3, selector: '.wow-featuresTwo-3' },
      { inView: inView4, selector: '.wow-featuresTwo-4' },
      {
        inView: inView5,
        selector: '.wow-featuresTwo-5',
        animation: 'animate__fadeInLeft',
      },
    ];

    elements.forEach(
      ({ inView, selector, animation = 'animate__fadeInRight' }) => {
        if (inView) {
          const element = document.querySelector(selector);
          if (element) {
            element.classList.add('animate__animated', animation);
          }
        }
      }
    );
  }, [inView1, inView2, inView3, inView4, inView5]);

  return (
    <section className="features2 features2-shape overflow-hidden pb-100">
      <div className="container">
        <div className="row d-flex align-items-center gx-md-5">
          {/* Features2 Cards  */}
          <div className="col-md-7 order-last order-md-2">
            <div className="row text-center text-md-start">
              <div className="col-md-6">
                {/* Features2 Card-1  */}
                <div
                  className="features2-card card mb-3 border-0 custom-shadow-card wow-featuresTwo-1"
                  ref={refFeaturesTwo1}
                >
                  <div className="card-body m-4">
                    <img
                      src="https://img.icons8.com/glyph-neue/64/228BE6/goal--v1.png"
                      alt="goal--v1"
                      className="img-fluid mb-3"
                    />
                    <h6 className="carfo-title fw-bold fs-5">
                      Digital Marketing
                    </h6>
                    <p className="card-text text-muted">
                      Empower your digital campaigns with our precise targeted
                      analytics.
                    </p>
                  </div>
                </div>
                {/* Features2 Card-2  */}
                <div
                  className="features2-card card mb-3 border-0 custom-shadow-card wow-featuresTwo-2"
                  ref={refFeaturesTwo2}
                >
                  <div className="card-body m-4">
                    <img
                      src="https://img.icons8.com/ios-filled/100/228BE6/financial-analytics.png"
                      alt="financial-analytics"
                      className="img-fluid mb-3"
                    />
                    <h6 className="card-title fw-bold fs-5">
                      Data & Analytics
                    </h6>
                    <p className="card-text text-muted">
                      Make data-driven decisions with our comprehensive
                      analytics tools.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                {/* Features2 Card-3  */}
                <div
                  className="features2-card card mb-3 border-0 custom-shadow-card wow-featuresTwo-3"
                  ref={refFeaturesTwo3}
                >
                  <div className="card-body m-4">
                    <img
                      src="https://img.icons8.com/ios-filled/100/228BE6/development-skill.png"
                      alt="development-skill"
                      className="img-fluid mb-3"
                    />
                    <h6 className="card-title fw-bold fs-5">Design & Dev</h6>
                    <p className="card-text text-muted">
                      Create stunning applications with our design & development
                      services.
                    </p>
                  </div>
                </div>
                {/* Features2 Card-4  */}
                <div
                  className="features2-card card border-0 custom-shadow-card wow-featuresTwo-4"
                  ref={refFeaturesTwo4}
                >
                  <div className="card-body m-4">
                    <img
                      src="https://img.icons8.com/glyph-neue/64/228BE6/process.png"
                      alt="process"
                      className="img-fluid mb-3"
                    />
                    <h6 className="card-title fw-bold fs-5">
                      Content Strategy
                    </h6>
                    <p className="card-text text-muted">
                      Develop a robust content strategy to engage & convert your
                      audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Features2 Text  */}
          <div className="col-md-5 order-first order-md-2 mb-4 mb-md-0">
            <div
              className="features2-text wow-featuresTwo-5"
              ref={refFeaturesTwo5}
            >
              <span className="text-uppercase fw-semibold d-inline-block mb-4">
                One-Stop Solutions
              </span>
              <h2 className="display-6 fw-bold mb-3">
                Innovative Solutions For Your Digital Enterprise
              </h2>
              <p>
                Streamline your operations with our all in one business
                solutions
              </p>
              <p>
                From marketing to analytics, we provide everything you need to
                succeed online
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesTwo;
