import React from 'react'
import Style1 from './Style1'




const Accordions = () => {    

  const componentMap = {
    "Style 1": Style1

  };
 
  const Component =  componentMap[styleName]

  return (
          <Component />
)

}

export default Accordions