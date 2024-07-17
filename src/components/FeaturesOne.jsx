'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesOne() {
  const { ref: refFeaturesOne1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: refFeaturesOne2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    const elements = [
      {
        inView: inView1,
        selector: '.wow-featuresOne-1',
        animation: 'animate__fadeInRight',
      },
      {
        inView: inView2,
        selector: '.wow-featuresOne-2',
        animation: 'animate__fadeInLeft',
      },
    ];

    elements.forEach(({ inView, selector, animation }) => {
      if (inView) {
        const element = document.querySelector(selector);
        if (element) {
          element.classList.add('animate__animated', animation);
        }
      }
    });
  }, [inView1, inView2]);

  return (
    <section className="features1 py-100">
      <div className="container">
        <div className="row d-flex align-items-center gx-md-5">
          <div className="col-md-6 order-last order-md-2" ref={refFeaturesOne1}>
            <div className="featues1-text-container d-flex flex-column justify-content-center h-100 wow-featuresOne-1">
              <span className="text-uppercase fw-semibold mb-4">
                Endless Possibilities
              </span>
              <h2 className="display-6 fw-bold mb-3">
                Smart Solutions For Proven Results
              </h2>
              <p className="text-muted">
                Leverage innovative tools to streamline your business processes
                and boosts your productivity
              </p>
              <ul className="features1-list simple-list">
                <li>
                  <p className="text-muted">
                    Customizable solutions tailored to fit your unique business
                    needs.
                  </p>
                </li>
                <li>
                  <p className="text-muted">
                    Comprehensive support to ensure your success at every step.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-6 order-first order-md-2"
            ref={refFeaturesOne2}
          >
            <div className="features1-img-container wow-featuresOne-2">
              <img
                src="images/features-img.jpg"
                alt="features-img"
                className="img-fluid mb-6 mb-md-0 custom-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesOne;
