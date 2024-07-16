'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function StatisticsOne() {
  // Use motion values to manage animation
  const count1 = useMotionValue(0.0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0.0);

  const formatWithOneDecimal = (value) => value.toFixed(1); // Ensures 1 decimal place
  const formatWholeNumber = (value) => value.toFixed(0).padStart(2, '0'); // Ensures 2 digits

  // Round the counts for display
  const roundedCount1 = useTransform(count1, formatWithOneDecimal);
  const roundedCount2 = useTransform(count2, formatWholeNumber);
  const roundedCount3 = useTransform(count3, formatWithOneDecimal);

  // Create separate refs for each element
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animate(count1, 9.1, {
        duration: 8,
        ease: 'easeInOut',
      });

      const element = document.querySelector('.wow1');
      if (element) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  }, [count1, inView1]);

  useEffect(() => {
    if (inView2) {
      animate(count2, 92, {
        duration: 8,
        ease: 'easeInOut',
      });

      const element = document.querySelector('.wow2');
      if (element) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  }, [count2, inView2]);

  useEffect(() => {
    if (inView3) {
      animate(count3, 4.5, {
        duration: 8,
        ease: 'easeInOut',
      });

      const element = document.querySelector('.wow3');
      if (element) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  }, [count3, inView3]);

  return (
    <section className="statistics py-100">
      <div className="container">
        <div className="row justify-content-md-center row-cols-1 row-cols-md-3 g-4">
          {/* Stat 1 */}
          <div className="col" ref={ref1}>
            <div className="statistics-section-text d-flex flex-column flex-lg-row text-center align-items-lg-center wow1">
              <motion.h2 className="display-2 fw-bold flex-lg-shrink-0">
                <motion.span className="odometer1">{roundedCount1}</motion.span>
                <small>K</small>
              </motion.h2>
              <p className="lead fs-5">Clients engaged worldwide with us</p>
            </div>
          </div>
          {/* Stat 2 */}
          <div className="col" ref={ref2}>
            <div className="statistics-section-text d-flex flex-column flex-lg-row text-center align-items-lg-center wow2">
              <motion.h2 className="display-2 fw-bold flex-lg-shrink-0">
                <motion.span className="odometer2">{roundedCount2}</motion.span>
                <small>%</small>
              </motion.h2>
              <p className="lead fs-5">
                Increase in client satisfaction last year
              </p>
            </div>
          </div>
          {/* Stat 3 */}
          <div className="col" ref={ref3}>
            <div className="statistics-section-text d-flex flex-column flex-lg-row text-center align-items-lg-center wow3">
              <motion.h2 className="display-2 fw-bold flex-lg-shrink-0">
                <motion.span className="odometer3">{roundedCount3}</motion.span>
                <small>%</small>
              </motion.h2>
              <p className="lead fs-5">High average ratings for our services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsOne;
