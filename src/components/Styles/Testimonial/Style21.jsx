import React, { useEffect, useRef } from 'react'
import Swiper from "swiper";
import "swiper/css";
import { Pagination ,Autoplay} from "swiper/modules";
import "swiper/css/pagination"; // Import Navigation styles

const Style21 = () => {
    
    const swiperRef = useRef(null);
    useEffect(() => {
      const swiperInstance = new Swiper(".risk-testimonial-items", {
        modules: [ Pagination ,Autoplay],
        autoplay: true,
        loop: true,
        speed: 700,
        spaceBetween: 24,
        pagination: {
          el: '.risk-slider__pagination',
          clickable: true
        },
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }
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
    <div class="rm-testimonial-area ptb-60">
            <div class="container">
                <div class="risk-bg-color-three ptb-80 pl-50 pr-50 rounded-12 position-relative z-1">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h2 class="risk-title risk-color fs-42 ff-risk-pri flh-56 fw-800 mb-20 pr-20">Real Stories_
                                <span class="risk-gd-text">Real Impact</span>
                            </h2>
                            <p class="risk-color-two ff-dmsans fs-16 flh-28 mb-0 fch-50">Move from feeling ill-equipped and
                                anxious about imminent catastrophe to outsmarting the bad actors &amp; protecting.</p>
                        </div>
                        <div class="col-lg-6">
                            <div class="text-end">
                                <a href="" class="btn risk-btn-bg risk-outline-btn-hover clr-white ff-risk-pri fs-14 fw-600">Read
                                    their Stories</a>
                            </div>
                        </div>
                    </div>
                    <div class="risk-testimonial-items ptb-20 swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <div class="swiper-wrapper" ><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                                <div class="risk-testimonial-item bgc-white padding-6 ptb-40 rounded-8 risk-shadow mt-20">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="assets/img/risk_managment/testimonial.png" alt=""/>
                                        <div class="rm-testimonial-info">
                                            <h6 class="risk-color fs-14 ff-dmsans fw-500 mb-0">Leslie Alexander</h6>
                                            <img src="assets/img/risk_managment/testimonial_icon.png" alt=""/>
                                        </div>
                                    </div>
                                    <p class="risk-color-two fs-16 ff-dmsans flh-24 mt-20 mb-0"> “Interactively redefine
                                        progressive networks. Synergistically integrate dynamic solutions vis-a-vis
                                        resource maximizing roi”</p>
                                </div>
                            </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" role="group" aria-label="3 / 3"  data-swiper-slide-index="2">
                                <div class="risk-testimonial-item bgc-white padding-6 ptb-40 rounded-8 risk-shadow mt-20">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="assets/img/risk_managment/testimonial.png" alt=""/>
                                        <div class="rm-testimonial-info">
                                            <h6 class="risk-color fs-14 ff-dmsans fw-500 mb-0">Leslie Alexander</h6>
                                            <img src="assets/img/risk_managment/testimonial_icon.png" alt=""/>
                                        </div>
                                    </div>
                                    <p class="risk-color-two fs-16 ff-dmsans flh-24 mt-20 mb-0"> “Interactively redefine
                                        progressive networks. Synergistically integrate dynamic solutions vis-a-vis
                                        resource maximizing roi”</p>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-slide-prev" role="group" aria-label="1 / 3"  data-swiper-slide-index="0">
                                <div class="risk-testimonial-item bgc-white padding-6 ptb-40 rounded-8 risk-shadow mt-20">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="assets/img/risk_managment/testimonial.png" alt=""/>
                                        <div class="rm-testimonial-info">
                                            <h6 class="risk-color fs-14 ff-dmsans fw-500 mb-0">Leslie Alexander</h6>
                                            <img src="assets/img/risk_managment/testimonial_icon.png" alt=""/>
                                        </div>
                                    </div>
                                    <p class="risk-color-two fs-16 ff-dmsans flh-24 mt-20 mb-0"> “Interactively redefine
                                        progressive networks. Synergistically integrate dynamic solutions vis-a-vis
                                        resource maximizing roi”</p>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-slide-active" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                                <div class="risk-testimonial-item bgc-white padding-6 ptb-40 rounded-8 risk-shadow mt-20">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="assets/img/risk_managment/testimonial.png" alt=""/>
                                        <div class="rm-testimonial-info">
                                            <h6 class="risk-color fs-14 ff-dmsans fw-500 mb-0">Leslie Alexander</h6>
                                            <img src="assets/img/risk_managment/testimonial_icon.png" alt=""/>
                                        </div>
                                    </div>
                                    <p class="risk-color-two fs-16 ff-dmsans flh-24 mt-20 mb-0"> “Interactively redefine
                                        progressive networks. Synergistically integrate dynamic solutions vis-a-vis
                                        resource maximizing roi”</p>
                                </div>
                            </div>
                            <div class="swiper-slide swiper-slide-next" role="group" aria-label="3 / 3"  data-swiper-slide-index="2">
                                <div class="risk-testimonial-item bgc-white padding-6 ptb-40 rounded-8 risk-shadow mt-20">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="assets/img/risk_managment/testimonial.png" alt=""/>
                                        <div class="rm-testimonial-info">
                                            <h6 class="risk-color fs-14 ff-dmsans fw-500 mb-0">Leslie Alexander</h6>
                                            <img src="assets/img/risk_managment/testimonial_icon.png" alt=""/>
                                        </div>
                                    </div>
                                    <p class="risk-color-two fs-16 ff-dmsans flh-24 mt-20 mb-0"> “Interactively redefine
                                        progressive networks. Synergistically integrate dynamic solutions vis-a-vis
                                        resource maximizing roi”</p>
                                </div>
                            </div>
                        <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" role="group" aria-label="1 / 3"  data-swiper-slide-index="0">
                                <div class="risk-testimonial-item bgc-white padding-6 ptb-40 rounded-8 risk-shadow mt-20">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="assets/img/risk_managment/testimonial.png" alt=""/>
                                        <div class="rm-testimonial-info">
                                            <h6 class="risk-color fs-14 ff-dmsans fw-500 mb-0">Leslie Alexander</h6>
                                            <img src="assets/img/risk_managment/testimonial_icon.png" alt=""/>
                                        </div>
                                    </div>
                                    <p class="risk-color-two fs-16 ff-dmsans flh-24 mt-20 mb-0"> “Interactively redefine
                                        progressive networks. Synergistically integrate dynamic solutions vis-a-vis
                                        resource maximizing roi”</p>
                                </div>
                            </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                                <div class="risk-testimonial-item bgc-white padding-6 ptb-40 rounded-8 risk-shadow mt-20">
                                    <div class="d-flex align-items-center gap-3">
                                        <img src="assets/img/risk_managment/testimonial.png" alt=""/>
                                        <div class="rm-testimonial-info">
                                            <h6 class="risk-color fs-14 ff-dmsans fw-500 mb-0">Leslie Alexander</h6>
                                            <img src="assets/img/risk_managment/testimonial_icon.png" alt=""/>
                                        </div>
                                    </div>
                                    <p class="risk-color-two fs-16 ff-dmsans flh-24 mt-20 mb-0"> “Interactively redefine
                                        progressive networks. Synergistically integrate dynamic solutions vis-a-vis
                                        resource maximizing roi”</p>
                                </div>
                            </div></div>
                        <div class="risk-slider__controls">
                            <div class="risk-slider__pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 2" aria-current="true"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span></div>
                        </div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    <img src="assets/img/risk_managment/shape/testimonial.png" alt="" class="s-one position-absolute z--1"/>
                </div>
            </div>
        </div></>
  )
}

export default Style21