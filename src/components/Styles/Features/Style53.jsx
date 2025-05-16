import React from "react";

const Style53 = () => {
  return (
    <section class="dg-cta-section ptb-120 position-relative overflow-hidden z-1">
      <img
        src="assets/img/digital-agency/cta-curve-left.png"
        alt="curve shape"
        class="position-absolute ct-curve left top-0 h-100 z--1 d-none d-xxl-block"
      />
      <img
        src="assets/img/digital-agency/cta-curve-right.png"
        alt="curve shape"
        class="position-absolute ct-curve right top-0 h-100 z--1 d-none d-xxl-block"
      />
      <img
        src="assets/img/digital-agency/cta-line.png"
        alt="cta line"
        class="position-absolute start-50 bottom-0 translate-middle-x z--1 d-none d-md-block"
      />
      <span class="dg-circle-style-1 position-absolute z--1 dg-circle rounded-circle start-50"></span>
      <div class="container">
        <div class="row g-4 justify-content-between align-items-center">
          <div class="col-lg-6">
            <div class="dg-cta-content">
              <span class="text-dg-primary fw-bold">WHAT WE DO</span>
              <h2 class="mt-2 mb-3 heading-dg-color clr-text">
                Rethink just how safe renting can be with Quiety
              </h2>
              <p class="mb-40 heading-dg-color">
                Available in Portugal, Spain, Italy, U.K. and France.
              </p>
              <div class="dg-cta-btns d-flex align-items-center flex-wrap">
                <a
                  href="contact-us.html"
                  class="btn dg-primary-btn rounded-pill"
                >
                  Get in touch
                </a>
                <a
                  href="service-single.html"
                  class="btn dg-outline-btn rounded-pill"
                >
                  Browse all Service
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="dg-cta-imgs d-flex mt-5 mt-lg-0">
              <div class="thumb">
                <img
                  src="assets/img/digital-agency/bulp.jpg"
                  alt="not found"
                  class="img-fluid rounded-4"
                />
              </div>
              <div class="thumb mt-4">
                <img
                  src="assets/img/digital-agency/art.jpg"
                  alt="not found"
                  class="img-fluid rounded-4"
                />
              </div>
              <div class="thumb align-self-end">
                <img
                  src="assets/img/digital-agency/art-2.jpg"
                  alt="not found"
                  class="img-fluid rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Style53;
