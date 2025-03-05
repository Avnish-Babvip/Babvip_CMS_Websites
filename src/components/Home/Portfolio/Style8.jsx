import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Style8 = ({ data }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".it-company-project-slider", {
      modules: [Navigation, Pagination],
      slidesPerView: 3,
      loop: true,
      speed: 800,
      spaceBetween: 24,
      navigation: {
        nextEl: ".it-company-swiper-button-next",
        prevEl: ".it-company-swiper-button-prev",
      },
      pagination: {
        el: ".it-company-slider__pagination",
        clickable: true, // Enables bullet clicks
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
        },
      },
    });

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true); // Cleanup on unmount
      }
    };
  }, []);

  return (
    <>
      <div class="it-company-project-area ptb-120 overflow-hidden">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-8">
              <h2 class="it-company-title it-company-color fs-40 fw-600 flh-56 mb-0">
                {data?.title}
              </h2>
            </div>
            <div class="col-xl-6 col-lg-4">
              <div class="d-flex align-items-center justify-content-end gap-4">
                <div
                  class="it-slider-nav it-company-swiper-button-prev bg-black text-white d-flex align-items-center justify-content-center rounded-circle"
                  tabindex="0"
                  role="button"
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-62a24ff490b9799b"
                >
                  <i class="fas fa-arrow-left"></i>
                </div>
                <div
                  class="it-slider-nav it-company-swiper-button-next bg-black text-white d-flex align-items-center justify-content-center rounded-circle"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-62a24ff490b9799b"
                >
                  <i class="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="it-company-project-slider mt-50 swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                <div
                  class="swiper-wrapper"
                  id="swiper-wrapper-62a24ff490b9799b"
                  aria-live="off"
                  style={{
                    transform: "translate3d(-1920px, 0px, 0px)",
                    "transition-duration": "0ms",
                  }}
                >
                  {data?.step_data.map((item, index) => (
                    <Link
                      to={`/portfolio/${item?.port_slug}`}
                      class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                      role="group"
                      style={{ width: "296px", "margin-right": "24px" }}
                      data-swiper-slide-index={index}
                    >
                      <div
                        to={`/portfolio/${item?.port_slug}`}
                        class="it-company-project-item position-relative rounded-10 overflow-hidden"
                      >
                        <img
                          src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                            item?.step_image_icon
                          }`}
                          alt={item?.step_image_icon_alt_tag}
                          class="w-100 img-fluid"
                        />
                        <div class="it-company-project-content w-100 h-100 d-flex flex-column justify-content-end gap-4 pl-40  position-absolute">
                          <a href="">
                            <p class="it-company-color fs-14 fw-500 it-company-bg-six d-inline-block mb-0">
                              {item?.step_title}
                            </p>
                          </a>
                          <a href="">
                            <h5 class="text-white fs-20 fw-600 flh-28 pb-30 pr-40">
                              {item?.description}
                            </h5>
                          </a>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div class="it-company-slider__pagination mt-30 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style8;
