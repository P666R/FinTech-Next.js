'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesTwelve() {
  const { ref: refFeaturesTwelveImg, inView: inViewImg } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: refFeaturesTwelveText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    const elements = [
      {
        inView: inViewImg,
        selector: '.wow-featuresTwelve-img',
        animation: 'animate__fadeInRight',
      },
      {
        inView: inViewText,
        selector: '.wow-featuresTwelve-text',
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
    <section className="features12 pt-100">
      <div className="container">
        <div className="row d-flex align-items-center gx-md-2">
          {/* Image Block  */}
          <div className="col-md-6 col-lg-7">
            <div className="wow-featuresTwelve-img" ref={refFeaturesTwelveImg}>
              <img
                src="images/feats-work.jpg"
                alt="feats-work"
                className="features12-img img-fluid mb-6 mb-md-0 custom-shadow-lg"
              />
            </div>
          </div>
          {/* Text Block  */}
          <div className="col-md-6 col-lg-5">
            <div
              className="features12-text-container wow-featuresTwelve-text"
              ref={refFeaturesTwelveText}
            >
              <span className="text-uppercase fw-semibold d-inline-block mb-4">
                Strategies That Work
              </span>
              <h2 className="display-5 fw-bold mb-3">
                Revolutionizing Your Digital Brand
              </h2>
              <ul className="features12-list simple-list">
                <li>
                  <p className="text-muted">
                    Effective strategies to enhance your brand’s online presence
                    and drive engagement with targeted solutions.
                  </p>
                </li>
                <li>
                  <p className="text-muted">
                    Innovative approaches tailored to your needs, ensuring
                    growth and visibility in the competitive digital landscape.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesTwelve;
