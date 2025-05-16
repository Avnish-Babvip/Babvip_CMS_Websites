import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";

const Style52 = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".dg-team-slider", {
      modules: [Pagination],
      spaceBetween: 24,
      loop: true,
      pagination: {
        el: ".dg-team-slider-controls",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        425: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });
    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true); // Cleanup on unmount
      }
    };
  }, []);
  return (
    <>
      <section class="dg-team-section pb-100 position-relative z-1 overflow-hidden ptb-120">
        <img
          src="assets/img/digital-agency/team-curve-left.png"
          alt="team curve"
          class="position-absolute left tm-curve top-0 h-100 z--1 d-none d-xxl-block"
        />
        <img
          src="assets/img/digital-agency/team-curve-right.png"
          alt="team curve"
          class="position-absolute right tm-curve top-0 z--1 h-100 d-none d-xxl-block"
        />
        <img
          src="assets/img/digital-agency/team-line.png"
          alt="line shape"
          class="position-absolute team-line z--1 bottom-0"
        />
        <span class="dg-circle-style-1 dg-circle-1 rounded-circle position-absolute z--1"></span>
        <span class="dg-circle-style-2 dg-circle-2 rounded-circle position-absolute z--1"></span>
        <div class="container">
          <div class="row align-items-center g-4">
            <div class="col-xl-5 col-lg-6">
              <div class="dg-team-content text-center text-lg-start mb-4 mb-lg-0">
                <span class="fw-bold text-dg-primary mb-2">
                  MEET OUR EXPERTS
                </span>
                <h2 class="mb-4 clr-text">
                  Our awesome the trust from clients
                </h2>
                <p class="mb-40">
                  We wanted to rethink education and build a platform designed
                  for how people actually learn. Learn efficiently, but
                  thoroughly! With Supercharge. Dramatically incubate flexible.
                </p>
                <a
                  href="contact-us.html"
                  class="btn dg-primary-btn rounded-pill"
                >
                  Join Our Team
                </a>
              </div>
            </div>
            <div class="col-xl-7 col-lg-6">
              <div class="dg-team-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                <div class="swiper-wrapper">
                  <div
                    class="dg-team-single swiper-slide rounded-3 position-relative overflow-hidden swiper-slide-duplicate"
                    data-swiper-slide-index="0"
                    role="group"
                    aria-label="1 / 3"
                  >
                    <img
                      src="assets/img/digital-agency/team-1.jpg"
                      alt="team"
                      class="img-fluid"
                    />
                    <div class="designation-box bg-white rounded-3 text-center">
                      <h6 class="heading-dg-color mb-0">Forrest Collman</h6>
                      <span class="fs-sm d-block">Founder &amp; CEO</span>
                    </div>
                  </div>
                  <div
                    class="dg-team-single swiper-slide rounded-3 position-relative overflow-hidden swiper-slide-duplicate swiper-slide-duplicate-prev"
                    data-swiper-slide-index="1"
                    role="group"
                    aria-label="2 / 3"
                  >
                    <img
                      src="assets/img/digital-agency/team-2.jpg"
                      alt="team"
                      class="img-fluid"
                    />
                    <div class="designation-box bg-white rounded-3 text-center">
                      <h6 class="heading-dg-color mb-0">Forrest Collman</h6>
                      <span class="fs-sm d-block">Founder &amp; CEO</span>
                    </div>
                  </div>
                  <div
                    class="dg-team-single swiper-slide rounded-3 position-relative overflow-hidden swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="2"
                    role="group"
                    aria-label="3 / 3"
                  >
                    <img
                      src="assets/img/digital-agency/team-3.jpg"
                      alt="team"
                      class="img-fluid"
                    />
                    <div class="designation-box bg-white rounded-3 text-center">
                      <h6 class="heading-dg-color mb-0">Forrest Collman</h6>
                      <span class="fs-sm d-block">Founder &amp; CEO</span>
                    </div>
                  </div>
                  <div
                    class="dg-team-single swiper-slide rounded-3 position-relative overflow-hidden swiper-slide-duplicate swiper-slide-duplicate-active"
                    data-swiper-slide-index="2"
                    role="group"
                    aria-label="3 / 3"
                  >
                    <img
                      src="assets/img/digital-agency/team-3.jpg"
                      alt="team"
                      class="img-fluid"
                    />
                    <div class="designation-box bg-white rounded-3 text-center">
                      <h6 class="heading-dg-color mb-0">Forrest Collman</h6>
                      <span class="fs-sm d-block">Founder &amp; CEO</span>
                    </div>
                  </div>
                </div>
                <div class="dg-team-slider-controls dg-slider-control d-flex align-items-center justify-content-center mt-40 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 1"
                  ></span>
                  <span
                    class="swiper-pagination-bullet"
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 2"
                  ></span>
                  <span
                    class="swiper-pagination-bullet "
                    tabindex="0"
                    role="button"
                    aria-label="Go to slide 3"
                    aria-current="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Style52;
