'use client';

import { useEffect } from 'react';

function LoadScripts() {
  useEffect(() => {
    const loadScripts = async () => {
      try {
        // Load Bootstrap JavaScript
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');

        // Load jQuery
        const jqueryScript = document.createElement('script');
        jqueryScript.src =
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js';
        jqueryScript.crossOrigin = 'anonymous';
        jqueryScript.referrerPolicy = 'no-referrer';
        document.body.appendChild(jqueryScript);

        // Load Slick Carousel
        const slickScript = document.createElement('script');
        slickScript.src =
          'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
        slickScript.crossOrigin = 'anonymous';
        slickScript.referrerPolicy = 'no-referrer';
        document.body.appendChild(slickScript);

        // Load WOW.js
        const wowScript = document.createElement('script');
        wowScript.src =
          'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js';
        wowScript.crossOrigin = 'anonymous';
        wowScript.referrerPolicy = 'no-referrer';
        document.body.appendChild(wowScript);

        // Load Odometer.js
        const odometerScript = document.createElement('script');
        odometerScript.src =
          'https://cdnjs.cloudflare.com/ajax/libs/odometer.js/0.4.8/odometer.min.js';
        odometerScript.crossOrigin = 'anonymous';
        odometerScript.referrerPolicy = 'no-referrer';
        document.body.appendChild(odometerScript);

        // Load custom script after all dependencies
        const customScript = document.createElement('script');
        customScript.src = '/js/script.js'; // Update with your actual path
        document.body.appendChild(customScript);
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };
    loadScripts();
  }, []);

  return null;
}

export default LoadScripts;
