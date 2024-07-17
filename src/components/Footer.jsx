'use client';

/* eslint-disable @next/next/no-img-element */

function Footer() {
  return (
    <footer className="footer-section pt-100 pb-50">
      <div className="container">
        {/* large Screen footer  */}
        <div className="row d-none d-md-flex">
          {/* Fo Section 1  */}
          <div className="col-md-3">
            <div className="fo-section">
              <h6 className="fo-title fs-5 fw-bold mb-4">FinTech</h6>
              <ul className="fo-links">
                <li>
                  <p>
                    <a href="services.html">Core Services</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="integrations.html">Integrations</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="projects.html">Latest Projects</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="pricing.html">Pricing Plans</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="faqs.html">Help & Support</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Advertising</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* Fo Section 2  */}
          <div className="col-md-3">
            <div className="fo-section">
              <h6 className="fo-title fs-5 fw-bold mb-4">Solutions</h6>
              <ul className="fo-links">
                <li>
                  <p>
                    <a href="#">Advanced Analytics</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Customer Insights</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Market Trends</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Operational Efficiency</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Performance Metrics</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="#">Scalable Solutions</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* Fo Section 3/4  */}
          <div className="col-md-3">
            <div className="fo-section">
              <h6 className="fo-title fs-5 fw-bold mb-4">Discover</h6>
              <ul className="fo-links">
                <li>
                  <p>
                    <a href="reviews.html">Success Stories</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="blog-listing.html">Our Blog</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="fo-section">
              <h6 className="fo-title fs-5 fw-bold mb-4">Legal</h6>
              <ul className="fo-links">
                <li>
                  <p>
                    <a href="terms.html">Terms of Use</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="privacy.html">Privacy Policy</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="cookies.html">Cookie Policy</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* Fo Section 5  */}
          <div className="col-md-3">
            <div className="fo-section">
              <h6 className="fo-title fs-5 fw-bold mb-4">About Us</h6>
              <ul className="fo-links">
                <li>
                  <p>
                    <a href="about.html">About Us</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="team.html">Our Team</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="careers.html">Careers</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="footer-form mt-2">
              <h6 className="fo-title fs-5 fw-bold mb-4">Follow the Best</h6>
              <form>
                <div className="input-group">
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                    autoComplete="email"
                  />
                  <button className="btn btn-primary" type="button">
                    &#8594;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Small Screen Footer  */}
        <div className="row d-md-none">
          <div className="accordion accordion-flush" id="footerAccordion">
            {/* Accordion 1  */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed fs-5 fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  FinTech
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#footerAccordion"
              >
                <div className="accordion-body">
                  <ul className="fo-links">
                    <li>
                      <p>
                        <a href="services.html">Core Services</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="integrations.html">Integrations</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="projects.html">Latest Projects</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="pricing.html">Pricing Plans</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="faqs.html">Help & Support</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#">Advertising</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Accordion 2  */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed fs-5 fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Solutions
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#footerAccordion"
              >
                <div className="accordion-body">
                  <ul className="fo-links">
                    <li>
                      <p>
                        <a href="#">Advanced Analytics</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#">Customer Insights</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#">Market Trends</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#">Operational Efficiency</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#">Performance Metrics</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="#">Scalable Solutions</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Accordion 3  */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed fs-5 fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Discover
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#footerAccordion"
              >
                <div className="accordion-body">
                  <ul className="fo-links">
                    <li>
                      <p>
                        <a href="reviews.html">Success Stories</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="blog-listing.html">Our Blog</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Accordion 4  */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed fs-5 fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Legal
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#footerAccordion"
              >
                <div className="accordion-body">
                  <ul className="fo-links">
                    <li>
                      <p>
                        <a href="terms.html">Terms of Use</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="privacy.html">Privacy Policy</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="cookies.html">Cookie Policy</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Accordion 5  */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed fs-5 fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  About Us
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#footerAccordion"
              >
                <div className="accordion-body">
                  <ul className="fo-links">
                    <li>
                      <p>
                        <a href="about.html">About Us</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="team.html">Our Team</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a href="careers.html">Careers</a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Add more sections as needed  */}
          </div>
          {/* Form  */}
          <div className="footer-form ms-3 mt-4">
            <h6 className="fo-title fs-5 fw-bold mb-4 ms-1">Follow the Best</h6>
            <form className="ms-1 d-grid w-75">
              <div className="input-group">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                  autoComplete="email"
                />
                <button className="btn btn-primary" type="button">
                  &#8594;
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Divider  */}
        <hr className="d-none d-md-block" />
        {/* Footer Copyright  */}
        <div className="footer-copyright mt-5">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <p>
                &copy; 2024 FinTech. <span>All Rights Reserved</span>
              </p>
            </div>
            <div className="col">
              <ul className="footer-list d-flex justify-content-md-end gap-2">
                <li>
                  <a href="#">
                    <img
                      src="https://img.icons8.com/ios-filled/50/228BE6/facebook--v1.png"
                      alt="facebook--v1"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://img.icons8.com/ios-filled/50/228BE6/twitterx--v1.png"
                      alt="twitterx--v1"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://img.icons8.com/ios-filled/50/228BE6/linkedin.png"
                      alt="linkedin"
                      className="img-fluid"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src="https://img.icons8.com/ios-filled/50/228BE6/instagram-new--v1.png"
                      alt="instagram-new--v1"
                      className="img-fluid"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
