import React, { useEffect, useRef } from 'react'
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style14 = () => {

  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperInstance = new Swiper(".dg-feedback-slider", {
      modules: [ Autoplay],
      spaceBetween: 24,
      autoplay: true,
      speed: 700,
      loop: true,
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
   <section class="dg-feedback-section ptb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="section-title text-center">
                            <span class="fw-bold text-dg-primary">OUR TESTIMONIALs</span>
                            <h2 class="mt-2 clr-text">What our customers say.</h2>
                        </div>
                    </div>
                </div>
                <div class="dg-feedback-slider swiper py-5 swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                    <div class="swiper-wrapper" ><div class="dg-feedback-single bg-white rounded-3 swiper-slide swiper-slide-duplicate" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                            <img src="assets/img/digital-agency/webflow.png" alt="company logo" class="img-fluid"/>
                            <p class="mt-4 mb-4">Synergistically integrate dynamic solutions vis maximizing ROI. Appropriately
                                target leadership. Interactively orchestrate</p>
                            <div class="dg-feedback-info d-flex align-items-center justify-content-between">
                                <div class="dg-clients-info d-inline-flex align-items-center">
                                    <img src="assets/img/digital-agency/client-1.jpg" class="img-fluid rounded-circle clients-thumbnail bg-white rounded-circle p-2"/>
                                    <div class="ms-4">
                                        <h6 class="heading-dg-color mb-0">Leslie Alexander</h6>
                                        <span class="fs-sm text-dg-color d-block">Design Director</span>
                                    </div>
                                </div>
                                <span class="serial-number fw-semibold position-relative color-2">2</span>
                            </div>
                        </div><div class="dg-feedback-single bg-white rounded-3 swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" role="group" aria-label="3 / 3"  data-swiper-slide-index="2">
                            <img src="assets/img/digital-agency/google.png" alt="company logo" class="img-fluid"/>
                            <p class="mt-4 mb-4">Synergistically integrate dynamic solutions vis maximizing ROI. Appropriately
                                target leadership. Interactively orchestrate</p>
                            <div class="dg-feedback-info d-flex align-items-center justify-content-between">
                                <div class="dg-clients-info d-inline-flex align-items-center">
                                    <img src="assets/img/digital-agency/client-1.jpg" class="img-fluid rounded-circle clients-thumbnail bg-white rounded-circle p-2"/>
                                    <div class="ms-4">
                                        <h6 class="heading-dg-color mb-0">Leslie Alexander</h6>
                                        <span class="fs-sm text-dg-color d-block">Design Director</span>
                                    </div>
                                </div>
                                <span class="serial-number fw-semibold position-relative color-3">3</span>
                            </div>
                        </div>
                        <div class="dg-feedback-single bg-white rounded-3 swiper-slide swiper-slide-duplicate-active" role="group" aria-label="1 / 3"  data-swiper-slide-index="0">
                            <img src="assets/img/digital-agency/company-logo-1.png" alt="company logo" class="img-fluid"/>
                            <p class="mt-4 mb-4">Synergistically integrate dynamic solutions vis maximizing ROI. Appropriately
                                target leadership. Interactively orchestrate</p>
                            <div class="dg-feedback-info d-flex align-items-center justify-content-between">
                                <div class="dg-clients-info d-inline-flex align-items-center">
                                    <img src="assets/img/digital-agency/client-1.jpg" class="img-fluid rounded-circle clients-thumbnail bg-white rounded-circle p-2"/>
                                    <div class="ms-4">
                                        <h6 class="heading-dg-color mb-0">Leslie Alexander</h6>
                                        <span class="fs-sm text-dg-color d-block">Design Director</span>
                                    </div>
                                </div>
                                <span class="serial-number fw-semibold position-relative">1</span>
                            </div>
                        </div>
                        <div class="dg-feedback-single bg-white rounded-3 swiper-slide swiper-slide-duplicate-next" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                            <img src="assets/img/digital-agency/webflow.png" alt="company logo" class="img-fluid"/>
                            <p class="mt-4 mb-4">Synergistically integrate dynamic solutions vis maximizing ROI. Appropriately
                                target leadership. Interactively orchestrate</p>
                            <div class="dg-feedback-info d-flex align-items-center justify-content-between">
                                <div class="dg-clients-info d-inline-flex align-items-center">
                                    <img src="assets/img/digital-agency/client-1.jpg" class="img-fluid rounded-circle clients-thumbnail bg-white rounded-circle p-2"/>
                                    <div class="ms-4">
                                        <h6 class="heading-dg-color mb-0">Leslie Alexander</h6>
                                        <span class="fs-sm text-dg-color d-block">Design Director</span>
                                    </div>
                                </div>
                                <span class="serial-number fw-semibold position-relative color-2">2</span>
                            </div>
                        </div>
                        <div class="dg-feedback-single bg-white rounded-3 swiper-slide swiper-slide-prev" role="group" aria-label="3 / 3"  data-swiper-slide-index="2">
                            <img src="assets/img/digital-agency/google.png" alt="company logo" class="img-fluid"/>
                            <p class="mt-4 mb-4">Synergistically integrate dynamic solutions vis maximizing ROI. Appropriately
                                target leadership. Interactively orchestrate</p>
                            <div class="dg-feedback-info d-flex align-items-center justify-content-between">
                                <div class="dg-clients-info d-inline-flex align-items-center">
                                    <img src="assets/img/digital-agency/client-1.jpg" class="img-fluid rounded-circle clients-thumbnail bg-white rounded-circle p-2"/>
                                    <div class="ms-4">
                                        <h6 class="heading-dg-color mb-0">Leslie Alexander</h6>
                                        <span class="fs-sm text-dg-color d-block">Design Director</span>
                                    </div>
                                </div>
                                <span class="serial-number fw-semibold position-relative color-3">3</span>
                            </div>
                        </div>
                    <div class="dg-feedback-single bg-white rounded-3 swiper-slide swiper-slide-duplicate swiper-slide-active" role="group" aria-label="1 / 3"  data-swiper-slide-index="0">
                            <img src="assets/img/digital-agency/company-logo-1.png" alt="company logo" class="img-fluid"/>
                            <p class="mt-4 mb-4">Synergistically integrate dynamic solutions vis maximizing ROI. Appropriately
                                target leadership. Interactively orchestrate</p>
                            <div class="dg-feedback-info d-flex align-items-center justify-content-between">
                                <div class="dg-clients-info d-inline-flex align-items-center">
                                    <img src="assets/img/digital-agency/client-1.jpg" class="img-fluid rounded-circle clients-thumbnail bg-white rounded-circle p-2"/>
                                    <div class="ms-4">
                                        <h6 class="heading-dg-color mb-0">Leslie Alexander</h6>
                                        <span class="fs-sm text-dg-color d-block">Design Director</span>
                                    </div>
                                </div>
                                <span class="serial-number fw-semibold position-relative">1</span>
                            </div>
                        </div><div class="dg-feedback-single bg-white rounded-3 swiper-slide swiper-slide-duplicate swiper-slide-next" role="group" aria-label="2 / 3"  data-swiper-slide-index="1">
                            <img src="assets/img/digital-agency/webflow.png" alt="company logo" class="img-fluid"/>
                            <p class="mt-4 mb-4">Synergistically integrate dynamic solutions vis maximizing ROI. Appropriately
                                target leadership. Interactively orchestrate</p>
                            <div class="dg-feedback-info d-flex align-items-center justify-content-between">
                                <div class="dg-clients-info d-inline-flex align-items-center">
                                    <img src="assets/img/digital-agency/client-1.jpg" class="img-fluid rounded-circle clients-thumbnail bg-white rounded-circle p-2"/>
                                    <div class="ms-4">
                                        <h6 class="heading-dg-color mb-0">Leslie Alexander</h6>
                                        <span class="fs-sm text-dg-color d-block">Design Director</span>
                                    </div>
                                </div>
                                <span class="serial-number fw-semibold position-relative color-2">2</span>
                            </div>
                        </div></div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
        </section>
   </>
  )
}

export default Style14