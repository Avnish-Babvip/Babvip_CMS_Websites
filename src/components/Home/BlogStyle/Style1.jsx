import React from 'react'

const Style1 = ({data}) => {
  return (
<section class="home-blog-section ptb-120 bg-light-subtle">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="section-heading text-center">
                                <h4 class="h5 text-primary">{data?.subtitle}</h4>
                                <h2>{data?.title}</h2>
                                <p>{data?.description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="blog-grid">
                            <div class="featured-post-wrapper">
                                <div class="blog-item">
                                    <div class="blog-content bg-white">
                                        <div class="blog-media">
                                            <img src="assets/img/blog/blog-1.jpg" alt="article" class="img-fluid"/>
                                        </div>
                                        <div class="blog-text p-4 p-lg-5">
                                            <span class="featured-badge"><i class="fas fa-bookmark text-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="Featured"></i></span>
                                            <a href="blog-single.html" target="_blank">
                                                <h3 class="h5">Waiting area extends
                                                    beyond your office space</h3>
                                            </a>
                                            <p>Your waiting room is never going to be the same as what it was before
                                                COVID-19.
                                                Practice social distancing...</p>
                                            <div class="read-more-link">
                                                <a href="blog-single.html" target="_blank" class="mt-2 d-inline-flex align-items-center btn btn-sm btn-pill font-weight-bold"><span>Read More</span>
                                                    <i class="fas fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="posts-wrapper">
                                <div class="blog-item">
                                    <div class="blog-content bg-white">
                                        <div class="blog-media">
                                            <img src="assets/img/blog/blog-4.jpg" alt="article" class="img-fluid"/>
                                        </div>
                                        <div class="blog-text p-4 p-lg-5">
                                            <a href="blog-single.html" target="_blank">
                                                <h3 class="h5">Patients fill the form
                                                    any
                                                    time, any where, and on any device.</h3>
                                            </a>
                                            <p>Your waiting room is never going to be the same as what it any where, and on
                                                was
                                                before...</p>
                                            <div class="read-more-link">
                                                <a href="blog-single.html" target="_blank" class="mt-2 d-inline-flex align-items-center btn btn-sm btn-pill font-weight-bold"><span>Read More</span>
                                                    <i class="fas fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="blog-item">
                                    <div class="blog-content bg-white">
                                        <div class="blog-media">
                                            <img src="assets/img/blog/blog-2.jpg" alt="article" class="img-fluid"/>
                                        </div>
                                        <div class="blog-text p-4 p-lg-5">
                                            <a href="blog-single.html" target="_blank">
                                                <h3 class="h5">Why disinfect ipads,
                                                    kiosks, credit cards, and more?</h3>
                                            </a>
                                            <p>Your waiting room is never going to be the same as what it was before any and
                                                on...</p>
                                            <div class="read-more-link">
                                                <a href="blog-single.html" target="_blank" class="mt-2 d-inline-flex align-items-center btn btn-sm btn-pill font-weight-bold"><span>Read More</span>
                                                    <i class="fas fa-arrow-right ms-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Style1