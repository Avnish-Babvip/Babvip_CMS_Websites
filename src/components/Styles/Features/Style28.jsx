import React, { useEffect, useRef } from 'react'
import Swiper from "swiper";
import "swiper/css";


const Style28 = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = new Swiper(".brand-logo-slider", {
      slidesPerView: 2,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 5,
        spaceBetween: 30
      }
    }
    });

    // Store the Swiper instance in the ref
    swiperRef.current = swiperInstance;

    return () => {
      // Ensure Swiper instance exists before destroying
      if (swiperRef.current && swiperRef.current.destroy) {
        swiperRef.current.destroy(true, true);
        swiperRef.current = null; // Reset after unmount
      }
    };
  }, []);
  return (
    <>
    <section class="cyber-brand-logo pt-80">
            <div class="container">
                <div class="row">
                    <div class="swiper brand-logo-slider swiper-initialized swiper-horizontal swiper-pointer-events">
                        <div class="swiper-wrapper"><div class="swiper-slide position-relative swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="1 / 5" >
                                <div class="cyber-brand-logo text-center">
                                    <img src="assets/img/brand-logo/slack_logo.png" alt="logo "/>
                                </div>
                            </div><div class="swiper-slide position-relative text-center swiper-slide-duplicate" data-swiper-slide-index="1" role="group" aria-label="2 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo2.png" alt="logo"/>
                                    </div>
                                </div>
                            </div><div class="swiper-slide position-relative text-center swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo3.png" alt="logo"/>
                                    </div>
                                </div>
                            </div><div class="swiper-slide position-relative text-center swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="3" role="group" aria-label="4 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo4.png" alt="logo"/>
                                    </div>
                                </div>
                            </div><div class="swiper-slide position-relative text-center swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="4" role="group" aria-label="5 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo5.png" alt="logo"/>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide position-relative" data-swiper-slide-index="0" role="group" aria-label="1 / 5" >
                                <div class="cyber-brand-logo text-center">
                                    <img src="assets/img/brand-logo/slack_logo.png" alt="logo "/>
                                </div>
                            </div>
                            <div class="swiper-slide position-relative text-center" data-swiper-slide-index="1" role="group" aria-label="2 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo2.png" alt="logo"/>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide position-relative text-center swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo3.png" alt="logo"/>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide position-relative text-center swiper-slide-active" data-swiper-slide-index="3" role="group" aria-label="4 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo4.png" alt="logo"/>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide position-relative text-center swiper-slide-next" data-swiper-slide-index="4" role="group" aria-label="5 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo5.png" alt="logo"/>
                                    </div>
                                </div>
                            </div>
                        <div class="swiper-slide position-relative swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="1 / 5" >
                                <div class="cyber-brand-logo text-center">
                                    <img src="assets/img/brand-logo/slack_logo.png" alt="logo "/>
                                </div>
                            </div><div class="swiper-slide position-relative text-center swiper-slide-duplicate" data-swiper-slide-index="1" role="group" aria-label="2 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo2.png" alt="logo"/>
                                    </div>
                                </div>
                            </div><div class="swiper-slide position-relative text-center swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo3.png" alt="logo"/>
                                    </div>
                                </div>
                            </div><div class="swiper-slide position-relative text-center swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="3" role="group" aria-label="4 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo4.png" alt="logo"/>
                                    </div>
                                </div>
                            </div><div class="swiper-slide position-relative text-center swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="4" role="group" aria-label="5 / 5" >
                                <div class="cyber-brand-logo">
                                    <div class="cyber-brand-logo">
                                        <img src="assets/img/brand-logo/logo5.png" alt="logo"/>
                                    </div>
                                </div>
                            </div></div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>
            </div>
        </section></>
  )
}

export default Style28