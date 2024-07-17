'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Hero() {
  // Use inView to detect when the component is in view
  const { ref: refHero, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  // Add a class to animate when in view
  useEffect(() => {
    if (inView) {
      const elements = document.querySelectorAll('.wow-hero');

      elements.forEach((element) => {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      });
    }
  }, [inView]);

  return (
    <header className="header">
      {/* Hero Section  */}
      <section className="hero">
        <div className="container text-center">
          {/* Hero Text  */}
          <div className="row justify-content-center mb-7 mb-sm-10">
            <div className="col-lg-9">
              <div
                className="hero-section-text vstack gap-3 wow-hero"
                ref={refHero}
              >
                <h2 className="display-3 fw-bold ">
                  Ultimate Analytics To Boost Your Business
                </h2>
                <p className="lead">
                  Discover advanced analytics and actionable insights to
                  efficiently drive your business growth forward with greater
                  ease and confidence
                </p>
                <div className="hero-section-buttons d-flex align-items-stretch align-items-sm-center justify-content-center gap-3 py-6">
                  <a href="#" className="btn btn-lg btn-primary">
                    Get Started Now
                  </a>
                  <a href="#" className="btn btn-lg btn-outline-dark border-2">
                    Find Out More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image  */}
          <div className="row">
            <div className="col-12">
              <div className="hero-section-img wow-hero" ref={refHero}>
                <img
                  src="images/hero-img.jpg"
                  alt="hero image"
                  className="img-fluid custom-shadow-lg rounded-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Hero;
