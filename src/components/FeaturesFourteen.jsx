'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesFourteen() {
  const { ref: refFeaturesFourteenImg, inView: inViewImg } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refFeaturesFourteenText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const elements = [
      {
        inView: inViewImg,
        selector: '.wow-featuresFourteen-img',
        animation: 'animate__fadeInRight',
      },
      {
        inView: inViewText,
        selector: '.wow-featuresFourteen-text',
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
    <section className="features14 pt-100">
      <div className="container">
        <div className="row d-flex align-items-center gx-md-5">
          {/* Image Block  */}
          <div className="col-md-6">
            <div
              className="features14-img-container wow-featuresFourteen-img"
              ref={refFeaturesFourteenImg}
            >
              <img
                src="images/feats-discover.jpg"
                alt="feats-discover"
                className="img-fluid mb-6 mb-md-0 custom-shadow-lg"
              />
            </div>
          </div>
          {/* Text Block  */}
          <div className="col-md-6">
            <div
              className="features14-text-container wow-featuresFourteen-text"
              ref={refFeaturesFourteenText}
            >
              <span className="text-uppercase fw-semibold d-inline-block mb-4">
                Easy Integrations
              </span>
              <h2 className="display-5 fw-bold mb-3">
                Integrate Your Essential Tools Seamlessly
              </h2>
              <p className="text-muted">
                Seamlessly connect and integrate your essential tools with our
                platform in just a few clicks. Our solution ensures smooth
                operations, enhancing productivity and efficiency without any
                hassle. Experience the simplicity of integration and take your
                workflow to the next level.
              </p>
              <a
                href="#"
                className="fs-5 fw-semibold link-underline link-underline-opacity-0"
              >
                Discover More <span>&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesFourteen;
