import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsBySlug } from "../features/actions/blog";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Loader from "../components/Loader/Loader";

const ViewBlog = () => {
  const dispatch = useDispatch();
  const { blogData, isLoading } = useSelector((state) => state.blog);
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getBlogsBySlug(slug));
  }, []);

  console.log(blogData);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <section
        class="page-header position-relative overflow-hidden ptb-120 bg-dark"
        style={{
          background: `url('https://babvipsoftwares.com/site/assets/img/page-header-bg.svg')no-repeat bottom left`,
        }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-8 col-12">
              <h1 class="fw-bold display-5">{blogData?.blog_title}</h1>
            </div>
          </div>
          <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
        </div>
      </section>

      <section class="blog-details ptb-120">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-8 pe-lg-5">
              <div class="blog-details-wrap">
                {parse(String(blogData?.blog_details1))}
                <blockquote class="bg-white custom-shadow p-5 mt-5 rounded-custom border-4 border-primary border-top">
                  <p class="text-muted">
                    <i class="fas fa-quote-left me-2 text-primary"></i>
                    {blogData?.blog_short_details1}
                    <i class="fas fa-quote-right ms-2 text-primary"></i>
                  </p>
                </blockquote>
              </div>
              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  blogData?.blog_image2
                }`}
                alt={blogData?.image2_alt}
                class="img-fluid mt-4 rounded-custom"
                loading="lazy"
              />
              <div class="job-details-info mt-5">
                {parse(String(blogData?.blog_details2))}
              </div>

              <img
                src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                  blogData?.blog_image3
                }`}
                alt={blogData?.image3_alt}
                class="img-fluid mt-4 rounded-custom"
              />
            </div>
            <div class="col-lg-4">
              <div class="author-wrap text-center bg-light-subtle p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
                <img
                  src="https://babvipsoftwares.com/storage/uploads/a1eec935-9ac4-48bf-b7ff-fc89aecb0667.png"
                  alt="Header_Logo"
                  width="120"
                  class="img-fluid shadow-sm rounded-circle"
                />
                <div class="author-info my-4">
                  <h5 class="mb-0">Babvip Admin</h5>
                  <span class="small">Managing Director</span>
                </div>
                <p>News published by Managing Director check our latest news</p>
                <ul class="list-unstyled author-social-list list-inline mt-3 mb-0">
                  <ul class="list-unstyled list-inline footer-social-list mb-0">
                    <li class="list-inline-item">
                      <a
                        href="https://www.facebook.com/babvipcreations"
                        target="_blank"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li class="list-inline-item">
                      <a
                        href="https://www.instagram.com/babvipcreations"
                        target="_blank"
                      >
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>

                    <li class="list-inline-item">
                      <a
                        href="https://www.linkedin.com/company/babvipcreations"
                        target="_blank"
                      >
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div
            class="bg-dark ptb-60 px-5 mt-100 position-relative overflow-hidden rounded-custom"
            style={{
              background: `url('https://babvipsoftwares.com/storage/uploads/be5a2e0a-f5b8-4d61-b186-b6abaa6d2fd5.svg')no-repeat center bottom`,
            }}
          >
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-9">
                <div class="subscribe-info-wrap text-center position-relative z-2">
                  <div class="section-heading">
                    <h4 class="h5 text-warning">
                      For Latest News &amp; Update
                    </h4>
                    <h2>Want Receive the Best SAAS Insights? Subscribe Now!</h2>
                    <p>
                      We can help you to create your dream website for better
                      business revenue.
                    </p>
                  </div>
                  <div class="form-block-banner mw-60 m-auto mt-5">
                    <form
                      id="email-form2"
                      name="email-form"
                      class="subscribe-form d-flex subscribenewsletter"
                      method="post"
                    >
                      <input
                        type="hidden"
                        name="_token"
                        value="s8v3m35mvBf1srI0ry17TeGzsVPZFhtFqK20UeoE"
                        autocomplete="off"
                      />{" "}
                      <input
                        type="email"
                        class="form-control me-2"
                        name="email"
                        data-name="Email"
                        placeholder="Enter your email"
                        id="Email2"
                        required=""
                      />
                      <input
                        type="submit"
                        value="Join!"
                        data-wait="Please wait..."
                        class="btn btn-primary submitbtnsubs"
                      />
                    </form>
                  </div>
                  <ul class="nav justify-content-center subscribe-feature-list mt-3">
                    <li class="nav-item">
                      <span>
                        <i class="far fa-dot-circle text-primary me-2"></i>Don’t
                        worry we won’t send you spam
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-circle rounded-circle circle-shape-1 position-absolute bg-dark-light left-5"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewBlog;
