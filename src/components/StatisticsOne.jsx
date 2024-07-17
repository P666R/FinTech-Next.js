'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function StatisticsOne() {
  const count1 = useMotionValue(0.0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0.0);

  const formatWithOneDecimal = (value) => value.toFixed(1);
  const formatWholeNumber = (value) => value.toFixed(0).padStart(2, '0');

  const roundedCount1 = useTransform(count1, formatWithOneDecimal);
  const roundedCount2 = useTransform(count2, formatWholeNumber);
  const roundedCount3 = useTransform(count3, formatWithOneDecimal);

  const { ref: refSO1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });
  const { ref: refSO2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });
  const { ref: refSO3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  useEffect(() => {
    const elements = [
      { inView: inView1, count: count1, target: 9.1, selector: '.wow-so-1' },
      { inView: inView2, count: count2, target: 92, selector: '.wow-so-2' },
      { inView: inView3, count: count3, target: 4.5, selector: '.wow-so-3' },
    ];

    elements.forEach(({ inView, count, target, selector }) => {
      if (inView) {
        animate(count, target, {
          duration: 8,
          ease: 'easeInOut',
        });

        const element = document.querySelector(selector);
        if (element) {
          element.classList.add('animate__animated', 'animate__fadeInUp');
        }
      }
    });
  }, [inView1, inView2, inView3, count1, count2, count3]);

  return (
    <section className="statistics py-100">
      <div className="container">
        <div className="row justify-content-md-center row-cols-1 row-cols-md-3 g-3">
          {/* Stat 1 */}
          <div className="col" ref={refSO1}>
            <div className="statistics-section-text d-flex flex-column flex-lg-row text-center align-items-lg-center wow-so-1 gap-2">
              <motion.h2 className="display-2 fw-bold flex-lg-shrink-0">
                <motion.span className="odometer1">{roundedCount1}</motion.span>
                <small>K</small>
              </motion.h2>
              <p className="lead fs-5 mb-lg-0">
                Clients engaged worldwide with us
              </p>
            </div>
          </div>
          {/* Stat 2 */}
          <div className="col" ref={refSO2}>
            <div className="statistics-section-text d-flex flex-column flex-lg-row text-center align-items-lg-center wow-so-2 gap-2">
              <motion.h2 className="display-2 fw-bold flex-lg-shrink-0">
                <motion.span className="odometer2">{roundedCount2}</motion.span>
                <small>%</small>
              </motion.h2>
              <p className="lead fs-5 mb-lg-0">
                Increase in client satisfaction last year
              </p>
            </div>
          </div>
          {/* Stat 3 */}
          <div className="col" ref={refSO3}>
            <div className="statistics-section-text d-flex flex-column flex-lg-row text-center align-items-lg-center wow-so-3 gap-2">
              <motion.h2 className="display-2 fw-bold flex-lg-shrink-0">
                <motion.span className="odometer3">{roundedCount3}</motion.span>
                <small>%</small>
              </motion.h2>
              <p className="lead fs-5 mb-lg-0">
                High average ratings for our services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsOne;
