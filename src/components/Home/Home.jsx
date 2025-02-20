import React, { use, useEffect } from 'react'
import HeroSection from './HeroSection/HeroSection'
import Testimonial from './Testimonial/Testimonial'
import CallToAction from './CallToAction/CallToAction'
import TabStyle from './TabStyle/TabStyle'
import ServicesStyle from './ServicesStyle/ServicesStyle'
import WorkProcessStyle from './WorkProcessStyle/WorkProcessStyle'
import PricingStyle from './PricingStyle/PricingStyle'
import Accordions from './Accordions/Accordions'
import Features from './Features/Features'
import OurTeam from './OurTeam/OurTeam'
import IntegrationStyle from './IntegrationStyle/IntegrationStyle'
import BlogStyle from './BlogStyle/BlogStyle'
import ContactUs from './ContactUs/ContactUs'
import HelpCenter from './HelpCenter/HelpCenter'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { getAllHomeData } from '../../features/actions/home'

const Home = () => {

const dispatch = useDispatch()
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
  Feature:Features,
Integration:IntegrationStyle,
"Our Team":OurTeam,
Blog:BlogStyle,
Contact:ContactUs,
"Help Center":HelpCenter
};
      
useEffect(()=>{
  dispatch(getAllHomeData())
},[])

console.log(data)
 

    return (<>
    <Helmet>
    <title>{page_data?.page_data?.meta_title}</title>
    <meta name="description" content={page_data?.page_data?.meta_description}/>
    </Helmet>
    {/* {Array.isArray(page_section_data) && page_section_data?.map((item,idx)=>{ */}
    {Array.isArray(data) && data?.map((item,idx)=>{
            const Component = componentMap[item?.section_name]  
            return (
            <Component key={idx} data={item?.page_section_data} styleName={item?.section_style_name}/>
        )})}

          </>

  )
}

export default Home