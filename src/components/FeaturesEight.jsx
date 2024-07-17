'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesEight() {
  const { ref: refFeaturesEightText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refFeaturesEightImg, inView: inViewImg } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const elements = [
      {
        inView: inViewText,
        selector: '.wow-featuresEight-text',
        animation: 'animate__fadeInRight',
      },
      {
        inView: inViewImg,
        selector: '.wow-featuresEight-img',
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
    <section className="features8 pt-100">
      <div className="container">
        <div className="row d-flex align-items-center gx-md-5">
          {/* Text Block  */}
          <div className="col-md-6 order-last order-md-2">
            <div
              className="features8-accordion-container wow-featuresEight-text"
              ref={refFeaturesEightText}
            >
              <div
                id="features8-accordion"
                className="accordion accordion-flush"
              >
                {/* Accordion Item 1  */}
                <div className="accordion-item">
                  <h5 className="accordion-header text-black">
                    <button
                      type="button"
                      className="accordion-button fw-bold fs-2"
                      data-bs-toggle="collapse"
                      data-bs-target="#features8-accordion-item-1"
                    >
                      Comprehensive Solutions
                    </button>
                  </h5>
                  <div
                    id="features8-accordion-item-1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#features8-accordion"
                  >
                    <div className="accordion-body">
                      <p className="text-muted">
                        Our analytics tools help you transform your business by
                        providing you with actionable insights and data driven
                        recommendations.
                      </p>

                      <p className="text-muted">
                        Enhance operational efficiency with streamlined
                        processes. Craft personalized strategies to engage your
                        audience.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accordion Item 2  */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      type="button"
                      className="accordion-button fw-bold fs-2"
                      data-bs-toggle="collapse"
                      data-bs-target="#features8-accordion-item-2"
                    >
                      Tailored Strategy
                    </button>
                  </h2>
                  <div
                    id="features8-accordion-item-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#features8-accordion"
                  >
                    <div className="accordion-body">
                      <p className="text-muted">
                        Our analytics tools provide you with a personalized
                        strategy that is tailored to your business needs and
                        goals.
                      </p>

                      <p className="text-muted">
                        Identify new business opportunities through market
                        research and competitor analysis. Develop effective
                        content strategies to engage your target audience.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Accordion Item 3  */}
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      type="button"
                      className="accordion-button fw-bold fs-2"
                      data-bs-toggle="collapse"
                      data-bs-target="#features8-accordion-item-3"
                    >
                      Detailed Weekly Reports
                    </button>
                  </h2>
                  <div
                    id="features8-accordion-item-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#features8-accordion"
                  >
                    <div className="accordion-body">
                      <p className="text-muted">
                        Our detailed weekly analytics reports provide you with a
                        comprehensive view of your business performance,
                        allowing you to make informed decisions and drive
                        growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Block  */}
          <div className="col-md-6 order-first order-md-2 mb-6 mb-md-0">
            <div
              className="features8-img-container wow-featuresEight-img"
              ref={refFeaturesEightImg}
            >
              <img
                src="images/feat-progress-content.jpg"
                alt="feat-progress-content"
                className="features8-img img-fluid custom-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesEight;
