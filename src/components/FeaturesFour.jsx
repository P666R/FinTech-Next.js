'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesFour() {
  const { ref: refFeaturesFour1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refFeaturesFour2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: refFeaturesFour3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    const elements = [
      { inView: inView1, selector: '.wow-featuresFour-1' },
      { inView: inView2, selector: '.wow-featuresFour-2' },
      { inView: inView3, selector: '.wow-featuresFour-3' },
    ];

    elements.forEach(({ inView, selector }) => {
      if (inView) {
        const element = document.querySelector(selector);
        if (element) {
          element.classList.add('animate__animated', 'animate__fadeInUp');
        }
      }
    });
  }, [inView1, inView2, inView3]);

  return (
    <section className="features4 pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="features4-title-container text-center">
              <h2 className="display-4 fw-bold mb-4">The Top Features</h2>
              <p className="lead">
                Our analytics tools come with a range of features that make it
                easy to get the insights you need to drive your business forward
              </p>
            </div>
          </div>
        </div>
        {/* Features4 Cards  */}
        <div className="row row-cols-1 row-cols-md-3">
          {/* Features4 Card-1  */}
          <div className="col wow-featuresFour-1" ref={refFeaturesFour1}>
            <div className="text-center">
              <img
                src="images/incredible-feat-1.jpg"
                alt="incredible-feat-1"
                className="features4-card-img img-fluid custom-shadow-card-sm rounded-3"
              />
            </div>
            <div className="text-center">
              <h6 className="fw-bold fs-5">Advanced Analytics</h6>
              <p className="text-muted">
                Our advanced analytics tools provide you with detailed insights
                into your customer behavior and preferences
              </p>
            </div>
          </div>
          {/* Features4 Card-2  */}
          <div className="col wow-featuresFour-2" ref={refFeaturesFour2}>
            <div className="text-center">
              <img
                src="images/incredible-feat-2.jpg"
                alt="incredible-feat-2"
                className="features4-card-img img-fluid custom-shadow-card-sm rounded-3"
              />
            </div>
            <div className="text-center">
              <h6 className="fw-bold fs-5">Effortless Integration</h6>
              <p className="text-muted">
                Our analytics tools integrate seamlessly with your existing
                systems to provide you with a comprehensive view of your
                business
              </p>
            </div>
          </div>
          {/* Features4 Card-3  */}
          <div className="col wow-featuresFour-3" ref={refFeaturesFour3}>
            <div className="text-center">
              <img
                src="images/incredible-feat-3.jpg"
                alt="incredible-feat-3"
                className="features4-card-img img-fluid custom-shadow-card-sm rounded-3"
              />
            </div>
            <div className="text-center">
              <h6 className="fw-bold fs-5">Realtime Dashboard</h6>
              <p className="text-muted">
                Our real time dashboard provides you with up to the minute
                insights into your business performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesFour;
