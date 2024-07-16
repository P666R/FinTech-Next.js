/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';

function Header() {
  useEffect(() => {
    let hamburgerOpen = false;
    const navbar = document.querySelector('.navigation');
    const navbarCollapse = document.querySelector('#navbarCollapse');

    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (navbar) {
        navbar.classList.toggle('navbar-sticky', scrolled);
        navbar.classList.toggle('py-4', !scrolled);
        navbar.classList.toggle('navbar-opaque', !scrolled && hamburgerOpen);
      }
    };

    window.addEventListener('scroll', handleScroll);

    if (navbarCollapse) {
      navbarCollapse.addEventListener('show.bs.collapse', () => {
        hamburgerOpen = true;
        if (window.scrollY <= 50 && navbar) {
          navbar.classList.add('navbar-opaque');
        }
      });

      navbarCollapse.addEventListener('hide.bs.collapse', () => {
        hamburgerOpen = false;
        if (window.scrollY <= 50 && navbar) {
          navbar.classList.remove('navbar-opaque');
        }
      });
    }

    handleScroll();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (navbarCollapse) {
        navbarCollapse.removeEventListener('show.bs.collapse', () => {
          hamburgerOpen = true;
          if (window.scrollY <= 50 && navbar) {
            navbar.classList.add('navbar-opaque');
          }
        });

        navbarCollapse.removeEventListener('hide.bs.collapse', () => {
          hamburgerOpen = false;
          if (window.scrollY <= 50 && navbar) {
            navbar.classList.remove('navbar-opaque');
          }
        });
      }
    };
  }, []);

  return (
    <nav className="navigation navbar navbar-expand-lg fixed-top navbar-light py-4">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img
            src="/images/logo.png"
            alt="logo"
            className="logo-img img-fluid"
          />
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse fw-semibold"
          id="navbarCollapse"
        >
          <ul className="navbar-nav ms-auto gap-4 gap-lg-2 align-items-lg-center">
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                About
              </a>
              {/* Dropdown Menu  */}
              <ul className="dropdown-menu dropdown-menu-light border-0">
                <li>
                  <a href="#" className="dropdown-item">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Support
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Lang
              </a>
              {/* Dropdown Menu  */}
              <ul className="dropdown-menu dropdown-menu-light border-0">
                <li>
                  <a href="#" className="dropdown-item">
                    Spanish
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Hindi
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    French
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Italian
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown-item">
                    Dutch
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="btn btn-primary">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
