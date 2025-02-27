import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewsletter } from "../../features/actions/submission";
import { useForm } from "react-hook-form";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import { toast } from "sonner";

const Footer = () => {
  const { footerMenuData } = useSelector((state) => state.footerMenu);
  const { footerSetting } = useSelector(
    (state) => state.siteSettings.siteSettingsData
  );
  const { siteSetting } = useSelector(
    (state) => state.siteSettings.siteSettingsData
  );

  const theme = footerSetting?.setting_data?.footer_type || "light";

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.submission);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) || "Please enter a valid email address";
  };

  const onSubmit = (data2) => {
    dispatch(addNewsletter(data2));
    reset();
  };

  return (
    <footer
      class="footer-section"
      data-bs-theme={theme}
      style={{ backgroundColor: theme === "dark" ? "#171717" : "#FFFFFF" }}
    >
      <div class="footer-top footer-light pt-120 pb-60">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
              <div class="footer-single-col">
                <div class="footer-single-col mb-4">
                  {footerSetting?.setting_data?.footer_logo && (
                    <img
                      src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${
                        footerSetting?.setting_data?.footer_logo
                      }`}
                      alt={footerSetting?.setting_data?.footer_logo_alt}
                      class="img-fluid"
                    />
                  )}
                </div>
                <p>{footerSetting?.setting_data?.footer_description}</p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  class="newsletter-form position-relative d-block d-lg-flex d-md-flex"
                >
                  <input
                    {...register("email", {
                      required: "Email is required",
                      validate: validateEmail,
                    })}
                    type="text"
                    class="input-newsletter form-control me-2"
                    placeholder="Enter your email"
                    name="email"
                    autocomplete="off"
                  />
                  {errors.email && toast.error(errors.email.message) && ""}
                  <button
                    disabled={isLoading}
                    className="btn btn-primary rounded mt-3 mt-lg-0 mt-md-0"
                  >
                    {isLoading ? <ButtonLoader /> : "Subscribe"}
                  </button>
                </form>
                <div class="ratting-wrap mt-4">
                  <h6 class="mb-0">
                    {footerSetting?.setting_data?.rating_title}
                  </h6>
                  <ul class="list-unstyled rating-list list-inline mb-0">
                    {footerSetting?.setting_data?.rating &&
                      Array(Number(footerSetting?.setting_data?.rating))
                        ?.fill()
                        ?.map((_, idx) => {
                          return (
                            <li
                              key={idx}
                              class="list-inline-item  padding-end-1"
                            >
                              {" "}
                              <i class="fas fa-star text-warning"></i>
                            </li>
                          );
                        })}
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
              <div class="row ">
                {Array.isArray(footerMenuData) &&
                  footerMenuData?.length > 0 &&
                  footerMenuData?.map((item, idx) => (
                    <div
                      key={idx}
                      class=" col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0 mb-md-5 "
                    >
                      <div class="footer-single-col">
                        <h3>{item?.title}</h3>
                        <ul class="list-unstyled footer-nav-list mb-lg-0">
                          {item?.children_recursive.length > 0 &&
                            item?.children_recursive?.map((item2, idx2) => (
                              <li key={idx2}>
                                <a
                                  href="index.html"
                                  class="text-decoration-none"
                                >
                                  {item2?.title}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom footer-light py-4">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-7 col-lg-7">
              <div class="copyright-text">
                <p class="mb-lg-0 mb-md-0">
                  {footerSetting?.setting_data?.footer_tag_line}
                </p>
              </div>
            </div>
            <div class="col-md-4 col-lg-4">
              <div class="footer-single-col text-start text-lg-end text-md-end">
                <ul class="list-unstyled list-inline footer-social-list mb-0">
                  <li class="list-inline-item">
                    <a
                      target="_blank"
                      href={siteSetting?.setting_data?.facebook_page_url}
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href={siteSetting?.setting_data?.instagram_page_url}>
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href={siteSetting?.setting_data?.linkdin_page_url}>
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
