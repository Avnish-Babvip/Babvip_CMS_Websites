import React from "react";

const HelpCenter = () => {
  return (
    <section class="support-content ptb-120">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-4 col-md-4 d-none d-md-block d-lg-block">
            <div class="support-article-sidebar sticky-sidebar">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.back();
                }}
                class="btn btn-primary mb-4 btn-sm"
              >
                <i class="fas fa-angle-left me-2"></i> Go Back
              </a>
              <div class="nav flex-column nav-pills support-article-tab bg-light-subtle rounded-custom p-5">
                <h5 class="customh-5">Related Support Articles</h5>
                <a
                  href="https://babvipsoftwares.com/help/Testt"
                  class="text-muted text-decoration-none py-2 d-block"
                >
                  Testt
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-8 p-lg-5">
            <div class="support-article-wrap">
              <h1 class="display-5 mb-4 fw-bold">
                BABVIP SOFTWARES Welcome ! To 1 Dashboard?
              </h1>
              <h4>
                <strong>BABVIP SOFTWARES Welcome ! To 1 Dashboard</strong>
              </h4>
              <p>&nbsp;BABVIP SOFTWARES Welcome ! To 1 Dashboard</p>
              <p>&nbsp;BABVIP SOFTWARES Welcome ! To 1 Dashboard</p>
              <p>&nbsp;BABVIP SOFTWARES Welcome ! To 1 Dashboard</p>
              <p>&nbsp;BABVIP SOFTWARES Welcome ! To 1 Dashboard</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpCenter;
