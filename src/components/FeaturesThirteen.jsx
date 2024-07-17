'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesThirteen() {
  const { ref: refFeaturesThirteenText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: refFeaturesThirteenImg, inView: inViewImg } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    const elements = [
      {
        inView: inViewText,
        selector: '.wow-featuresThirteen-text',
        animation: 'animate__fadeInRight',
      },
      {
        inView: inViewImg,
        selector: '.wow-featuresThirteen-img',
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
    <section className="features13 pt-100">
      <div className="container">
        <div className="row d-flex align-items-center bg-light p-5 gx-md-5">
          {/* Text Block  */}
          <div className="col-md-6 order-last order-md-2">
            <div
              className="features13-text-container wow-featuresThirteen-text"
              ref={refFeaturesThirteenText}
            >
              <span className="text-uppercase fw-semibold d-inline-block mb-4">
                Strategy & Consulting
              </span>
              <h2 className="display-6 fw-bold mb-3">
                Effective Digital Marketing Results
              </h2>
              <p className="text-muted">
                Implementing strategies that drive measurable outcomes and
                growth, our tailored digital marketing solutions elevate your
                brand and engage your audience effectively.
              </p>
              <p className="text-muted">
                Our consulting approach focuses on understanding your unique
                needs, crafting campaigns that resonate with your target market
                and deliver tangible results.
              </p>
            </div>
          </div>
          {/* Image Block  */}
          <div className="col-md-6 order-first order-md-2">
            <div
              className="features13-img-container wow-featuresThirteen-img"
              ref={refFeaturesThirteenImg}
            >
              <img
                src="images/feats-marketing.jpg"
                alt="feats-marketing"
                className="img-fluid mb-6 mb-md-0 custom-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesThirteen;
