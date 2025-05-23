import React, { useState } from "react";
import VideoModal from "../../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const Style7 = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section class="cta-subscribe bg-dark text-white ptb-120 position-relative overflow-hidden">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="subscribe-info-wrap text-center position-relative z-2">
                <div
                  class="section-heading aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h4 class="h5 text-warning">Let's Try! Get Free Support</h4>
                  <h2>Start Your 14-Day Free Trial</h2>
                  <p>
                    We can help you to create your dream website for better
                    business revenue.
                  </p>
                </div>
                <div
                  class="form-block-banner mw-60 m-auto mt-5 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <Link to="contact-us.html" class="btn btn-primary">
                    Contact with Us
                  </Link>
                  <Link
                    onClick={() =>
                      "http://www.youtube.com/watch?v=hAP2QF--2Dg" &&
                      setShowVideo(true)
                    }
                    class="text-decoration-none popup-youtube d-inline-flex align-items-center watch-now-btn ms-lg-3 ms-md-3 mt-3 mt-lg-0"
                  >
                    {" "}
                    <i class="fas fa-play"></i> Watch Demo{" "}
                  </Link>
                </div>
                <ul
                  class="nav justify-content-center subscribe-feature-list mt-4 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <li class="nav-item">
                    <span>
                      <i class="far fa-check-circle text-primary me-2"></i>Free
                      14-day trial
                    </span>
                  </li>
                  <li class="nav-item">
                    <span>
                      <i class="far fa-check-circle text-primary me-2"></i>No
                      credit card required
                    </span>
                  </li>
                  <li class="nav-item">
                    <span>
                      <i class="far fa-check-circle text-primary me-2"></i>
                      Support 24/7
                    </span>
                  </li>
                  <li class="nav-item">
                    <span>
                      <i class="far fa-check-circle text-primary me-2"></i>
                      Cancel anytime
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light left-5"></div>
          <div class="bg-circle rounded-circle circle-shape-1 position-absolute bg-warning right-5"></div>
        </div>
      </section>
      {showVideo && (
        <VideoModal
          videoUrl={"http://www.youtube.com/watch?v=hAP2QF--2Dg"}
          setShowVideo={setShowVideo}
        />
      )}
    </>
  );
};

export default Style7;
