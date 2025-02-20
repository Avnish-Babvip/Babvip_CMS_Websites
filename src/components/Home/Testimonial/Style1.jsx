import React from 'react'

const Style1 = ({data}) => {
  return (
<section class="testimonial-section ptb-120 ">
                <div class="container">
                    <div class="row justify-content-center align-content-center">
                        <div class="col-md-10 col-lg-6">
                            <div class="section-heading text-center">
                                <h4 class="h5 text-primary">{data?.sub_title}</h4>
                                <h2>{data?.title}</h2>
                                <p>{data?.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="position-relative w-100">
                                <div class="swiper testimonialSwiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                    <div class="swiper-wrapper" id="swiper-wrapper-df8ed0199edaab02" aria-live="polite" style={{"transform": "translate3d(-660.5px, 0px, 0px); transition-duration: 0ms;"}}>
                                       {  data?.review?.map((item,idx)=>(  <div key={idx} class="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index="3" role="group" aria-label="4 / 5" style={{"width": "635.5px", "margin-right": "25px;"}}>
                                            <div class="border border-2 p-5 rounded-custom position-relative">
                                                <img src="assets/img/testimonial/quotes-dot.svg" alt="quotes" width="100" class="img-fluid position-absolute left-0 top-0 z--1 p-3"/>
                                                <div class="d-flex mb-32 align-items-center">
                                                    <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${item?.image}`} alt={item?.alt_tag} class="img-fluid me-3 rounded" width="60" />
                                                    <div class="author-info">
                                                        <h6 class="mb-0">{item?.client_name}</h6>
                                                        <small>{item?.designation}</small>
                                                    </div>
                                                </div>
                                                <blockquote>
                                                    <h6>{item?.review_title}</h6>
                                                    {item?.review_description}
                                                </blockquote>
                                                <ul class="review-rate mb-0 mt-2 list-unstyled list-inline">
                                               {  Array(Number(item?.client_rating)).fill().map((_,idx)=>{ 
                                return (     <li class="list-inline-item"><i class="fas fa-star text-warning"></i></li>)})}
                                              
                                                </ul>
                                                <img src="assets/img/testimonial/quotes.svg" alt="quotes" class="position-absolute right-0 bottom-0 z--1 pe-4 pb-4"/>
                                            </div>
                                        </div>))}
                                </div>
                                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                <div class="swiper-nav-control">
                                    <span class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-df8ed0199edaab02"></span>
                                    <span class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-df8ed0199edaab02"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Style1