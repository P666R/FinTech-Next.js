'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesEleven() {
  const { ref: refFeaturesElevenText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refFeaturesElevenImg, inView: inViewImg } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const elements = [
      {
        inView: inViewText,
        selector: '.wow-featuresEleven-text',
        animation: 'animate__fadeInRight',
      },
      {
        inView: inViewImg,
        selector: '.wow-featuresEleven-img',
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
  }, [inViewText, inViewImg]);

  return (
    <section className="features11 py-100 bg-light">
      <div className="container">
        <div className="row bg-white custom-shadow-card p-4">
          {/* Text  */}
          <div className="col-md-5 mb-3 mb-md-0 d-flex align-items-center">
            <div
              className="features11-text-container text-center text-md-start wow-featuresEleven-text"
              ref={refFeaturesElevenText}
            >
              <span className="text-uppercase fw-semibold d-inline-block mb-4">
                Our satisfied customers
              </span>
              <h3 className="display-5 fw-bold">
                Join 2,000+ Leading Digital Agencies Globally
              </h3>
            </div>
          </div>
          {/* Images  */}
          <div className="col-md-7 d-flex align-items-center justify-content-center">
            <div
              className="features11-img-container wow-featuresEleven-img"
              ref={refFeaturesElevenImg}
            >
              <div className="row row-cols-3">
                <div className="col p-3">
                  <a href="#">
                    <img
                      src="images/brand-1.png"
                      alt="brand-1"
                      className="features11-card-img img-fluid"
                    />
                  </a>
                </div>
                <div className="col p-3">
                  <a href="#">
                    <img
                      src="images/brand-2.png"
                      alt="brand-2"
                      className="features11-card-img img-fluid"
                    />
                  </a>
                </div>
                <div className="col p-3">
                  <a href="#">
                    <img
                      src="images/brand-3.png"
                      alt="brand-3"
                      className="features11-card-img img-fluid"
                    />
                  </a>
                </div>
                <div className="col p-3">
                  <a href="#">
                    <img
                      src="images/brand-4.png"
                      alt="brand-4"
                      className="features11-card-img img-fluid"
                    />
                  </a>
                </div>
                <div className="col p-3">
                  <a href="#">
                    <img
                      src="images/brand-5.png"
                      alt="brand-5"
                      className="features11-card-img img-fluid"
                    />
                  </a>
                </div>
                <div className="col p-3">
                  <a href="#">
                    <img
                      src="images/brand-6.png"
                      alt="brand-6"
                      className="features11-card-img img-fluid"
                    />
                  </a>
                </div>
                <div className="col p-3">
                  <a href="#">
                    <img
                      src="images/brand-7.png"
                      alt="brand-7"
                      className="features11-card-img img-fluid"
                    />
                  </a>
                </div>
                <div className="col p-3">
                  <a href="#">
                    <img
                      src="images/brand-8.png"
                      alt="brand-8"
                      className="features11-card-img img-fluid"
                    />
                  </a>
                </div>
                <div className="col p-3">
                  <a href="#">
                    <img
                      src="images/brand-9.png"
                      alt="brand-9"
                      className="features11-card-img img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesEleven;
