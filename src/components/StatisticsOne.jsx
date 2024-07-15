'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function StatisticsOne() {
  // Use motion values to manage animation
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);

  const formatWithOneDecimal = (value) => {
    return Math.round(value * 10) / 10;
  };

  // Round the counts for display
  const roundedCount1 = useTransform(count1, formatWithOneDecimal);
  const roundedCount2 = useTransform(count2, Math.round);
  const roundedCount3 = useTransform(count3, formatWithOneDecimal);

  // Use inView to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once
    threshold: 0.5, // Trigger animation when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      // Start animations for each count with easing and longer duration
      const animation1 = animate(count1, 9.1, {
        duration: 8,
        ease: 'easeInOut',
      });

      const animation2 = animate(count2, 92, {
        duration: 8,
        ease: 'easeInOut',
      });

      const animation3 = animate(count3, 4.5, {
        duration: 8,
        ease: 'easeInOut',
      });

      // Clean up animations on unmount
      return () => {
        animation1.stop();
        animation2.stop();
        animation3.stop();
      };
    }
  }, [count1, count2, count3, inView]);

  return (
    <section ref={ref} className="statistics py-100">
      <div className="container">
        <div className="row justify-content-md-center row-cols-1 row-cols-md-3 g-4">
          {/* Stat 1  */}
          <div className="col">
            <div
              className="statistics-section-text d-flex flex-column flex-lg-row  text-center align-items-lg-center wow animate__animated animate__fadeInUp"
              data-wow-offset="100"
            >
              <motion.h2 className="display-2 fw-bold flex-lg-shrink-0">
                <motion.span className="odometer">{roundedCount1}</motion.span>
                <small>K</small>
              </motion.h2>
              <p className="lead fs-5">Clients engaged worldwide with us</p>
            </div>
          </div>
          {/* Stat 2  */}
          <div className="col">
            <div
              className="statistics-section-text d-flex flex-column flex-lg-row  text-center align-items-lg-center wow animate__animated animate__fadeInUp"
              data-wow-offset="100"
            >
              <motion.h2 className="display-2 fw-bold flex-lg-shrink-0">
                <motion.span className="odometer">{roundedCount2}</motion.span>
                <small>%</small>
              </motion.h2>
              <p className="lead fs-5">
                Increase in client satisfaction last year
              </p>
            </div>
          </div>
          {/* Stat 3  */}
          <div className="col">
            <div
              className="statistics-section-text d-flex flex-column flex-lg-row  text-center align-items-lg-center wow animate__animated animate__fadeInUp"
              data-wow-offset="100"
            >
              <motion.h2 className="display-2 fw-bold flex-lg-shrink-0">
                <motion.span className="odometer">{roundedCount3}</motion.span>
                <small>%</small>
              </motion.h2>
              <p className="lead fs-5">Average ratings for our services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsOne;
