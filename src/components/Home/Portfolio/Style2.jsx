import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation"; // Import Navigation styles

const Style2 = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    swiperRef.current = new Swiper(".ins-gallery-slider", {
      modules: [Navigation], // Ensure module is included
      slidesPerView: 3,
      loop: true,
      speed: 800,
      spaceBetween: 24,
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
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
    <section class="ins-gallery">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col-xl-6">
            <div class="ins-title">
              <div class="d-flex align-items-center">
                <span class="subtitle fw-bold me-1">{data?.subtitle}</span>
                <span>
                  <svg
                    width="56"
                    height="13"
                    viewBox="0 0 56 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.262474 6.51123L49.0564 6.51123"
                      stroke="#0EE7C5"
                      stroke-width="1.49369"
                    ></path>
                    <path
                      d="M55.0297 6.51187L46.0675 11.6862L46.0675 1.33758L55.0297 6.51187Z"
                      fill="#0EE7C5"
                    ></path>
                  </svg>
                </span>
              </div>
              <h2 class="mt-2 ins-heading mb-0">
                {data?.title} <mark>{data?.highlighted_title}</mark>
              </h2>
            </div>
          </div>
          <div class="col-xl-5">
            <div class="ins-gallery-info mt-3 mt-xl-0">
              <p class="ins-text mb-30">{data?.main_description}</p>
              <div class="d-flex align-items-center ins-gallery-info-btns flex-wrap">
                <Link to={data?.button_url} class="ins-btn ins-secondary-btn">
                  {data?.button_text}
                  <span class="ms-1">
                    <svg
                      width="22"
                      height="9"
                      viewBox="0 0 22 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.776428 4.55017L15.7133 4.55017"
                        stroke="white"
                        stroke-width="1.49369"
                      ></path>
                      <path
                        d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                        fill="white"
                      ></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  to={data?.video_url}
                  class="video-icon popup-youtube text-decoration-none"
                  target="_blank"
                >
                  <i class="fas fa-play"></i>{" "}
                  <span class="ms-2 fs-md fw-bold"> {data?.video_text}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ins-gallery-center-slider overflow-hidden">
        <div class="ins-gallery-slider swiper overflow-visible mt-5 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div
            class="swiper-wrapper"
            id="swiper-wrapper-ca5a8bdd4f499ca0"
            aria-live="polite"
            style={{
              "transition-duration": "0ms",
              transform: "translate3d(-2397.33px, 0px, 0px)",
            }}
          >
            {data?.step_data.map((item, index) => (
              <>
                {index < 3 && (
                  <div
                    class="ins-gallery-slide-single swiper-slide position-relative swiper-slide-duplicate"
                    role="group"
                    aria-label={`${index + 1} / 3`}
                    style={{ width: "575.333px", "margin-right": "24px" }}
                    data-swiper-slide-index={index}
                  >
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid"
                    />
                    <Link
                      to={`/portfolio/${item?.port_slug}`}
                      class="ins-btn ins-primary-btn position-absolute"
                    >
                      {item?.step_title}
                      <span class="ms-1">
                        <svg
                          width="22"
                          height="9"
                          viewBox="0 0 22 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.776428 4.55017L15.7133 4.55017"
                            stroke="white"
                            stroke-width="1.49369"
                          ></path>
                          <path
                            d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                )}
                {index < 6 && index > 2 && (
                  <div
                    class="ins-gallery-slide-single swiper-slide position-relative swiper-slide-duplicate"
                    role="group"
                    aria-label={`${index - 2} / 3`}
                    style={{ width: "575.333px", "margin-right": "24px" }}
                    data-swiper-slide-index={index - 2}
                  >
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid"
                    />
                    <Link
                      to={`/portfolio/${item?.port_slug}`}
                      class="ins-btn ins-primary-btn position-absolute"
                    >
                      {item?.step_title}
                      <span class="ms-1">
                        <svg
                          width="22"
                          height="9"
                          viewBox="0 0 22 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.776428 4.55017L15.7133 4.55017"
                            stroke="white"
                            stroke-width="1.49369"
                          ></path>
                          <path
                            d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                )}
                {index < 9 && index > 5 && (
                  <div
                    class="ins-gallery-slide-single swiper-slide position-relative swiper-slide-duplicate"
                    role="group"
                    aria-label={`${index - 5} / 3`}
                    style={{ width: "575.333px", "margin-right": "24px" }}
                    data-swiper-slide-index={index - 6}
                  >
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        item?.step_image_icon
                      }`}
                      alt={item?.step_image_icon_alt_tag}
                      class="img-fluid"
                    />
                    <Link
                      to={`/portfolio/${item?.port_slug}`}
                      class="ins-btn ins-primary-btn position-absolute"
                    >
                      {item?.step_title}
                      <span class="ms-1">
                        <svg
                          width="22"
                          height="9"
                          viewBox="0 0 22 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.776428 4.55017L15.7133 4.55017"
                            stroke="white"
                            stroke-width="1.49369"
                          ></path>
                          <path
                            d="M21.6888 4.54934L15.7141 7.99887L15.7141 1.09981L21.6888 4.54934Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                )}
              </>
            ))}
          </div>
          <div
            class="swiper-btn-prev swiper-control"
            tabindex="0"
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper-ca5a8bdd4f499ca0"
          >
            <i class="fa-solid fa-angle-left"></i>
          </div>
          <div
            class="swiper-btn-next swiper-control"
            tabindex="0"
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper-ca5a8bdd4f499ca0"
          >
            <i class="fa-solid fa-angle-right"></i>
          </div>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Style2;
