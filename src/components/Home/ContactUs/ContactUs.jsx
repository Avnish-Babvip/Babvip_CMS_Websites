import React from 'react'
import Style1 from './Style1'
import Style2 from './Style2';




const ContactUs = () => {

  const componentMap = {
    "Style 1": Style1,
    "Style 2": Style2

  };
 
  const Component =  componentMap[styleName]

    return (
            <Component />
  )
  
}

export default ContactUs