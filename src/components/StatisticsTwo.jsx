'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function StatisticsTwo() {
  // Use motion values to manage animation
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);

  // Format the counts for display
  const roundedCount1 = useTransform(count1, (value) => value.toFixed(0));
  const roundedCount2 = useTransform(count2, (value) => value.toFixed(0));
  const roundedCount3 = useTransform(count3, (value) => value.toFixed(0));

  // Create separate refs for each element
  const { ref: refST1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: refST2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: refST3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      animate(count1, 67, {
        duration: 8,
        ease: 'easeInOut',
      });

      const element = document.querySelector('.wow-st-1');
      if (element) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  }, [count1, inView1]);

  useEffect(() => {
    if (inView2) {
      animate(count2, 89, {
        duration: 8,
        ease: 'easeInOut',
      });

      const element = document.querySelector('.wow-st-2');
      if (element) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  }, [count2, inView2]);

  useEffect(() => {
    if (inView3) {
      animate(count3, 15, {
        duration: 8,
        ease: 'easeInOut',
      });

      const element = document.querySelector('.wow-st-3');
      if (element) {
        element.classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  }, [count3, inView3]);

  return (
    <section className="features10 pt-100 mb-5">
      <div className="container">
        {/* Statistics Blocks  */}
        <div className="row row-cols-1 row-cols-md-3 text-center g-3">
          {/* Statistics Block-1  */}
          <div className="col" ref={refST1}>
            <div className="features10-block wow-st-1">
              <h2 className="display-2 fw-bold">
                <motion.span className="odometer">{roundedCount1}</motion.span>
                <small>%</small>
              </h2>
              <hr className="divider-stats mx-auto" />
              <p className="lead fs-5">
                Boost in productivity and teamwork after using our tools
              </p>
            </div>
          </div>
          {/* Statistics Block-2  */}
          <div className="col" ref={refST2}>
            <div className="features10-block wow-st-2">
              <h2 className="display-2 fw-bold">
                <motion.span className="odometer">{roundedCount2}</motion.span>
                <small>%</small>
              </h2>
              <hr className="divider-stats mx-auto" />
              <p className="lead fs-5">
                Percentage of users who see significant workflow improvements
              </p>
            </div>
          </div>
          {/* Statistics Block-3  */}
          <div className="col" ref={refST3}>
            <div className="features10-block wow-st-3">
              <h2 className="display-2 fw-bold">
                <motion.span className="odometer">{roundedCount3}</motion.span>
                <small>K</small>
              </h2>
              <hr className="divider-stats mx-auto" />
              <p className="lead fs-5">
                Number of satisfied users worldwide enjoying seamless management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsTwo;
