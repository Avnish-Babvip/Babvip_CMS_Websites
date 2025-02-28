import React, { lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { getAllHomeData } from "../features/actions/home";
import HeroSection from "../components/Home/HeroSection/HeroSection";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import CallToAction from "../components/Home/CallToAction/CallToAction";
import TabStyle from "../components/Home/TabStyle/TabStyle";
import ServicesStyle from "../components/Home/ServicesStyle/ServicesStyle";
import WorkProcessStyle from "../components/Home/WorkProcessStyle/WorkProcessStyle";
import PricingStyle from "../components/Home/PricingStyle/PricingStyle";
import Accordions from "../components/Home/Accordions/Accordions";
import Features from "../components/Home/Features/Features";
import IntegrationStyle from "../components/Home/IntegrationStyle/IntegrationStyle";
import ContactUs from "../components/Home/ContactUs/ContactUs";
import Portfolio from "../components/Home/Portfolio/Portfolio";

// Lazy Loading 😴
const HelpCenter = lazy(() =>
  import("../components/Home/HelpCenter/HelpCenter")
);
const BlogStyle = lazy(() => import("../components/Home/BlogStyle/BlogStyle"));
const OurTeam = lazy(() => import("../components/Home/OurTeam/OurTeam"));

const Home = () => {
  const dispatch = useDispatch();
  const { page_data, data } = useSelector((state) => state.home.homeData);

  const componentMap = {
    Hero: HeroSection,
    Testimonial: Testimonial,
    "Call To Action": CallToAction,
    Tab: TabStyle,
    Service: ServicesStyle,
    "Work Process": WorkProcessStyle,
    Pricing: PricingStyle,
    Faq: Accordions,
    Feature: Features,
    Integration: IntegrationStyle,
    "Our Team": OurTeam,
    Blog: BlogStyle,
    Contact: ContactUs,
    "Help Center": HelpCenter,
    Portfolio: Portfolio,
  };

  useEffect(() => {
    dispatch(getAllHomeData());
  }, []);

  console.log(data);

  return (
    <>
      <Helmet>
        <title>{page_data?.page_data?.meta_title}</title>
        <meta
          name="description"
          content={page_data?.page_data?.meta_description}
        />
      </Helmet>
      {/* {Array.isArray(page_section_data) && page_section_data?.map((item,idx)=>{ */}

      {Array.isArray(data) &&
        data?.map((item, idx) => {
          const Component = componentMap[item?.section_name];
          return (
            <Component
              key={idx}
              data={item?.page_section_data}
              styleName={item?.section_style_name}
            />
          );
        })}
    </>
  );
};

export default Home;
