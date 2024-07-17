'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Slider from 'react-slick';

function FeaturesFifteen() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="features15 pt-100">
      <div className="container">
        {/* Title  */}
        <div className="row justify-content-center mb-2 mb-md-6">
          <div className="col-md-10 col-lg-9">
            <div className="features15-title-container text-center">
              <h2 className="display-4 fw-bold mb-3">Our Happy Clients</h2>
              <p className="lead">
                Read what our esteemed clients think about us
              </p>
            </div>
          </div>
        </div>
        {/* Testimonials  */}
        <div className="row">
          <div className="col text-center text-md-start gap-3">
            <Slider {...settings}>
              <div className="testimonials-review">
                <div className="testimonials-review-ratings text-warning fs-4 mb-3">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9734;</span>
                </div>
                <div className="testimonials-review-text mb-3">
                  <h5 className="fs-4 fw-bold">
                    Excellent service & good quality
                  </h5>
                  <p className="text-muted">
                    &quot;Fantastic service and quality. The team was very
                    professional and helped us achieve great results quickly. We
                    highly recommend their services!&quot;
                  </p>
                </div>
                <div className="testimonials-review-author">
                  <h6 className="fs-5 fw-semibold">Alexander McCaig</h6>
                  <p>
                    CEO, <span className="fs-5 fw-semibold">Star Corp</span>
                  </p>
                </div>
              </div>

              <div className="testimonials-review">
                <div className="testimonials-review-ratings text-warning fs-4 mb-3">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
                <div className="testimonials-review-text mb-3">
                  <h5 className="fs-4 fw-bold">
                    Outstanding support and results
                  </h5>
                  <p className="text-muted">
                    &quot;The support team was incredibly helpful, and the
                    results we achieved were beyond our expectations. A
                    top-notch experience all around!&quot;
                  </p>
                </div>
                <div className="testimonials-review-author">
                  <h6 className="fs-5 fw-semibold">Jessica Liu</h6>
                  <p>
                    COO, <span className="fs-5 fw-semibold">Innovatech</span>
                  </p>
                </div>
              </div>

              <div className="testimonials-review">
                <div className="testimonials-review-ratings text-warning fs-4 mb-3">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
                <div className="testimonials-review-text mb-3">
                  <h5 className="fs-4 fw-bold">
                    Highly recommend their services
                  </h5>
                  <p className="text-muted">
                    &quot;Our collaboration was seamless, and the team was
                    always available to address our needs. We couldn’t be
                    happier with the outcomes. Highly recommended!&quot;
                  </p>
                </div>
                <div className="testimonials-review-author">
                  <h6 className="fs-5 fw-semibold">Michael Rodriguez</h6>
                  <p>
                    CTO,
                    <span className="fs-5 fw-semibold">TechSolutions</span>
                  </p>
                </div>
              </div>

              <div className="testimonials-review">
                <div className="testimonials-review-ratings text-warning fs-4 mb-3">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
                <div className="testimonials-review-text mb-3">
                  <h5 className="fs-4 fw-bold">
                    Exceptional quality and service
                  </h5>
                  <p className="text-muted">
                    &quot;The quality of their work is exceptional, and their
                    service is unmatched. We achieved great results thanks to
                    their expertise and dedication.&quot;
                  </p>
                </div>
                <div className="testimonials-review-author">
                  <h6 className="fs-5 fw-semibold">Samantha Brown</h6>
                  <p>
                    Marketing Director,
                    <span className="fs-5 fw-semibold">MarketGuru</span>
                  </p>
                </div>
              </div>

              <div className="testimonials-review">
                <div className="testimonials-review-ratings text-warning fs-4 mb-3">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9734;</span>
                </div>
                <div className="testimonials-review-text mb-3">
                  <h5 className="fs-4 fw-bold">Great team and results</h5>
                  <p className="text-muted">
                    &quot;The team was very professional and delivered
                    outstanding results. We saw a significant improvement in our
                    KPIs. Highly recommend their services!&quot;
                  </p>
                </div>
                <div className="testimonials-review-author">
                  <h6 className="fs-5 fw-semibold">David Johnson</h6>
                  <p>
                    CEO,
                    <span className="fs-5 fw-semibold">Growth Ventures</span>
                  </p>
                </div>
              </div>

              <div className="testimonials-review">
                <div className="testimonials-review-ratings text-warning fs-4 mb-3">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
                <div className="testimonials-review-text mb-3">
                  <h5 className="fs-4 fw-bold">Amazing experience overall</h5>
                  <p className="text-muted">
                    &quot;From start to finish, the experience was amazing. The
                    team was knowledgeable, responsive, and delivered exactly
                    what we needed. We highly recommend them!&quot;
                  </p>
                </div>
                <div className="testimonials-review-author">
                  <h6 className="fs-5 fw-semibold">Emily White</h6>
                  <p>
                    COO,
                    <span className="fs-5 fw-semibold">NextGen Inc.</span>
                  </p>
                </div>
              </div>

              <div className="testimonials-review">
                <div className="testimonials-review-ratings text-warning fs-4 mb-3">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9734;</span>
                </div>
                <div className="testimonials-review-text mb-3">
                  <h5 className="fs-4 fw-bold">
                    Top-notch service and results
                  </h5>
                  <p className="text-muted">
                    &quot;We are extremely satisfied with the service and
                    results we received. The team was professional, efficient,
                    and delivered beyond our expectations.&quot;
                  </p>
                </div>
                <div className="testimonials-review-author">
                  <h6 className="fs-5 fw-semibold">James Wilson</h6>
                  <p>
                    VP,
                    <span className="fs-5 fw-semibold">Elite Enterprises</span>
                  </p>
                </div>
              </div>

              <div className="testimonials-review">
                <div className="testimonials-review-ratings text-warning fs-4 mb-3">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9734;</span>
                </div>
                <div className="testimonials-review-text mb-3">
                  <h5 className="fs-4 fw-bold">Great team to work with</h5>
                  <p className="text-muted">
                    &quot;The team was great to work with and delivered
                    excellent results. We saw a noticeable improvement in our
                    performance metrics. Highly recommended!&quot;
                  </p>
                </div>
                <div className="testimonials-review-author">
                  <h6 className="fs-5 fw-semibold">Sophia Brown</h6>
                  <p>
                    CMO,
                    <span className="fs-5 fw-semibold">Bright Future</span>
                  </p>
                </div>
              </div>

              <div className="testimonials-review">
                <div className="testimonials-review-ratings text-warning fs-4 mb-3">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9734;</span>
                </div>
                <div className="testimonials-review-text mb-3">
                  <h5 className="fs-4 fw-bold">Impressive work and support</h5>
                  <p className="text-muted">
                    &quot;The team provided impressive work and exceptional
                    support throughout the project. We achieved our goals and
                    look forward to working with them again.&quot;
                  </p>
                </div>
                <div className="testimonials-review-author">
                  <h6 className="fs-5 fw-semibold">Liam Smith</h6>
                  <p>
                    CTO,
                    <span className="fs-5 fw-semibold">Tech Innovators</span>
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesFifteen;
