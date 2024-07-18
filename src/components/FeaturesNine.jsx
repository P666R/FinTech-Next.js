'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function FeaturesNine() {
  const { ref: refFeaturesNineVideo, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const videoBtnRef = useRef(null);
  const videoModalRef = useRef(null);
  const videoRef = useRef(null);
  const videoSrcRef = useRef('');

  useEffect(() => {
    if (inView) {
      const element = document.querySelector('.wow-featuresNine-video');
      if (element) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  }, [inView]);

  useEffect(() => {
    const videoBtn = videoBtnRef.current;
    const videoModal = videoModalRef.current;
    const video = videoRef.current;

    if (videoBtn !== null) {
      videoBtn.addEventListener('click', () => {
        videoSrcRef.current = videoBtn.getAttribute('data-bs-src');
      });
    }

    const handleShown = () => {
      if (video) {
        video.setAttribute(
          'src',
          videoSrcRef.current + '?autoplay=1&modestbranding=1&showInfo=0'
        );
      }
    };

    const handleHide = () => {
      if (video) {
        video.setAttribute('src', '');
      }
    };

    if (videoModal !== null) {
      videoModal.addEventListener('shown.bs.modal', handleShown);
      videoModal.addEventListener('hide.bs.modal', handleHide);
    }

    return () => {
      if (videoModal !== null) {
        videoModal.removeEventListener('shown.bs.modal', handleShown);
        videoModal.removeEventListener('hide.bs.modal', handleHide);
      }
    };
  }, []);

  return (
    <section className="features9 pt-100">
      <div className="container">
        {/* Title */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-10 col-lg-9">
            <div className="features9-text-container text-center">
              <h2 className="display-4 fw-bold mb-4">Unified Platform</h2>
              <p className="lead">
                Manage all your tasks and projects efficiently in one
                centralized location
              </p>
            </div>
          </div>
        </div>
        {/* Video */}
        <div className="row">
          <div className="col">
            <div
              className="features9-video-container wow-featuresNine-video position-relative"
              ref={refFeaturesNineVideo}
            >
              <img
                className="img-fluid rounded-5 border border-5 border-black-50 shadow"
                src="https://img.youtube.com/vi/bNpx7gpSqbY/maxresdefault.jpg"
                alt="video-image"
              />
              <a
                className="video-btn"
                data-bs-toggle="modal"
                data-bs-target="#videoModal"
                data-bs-src="https://www.youtube.com/embed/bNpx7gpSqbY"
                ref={videoBtnRef}
              >
                <span className="video-play-button">
                  <span></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <div className="video-modal">
        <div id="videoModal" className="modal fade" ref={videoModalRef}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="ratio ratio-16x9">
                <iframe
                  frameBorder="0"
                  className="embed-responsive-item"
                  id="video"
                  ref={videoRef}
                  allow="autoplay; encrypted-media; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesNine;
