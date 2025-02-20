import React from 'react'

const Style2 = ({data}) => {
  return (
    <section class="masonary-blog-section pt-60 pb-120">
        
    <div class="container">
    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-10">
                            <div class="section-heading text-center">
                                <h2>{data?.title}</h2>
                            </div>
                        </div>
                    </div>
        <div class="row">
            <div class="col-lg-6 col-md-12">
                <div class="single-article feature-article rounded-custom my-3">
                    <a href="blog-single.html" class="article-img">
                        <img src="assets/img/blog/blog-10.jpg" alt="article" class="img-fluid"/>
                    </a>
                    <div class="article-content p-4">
                        <div class="article-category mb-4 d-block">
                            <a href="javascript:;" class="d-inline-block text-primary badge bg-primary-soft">
                                Marketing</a>
                        </div>
                        <a href="blog-single.html">
                            <h2 class="h5 article-title limit-2-line-text">Why product managers must be
                                strategic about chasing new trends</h2>
                        </a>
                        <p class="limit-2-line-text">Society is fragmenting into two parallel realities. In one
                            reality, you have infinite upside and opportunity. In the other reality, you’ll
                            continue to see the gap between your standard of living and those at the top grow
                            more and more.</p>

                        <a href="javascript:;">
                            <div class="d-flex align-items-center pt-4">
                                <div class="avatar">
                                    <img src="assets/img/testimonial/1.jpg" alt="avatar" width="40" class="img-fluid rounded-circle me-3"/>
                                </div>
                                <div class="avatar-info">
                                    <h6 class="mb-0 avatar-name">Donna Martin</h6>
                                    <span class="small fw-medium text-muted">April 24, 2022</span>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="single-article feature-article rounded-custom my-3">
                    <a href="blog-single.html" class="article-img">
                        <img src="assets/img/blog/blog-11.jpg" alt="article" class="img-fluid"/>
                    </a>
                    <div class="article-content p-4">
                        <div class="article-category mb-4 d-block">
                            <a href="javascript:;" class="d-inline-block text-danger badge bg-danger-soft">
                                Development</a>
                        </div>
                        <a href="blog-single.html">
                            <h2 class="h5 article-title limit-2-line-text">Two tried-and-true frameworks for
                                achieving product/market fit</h2>
                        </a>
                        <p class="limit-2-line-text">Society is fragmenting into two parallel realities. In one
                            reality, you have infinite upside and opportunity. In the other reality, you’ll
                            continue to see the gap between your standard of living and those at the top grow
                            more and more.</p>

                        <a href="javascript:;">
                            <div class="d-flex align-items-center pt-4">
                                <div class="avatar">
                                    <img src="assets/img/testimonial/4.jpg" alt="avatar" width="40" class="img-fluid rounded-circle me-3"/>
                                </div>
                                <div class="avatar-info">
                                    <h6 class="mb-0 avatar-name">Donna Martin</h6>
                                    <span class="small fw-medium text-muted">April 24, 2022</span>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center align-items-center mt-5">
            <div class="col-auto my-1">
                <a href="#" class="btn btn-soft-primary btn-sm">Previous</a>
            </div>
            <div class="col-auto my-1">
                <nav>
                    <ul class="pagination rounded mb-0">
                        <li class="page-item"><a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">3</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-auto my-1">
                <a href="#" class="btn btn-soft-primary btn-sm">Next</a>
            </div>
        </div>
    </div>
</section>

  )
}

export default Style2