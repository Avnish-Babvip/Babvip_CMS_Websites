import React, { useEffect, useRef } from 'react'
import Swiper from "swiper";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Style9 = () => {

      const swiperRef = useRef(null);
      useEffect(() => {
        const swiperInstance = new Swiper(".payment-testimonial-slider", {
          modules: [ Autoplay],
          slidesPerView: 2,
          spaceBetween: 24,
          speed: 1000,
          autoplay: {
            delay: 3000
          },
          slidesPerGroup: 1,
          loop: true,
          breakpoints: {
            320: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            991: {
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
    <section class="payment-testimonial bg-white-light ptb-120">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="text-center mb-5">
                            <h2 class="mb-3">Trusted Customers Are Saying.</h2>
                            <p class="m-0">
                                Globally envisioneer an expanded array of methods of empowerment
                                and out-of-the-box ideas. Completely deliver open-source strategic
                                theme.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="swiper payment-testimonial-slider swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                            <div class="swiper-wrapper"><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="1 / 3" >
                                    <div class="single-payment-testimonial bg-white shadow-sm my-3 p-5 rounded-custom">
                                        <img src="assets/img/testimonial/quotes-p.svg" class="mb-4" alt="quotes"/>
                                        <h5 class="mb-3">Absolutely Superb!</h5>
                                        <p class="mb-3">
                                            Synergistically integrate dynamic solutions vis-a-vis
                                            resource maximizing ROI. Appropriately target leadership.
                                            Interactively orchestrate open-source mindshare without
                                            emerging web services.
                                        </p>
                                        <ul class="list-unstyled rating-list list-inline mb-4">
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                        </ul>
                                        <div class="payment-t-author d-flex align-items-center">
                                            <div class="payment-auth-img me-3">
                                                <img src="assets/img/testimonial/tp-1.png" alt="author"/>
                                            </div>
                                            <div class="payment-auth-info">
                                                <h5 class="h6 m-0">Leslie Alexander</h5>
                                                <small>Design Director </small>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" role="group" aria-label="2 / 3" >
                                    <div class="single-payment-testimonial bg-white shadow-sm my-3 p-5 rounded-custom">
                                        <img src="assets/img/testimonial/quotes-p.svg" class="mb-4" alt="quotes"/>
                                        <h5 class="mb-3">Amazing Service!</h5>
                                        <p class="mb-3">
                                            Synergistically integrate dynamic solutions vis-a-vis
                                            resource maximizing ROI. Appropriately target leadership.
                                            Interactively orchestrate open-source mindshare without
                                            emerging web services.
                                        </p>
                                        <ul class="list-unstyled rating-list list-inline mb-4">
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                        </ul>
                                        <div class="payment-t-author d-flex align-items-center">
                                            <div class="payment-auth-img me-3">
                                                <img src="assets/img/testimonial/tp-2.png" alt="author"/>
                                            </div>
                                            <div class="payment-auth-info">
                                                <h5 class="h6 m-0">Leslie Alexander</h5>
                                                <small>Design Director </small>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 3" >
                                    <div class="single-payment-testimonial bg-white shadow-sm my-3 p-5 rounded-custom">
                                        <img src="assets/img/testimonial/quotes-p.svg" class="mb-4" alt="quotes"/>
                                        <h5 class="mb-3">Amaizing Support!</h5>
                                        <p class="mb-3">
                                            Synergistically integrate dynamic solutions vis-a-vis
                                            resource maximizing ROI. Appropriately target leadership.
                                            Interactively orchestrate open-source mindshare without
                                            emerging web services.
                                        </p>
                                        <ul class="list-unstyled rating-list list-inline mb-4">
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                        </ul>
                                        <div class="payment-t-author d-flex align-items-center">
                                            <div class="payment-auth-img me-3">
                                                <img src="assets/img/testimonial/tp-3.png" alt="author"/>
                                            </div>
                                            <div class="payment-auth-info">
                                                <h5 class="h6 m-0">Leslie Alexander</h5>
                                                <small>Design Director </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" role="group" aria-label="1 / 3" >
                                    <div class="single-payment-testimonial bg-white shadow-sm my-3 p-5 rounded-custom">
                                        <img src="assets/img/testimonial/quotes-p.svg" class="mb-4" alt="quotes"/>
                                        <h5 class="mb-3">Absolutely Superb!</h5>
                                        <p class="mb-3">
                                            Synergistically integrate dynamic solutions vis-a-vis
                                            resource maximizing ROI. Appropriately target leadership.
                                            Interactively orchestrate open-source mindshare without
                                            emerging web services.
                                        </p>
                                        <ul class="list-unstyled rating-list list-inline mb-4">
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                        </ul>
                                        <div class="payment-t-author d-flex align-items-center">
                                            <div class="payment-auth-img me-3">
                                                <img src="assets/img/testimonial/tp-1.png" alt="author"/>
                                            </div>
                                            <div class="payment-auth-info">
                                                <h5 class="h6 m-0">Leslie Alexander</h5>
                                                <small>Design Director </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="1" role="group" aria-label="2 / 3" >
                                    <div class="single-payment-testimonial bg-white shadow-sm my-3 p-5 rounded-custom">
                                        <img src="assets/img/testimonial/quotes-p.svg" class="mb-4" alt="quotes"/>
                                        <h5 class="mb-3">Amazing Service!</h5>
                                        <p class="mb-3">
                                            Synergistically integrate dynamic solutions vis-a-vis
                                            resource maximizing ROI. Appropriately target leadership.
                                            Interactively orchestrate open-source mindshare without
                                            emerging web services.
                                        </p>
                                        <ul class="list-unstyled rating-list list-inline mb-4">
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                        </ul>
                                        <div class="payment-t-author d-flex align-items-center">
                                            <div class="payment-auth-img me-3">
                                                <img src="assets/img/testimonial/tp-2.png" alt="author"/>
                                            </div>
                                            <div class="payment-auth-info">
                                                <h5 class="h6 m-0">Leslie Alexander</h5>
                                                <small>Design Director </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 3" >
                                    <div class="single-payment-testimonial bg-white shadow-sm my-3 p-5 rounded-custom">
                                        <img src="assets/img/testimonial/quotes-p.svg" class="mb-4" alt="quotes"/>
                                        <h5 class="mb-3">Amaizing Support!</h5>
                                        <p class="mb-3">
                                            Synergistically integrate dynamic solutions vis-a-vis
                                            resource maximizing ROI. Appropriately target leadership.
                                            Interactively orchestrate open-source mindshare without
                                            emerging web services.
                                        </p>
                                        <ul class="list-unstyled rating-list list-inline mb-4">
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                        </ul>
                                        <div class="payment-t-author d-flex align-items-center">
                                            <div class="payment-auth-img me-3">
                                                <img src="assets/img/testimonial/tp-3.png" alt="author"/>
                                            </div>
                                            <div class="payment-auth-info">
                                                <h5 class="h6 m-0">Leslie Alexander</h5>
                                                <small>Design Director </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" role="group" aria-label="1 / 3" >
                                    <div class="single-payment-testimonial bg-white shadow-sm my-3 p-5 rounded-custom">
                                        <img src="assets/img/testimonial/quotes-p.svg" class="mb-4" alt="quotes"/>
                                        <h5 class="mb-3">Absolutely Superb!</h5>
                                        <p class="mb-3">
                                            Synergistically integrate dynamic solutions vis-a-vis
                                            resource maximizing ROI. Appropriately target leadership.
                                            Interactively orchestrate open-source mindshare without
                                            emerging web services.
                                        </p>
                                        <ul class="list-unstyled rating-list list-inline mb-4">
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                        </ul>
                                        <div class="payment-t-author d-flex align-items-center">
                                            <div class="payment-auth-img me-3">
                                                <img src="assets/img/testimonial/tp-1.png" alt="author"/>
                                            </div>
                                            <div class="payment-auth-info">
                                                <h5 class="h6 m-0">Leslie Alexander</h5>
                                                <small>Design Director </small>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="1" role="group" aria-label="2 / 3" >
                                    <div class="single-payment-testimonial bg-white shadow-sm my-3 p-5 rounded-custom">
                                        <img src="assets/img/testimonial/quotes-p.svg" class="mb-4" alt="quotes"/>
                                        <h5 class="mb-3">Amazing Service!</h5>
                                        <p class="mb-3">
                                            Synergistically integrate dynamic solutions vis-a-vis
                                            resource maximizing ROI. Appropriately target leadership.
                                            Interactively orchestrate open-source mindshare without
                                            emerging web services.
                                        </p>
                                        <ul class="list-unstyled rating-list list-inline mb-4">
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                        </ul>
                                        <div class="payment-t-author d-flex align-items-center">
                                            <div class="payment-auth-img me-3">
                                                <img src="assets/img/testimonial/tp-2.png" alt="author"/>
                                            </div>
                                            <div class="payment-auth-info">
                                                <h5 class="h6 m-0">Leslie Alexander</h5>
                                                <small>Design Director </small>
                                            </div>
                                        </div>
                                    </div>
                                </div><div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="2" role="group" aria-label="3 / 3" >
                                    <div class="single-payment-testimonial bg-white shadow-sm my-3 p-5 rounded-custom">
                                        <img src="assets/img/testimonial/quotes-p.svg" class="mb-4" alt="quotes"/>
                                        <h5 class="mb-3">Amaizing Support!</h5>
                                        <p class="mb-3">
                                            Synergistically integrate dynamic solutions vis-a-vis
                                            resource maximizing ROI. Appropriately target leadership.
                                            Interactively orchestrate open-source mindshare without
                                            emerging web services.
                                        </p>
                                        <ul class="list-unstyled rating-list list-inline mb-4">
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                            <li class="list-inline-item">
                                                <i class="fas fa-star text-warning"></i>
                                            </li>
                                        </ul>
                                        <div class="payment-t-author d-flex align-items-center">
                                            <div class="payment-auth-img me-3">
                                                <img src="assets/img/testimonial/tp-3.png" alt="author"/>
                                            </div>
                                            <div class="payment-auth-info">
                                                <h5 class="h6 m-0">Leslie Alexander</h5>
                                                <small>Design Director </small>
                                            </div>
                                        </div>
                                    </div>
                                </div></div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Style9