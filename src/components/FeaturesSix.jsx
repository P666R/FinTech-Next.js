'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesSix() {
  const { ref: refFeaturesSix1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: refFeaturesSix2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: refFeaturesSix3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: refFeaturesSix4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: refFeaturesSix5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const { ref: refFeaturesSix6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    const elements = [
      { inView: inView1, selector: '.wow-featuresSix-1' },
      { inView: inView2, selector: '.wow-featuresSix-2' },
      { inView: inView3, selector: '.wow-featuresSix-3' },
      { inView: inView4, selector: '.wow-featuresSix-4' },
      { inView: inView5, selector: '.wow-featuresSix-5' },
      { inView: inView6, selector: '.wow-featuresSix-6' },
    ];

    elements.forEach(({ inView, selector }) => {
      if (inView) {
        const element = document.querySelector(selector);
        if (element) {
          element.classList.add('animate__animated', 'animate__fadeInUp');
        }
      }
    });
  }, [inView1, inView2, inView3, inView4, inView5, inView6]);

  return (
    <section className="features6 pt-7 pt-md-8">
      <div className="container">
        {/* Text Block  */}
        <div className="row justify-content-center text-center">
          <div className="col-md-9">
            <div className="features6-text-container">
              <h2 className="display-4 fw-bold mb-4">Integrated Solutions</h2>
              <p className="lead">
                Our analytics tools provide you with a comprehensive view of
                your business, allowing you to make informed decisions and drive
                growth
              </p>
            </div>
          </div>
          {/* Feature Cards  */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-md-6">
            {/* Feature Card 1  */}
            <div className="col d-flex">
              <div
                className="features6-card card flex-fill border-0 custom-shadow-card wow-featuresSix-1"
                ref={refFeaturesSix1}
              >
                <div className="card-body d-flex flex-column flex-md-row align-items-stretch gap-4">
                  <div>
                    <img
                      src="https://img.icons8.com/ios-filled/100/228BE6/light-automation.png"
                      alt="light-automation"
                      className="features6-card-img"
                    />
                  </div>
                  <div className="text-center text-md-start">
                    <h5 className="card-title fw-bold">Branding Services</h5>
                    <p className="card-text text-muted">
                      Our branding services help you establish a strong brand
                      identity that resonates with your target audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Card 2  */}
            <div className="col d-flex">
              <div
                className="features6-card card flex-fill border-0 custom-shadow-card wow-featuresSix-2"
                ref={refFeaturesSix2}
              >
                <div className="card-body d-flex flex-column flex-md-row align-items-stretch gap-4">
                  <div>
                    <img
                      src="https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/64/228BE6/external-pie-chart-ecommerce-marketing-yogi-aprelliyanto-glyph-yogi-aprelliyanto.png"
                      alt="external-pie-chart-ecommerce-marketing-yogi-aprelliyanto-glyph-yogi-aprelliyanto"
                      className="features6-card-img"
                    />
                  </div>
                  <div className="text-center text-md-start">
                    <h5 className="card-title fw-bold">Market Research</h5>
                    <p className="card-text text-muted">
                      Our market research services provide you with detailed
                      insights into your target audience and market trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Card 3  */}
            <div className="col d-flex">
              <div
                className="features6-card card flex-fill border-0 custom-shadow-card wow-featuresSix-3"
                ref={refFeaturesSix3}
              >
                <div className="card-body d-flex flex-column flex-md-row align-items-stretch gap-4">
                  <div>
                    <img
                      src="https://img.icons8.com/ios-filled/100/228BE6/web-design.png"
                      alt="web-design"
                      className="features6-card-img"
                    />
                  </div>
                  <div className="text-center text-md-start">
                    <h5 className="card-title fw-bold">Content Creation</h5>
                    <p className="card-text text-muted">
                      Our content creation services help you create high-quality
                      content that resonates with your target audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Card 4  */}
            <div className="col d-flex">
              <div
                className="features6-card card flex-fill border-0 custom-shadow-card wow-featuresSix-4"
                ref={refFeaturesSix4}
              >
                <div className="card-body d-flex flex-column flex-md-row align-items-stretch gap-4">
                  <div>
                    <img
                      src="https://img.icons8.com/glyph-neue/64/228BE6/e-commerce.png"
                      alt="e-commerce"
                      className="features6-card-img"
                    />
                  </div>
                  <div className="text-center text-md-start">
                    <h5 className="card-title fw-bold">E-Commerce Solutions</h5>
                    <p className="card-text text-muted">
                      Our e-commerce solutions help you optimize your online
                      store for maximum conversions and revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Card 5  */}
            <div className="col d-flex">
              <div
                className="features6-card card flex-fill border-0 custom-shadow-card wow-featuresSix-5"
                ref={refFeaturesSix5}
              >
                <div className="card-body d-flex flex-column flex-md-row align-items-stretch gap-4">
                  <div>
                    <img
                      src="https://img.icons8.com/glyph-neue/64/228BE6/leaderboard.png"
                      alt="leaderboard"
                      className="features6-card-img"
                    />
                  </div>
                  <div className="text-center text-md-start">
                    <h5 className="card-title fw-bold">Competitor Analysis</h5>
                    <p className="card-text text-muted">
                      Our competitor analysis services help you understand your
                      competitors better, for you to stay ahead of the
                      competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Card 6  */}
            <div className="col d-flex">
              <div
                className="features6-card card flex-fill border-0 custom-shadow-card wow-featuresSix-6"
                ref={refFeaturesSix6}
              >
                <div className="card-body d-flex flex-column flex-md-row align-items-stretch gap-4">
                  <div>
                    <img
                      src="https://img.icons8.com/ios-filled/100/228BE6/positive-dynamic.png"
                      alt="positive-dynamic"
                      className="features6-card-img"
                    />
                  </div>
                  <div className="text-center text-md-start">
                    <h5 className="card-title fw-bold">SEO Services</h5>
                    <p className="card-text text-muted">
                      Our SEO services help you optimize your online presence
                      and drive more traffic to your website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSix;
