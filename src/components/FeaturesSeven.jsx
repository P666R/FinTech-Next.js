'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesSeven() {
  const { ref: refFeaturesSevenImg, inView: inViewImg } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refFeaturesSevenText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const elements = [
      {
        inView: inViewImg,
        selector: '.wow-featuresSeven-img',
        animation: 'animate__fadeInRight',
      },
      {
        inView: inViewText,
        selector: '.wow-featuresSeven-text',
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
    <section className="features7 pt-100">
      <div className="container bg-light p-5 rounded-4">
        <div className="row d-flex align-items-center gx-md-5">
          {/* Image Block  */}
          <div className="col-md-6 col-lg-7">
            <div className="wow-featuresSeven-img" ref={refFeaturesSevenImg}>
              <img
                src="images/features-progress.jpg"
                alt="features-progress"
                className="features7-img img-fluid custom-shadow-lg mb-6 mb-md-0"
              />
            </div>
          </div>
          {/* Text Block  */}
          <div className="col-md-6 col-lg-5 order-last order-md-2">
            <div
              className="features7-text-container d-flex flex-column justify-content-center h-100 wow-featuresSeven-text"
              ref={refFeaturesSevenText}
            >
              <img
                src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/68/228BE6/external-puzzle-game-hobbies-and-interest-smashingstocks-mixed-smashing-stocks.png"
                alt="external-puzzle-game-hobbies-and-interest-smashingstocks-mixed-smashing-stocks"
                className="features7-card-img img-fluid mb-3"
              />
              <h5 className="display-6 fw-bold mb-3">
                Solutions to Drive Your Business Success
              </h5>
              <ul className="features7-list simple-list">
                <li>
                  <p className="text-muted">
                    Our analytics tools provide you with the insights you need
                    to make informed decisions and drive growth.
                  </p>
                </li>
                <li>
                  <p className="text-muted">
                    Deliver exceptional customer experiences with targeted
                    marketing.
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

export default FeaturesSeven;
