'use client';

/* eslint-disable @next/next/no-img-element */

function FeaturesSixteeen() {
  return (
    <section className="features16 pt-100">
      <div className="container">
        <div className="banner-img custom-shadow-lg">
          <div className="row d-flex align-items-center">
            {/* Text  */}
            <div className="banner-text-container col-md-8 col-lg-7">
              <h4 className="display-6 mb-4 fw-bold">
                Join 2,000+ Thriving Businesses
                <br />
                With FinTech
              </h4>
              <p className="text-muted fs-4 fw-semibold mb-4">
                Start your free 7-day trial. No credit card required
              </p>
              <div className="banner-section-buttons d-flex align-align-items-stretch align-items-sm-center justify-content-sm-start gap-3">
                <a href="#" className="btn btn-lg btn-primary">
                  Get Started
                </a>
                <a href="#" className="btn btn-lg btn-outline-dark border-2">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSixteeen;
