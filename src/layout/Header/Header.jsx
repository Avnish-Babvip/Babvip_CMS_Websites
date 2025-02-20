import React, { useEffect } from 'react'
import {useSelector } from 'react-redux'


const Header = () => {

 const {headMenuData}= useSelector((state)=>state.headMenu)
 const {siteSetting}= useSelector((state)=>state.siteSettings.siteSettingsData)


  return (<>

    <header class="main-header w-100 z-10" >
    <nav class="navbar navbar-expand-xl navbar-light sticky-header">
        <div class="container d-flex align-items-center justify-content-lg-between position-relative">
            <a href="index.html" class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
            { siteSetting?.setting_data?.site_logo &&  <img src={`${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${siteSetting?.setting_data?.site_logo}`} alt={siteSetting?.setting_data?.site_logo_alt} class="img-fluid"/>}
            </a>

            <a class="navbar-toggler position-absolute right-0 border-0" href="#offcanvasWithBackdrop" role="button">
                <i class="flaticon-menu"
                   data-bs-toggle="offcanvas"
                   data-bs-target="#offcanvasWithBackdrop"
                   aria-controls="offcanvasWithBackdrop"></i>
            </a>
            <div class="clearfix"></div>
            <div class="collapse navbar-collapse justify-content-center">
                <ul class="nav col-12 col-md-auto justify-content-center main-menu">
                {Array.isArray(headMenuData) && headMenuData?.length > 0 &&  headMenuData?.map((item,idx)=>     
                item?.is_horizontal && item?.children_recursive?.length >0 ? 
                 (<li key={idx} class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{item?.title}</a>
                          <div class="dropdown-menu border-0 rounded-custom shadow py-0  homepage-list-wrapper">
                          <div class="dropdown-grid  rounded-custom  homepage-dropdown">
                                    {/* Custom Image Mega Header Layout  */}
                                     <div className=""style={{ width: "755px" }}>  
    <div className="row g-0">
     { item?.children_recursive?.map((item2,idx2)=>
      <a key={idx2}   className="col-md-4  "   style={{ cursor: "pointer" }}>
        <div className="card h-100 border-0 rounded-3 " style={{ width: "250px" }}>
          <div className="card-body "> 
            <div className="mb-3">
              <img
                src={item2?.menu_image ? `${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${item2?.menu_image}` : '/placeholder.webp' }
                alt={item2?.title}
                width={220}
                height={150}
                className=" rounded-3 zoom"
              />
            </div>
            <div>
            <h5  className=" card-title d-flex fs-6 gap-2 ">
              {item2?.title} <span>›</span>
            </h5>
            <p className="card-text text-muted small truncate-2 font-weight-semibold text-capitalize">
              {item2?.menu_description}
            </p>
            </div>
          </div>
        </div>
      </a> 
     ) } 
    </div>
  </div>
                              </div>
                          </div>
                      </li>)
                       : !item?.is_horizontal && item?.children_recursive?.length >0 ?
                      (  <li key={idx} class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle  " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{item?.title}</a>
                        <div class="dropdown-menu border-0 rounded-custom shadow py-0  homepage-list-wrapper">
                        <div class="dropdown-grid rounded-custom  homepage-dropdown">
                                  {/* Custom Logo Mega Header Layout  */}
                                  <div className=""style={{ width: "800px" }}>  
<div className="row g-0">
{ item?.children_recursive?.map((item2,idx2)=>
      <div key={idx2} className="col-md-6 " style={{ cursor: "pointer" }}>
        <div className="card h-100 border-0 rounded-4 dropdownCardHover " style={{ width: "400px" }}>
          <div className="card-body d-flex align-items-center gap-3  "> {/* Reduced padding */}
            <div className="">
              <img
                src={item2?.menu_image ? `${import.meta.env.VITE_REACT_APP_IMAGE_PATH}/${item2?.menu_image}` : '/placeholder.webp' }
                alt="Free tier illustration"
                width={70}
                height={70}
                className="rounded-3"
              />
            </div>
            <div>
             <h5 className="card-title d-flex gap-2 fs-6  custom-hover-color"  style={{ color: "#175cff" }}>
              {item2?.title} <span>›</span>
            </h5>
          { item2.menu_description && <p className="card-text truncate-2 text-muted text-capitalize small font-weight-semibold">
             {item2.menu_description}
            </p>}
            </div>
           
          </div>
        </div>
      </div>
)}
      </div>
  

  </div> 

                            </div>
                        </div>
                    </li> ):  
                   ( <li key={idx}><a href="pricing.html" class="nav-link">{item?.title}</a></li> )
                )
                }
                
            {/* <li class="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
                        <a href="javascript:void(0)" class="btn btn-link p-1 tt-theme-toggle">
                            <div class="tt-theme-light" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Light"><i class="flaticon-sun-1 fs-lg"></i></div>
                            <div class="tt-theme-dark" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Dark"><i class="flaticon-moon-1 fs-lg"></i></div>
                        </a> 
                    </li> */}
                </ul>
            </div>

           
        </div>
        
    </nav>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop">
        <div class="offcanvas-header d-flex align-items-center mt-4">
            <a href="index.html" class="d-flex align-items-center mb-md-0 text-decoration-none">
                <img src="assets/img/logo-color.png" alt="logo" class="img-fluid ps-2" />
            </a>
            <button type="button" class="close-btn text-danger" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="flaticon-cancel"></i>
            </button>
        </div>
        <div class="offcanvas-body">
            <ul class="nav col-12 col-md-auto justify-content-center main-menu">
            {Array.isArray(headMenuData) && headMenuData?.length > 0 &&  headMenuData?.map((item,idx)=>
                item?.children_recursive?.length >0 ? 
              (<li key={idx} class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {item?.title}
                    </a>
                    <div class="dropdown-menu border-0 rounded-custom shadow py-0 bg-white homepage-list-wrapper">
                    { item?.children_recursive?.map((item2,idx2)=>    
                         <div key={idx2} class="dropdown-grid rounded-custom width-full homepage-dropdown">
                            <div class="dropdown-grid-item bg-white radius-left-side">
                                {/* <h6 class="drop-heading">Different Home</h6> */}
                                <a href="index.html" class="dropdown-link">
                                    <span class="demo-list bg-primary rounded text-white fw-bold">{idx2+1}</span>
                                    <div class="dropdown-info">
                                        <div class="drop-title text-capitalize">{item2?.title}</div>
                                        <p className='text-capitalize'>{item2?.menu_description} </p>
                                    </div>
                                </a>
                          
                            </div>
                   
                        </div>)}
                    </div>
                </li>
                       ) : <li key={idx} ><a href="services.html" class="nav-link text-capitalize">{item?.title}</a></li> )  }
            </ul>
         
        </div>
    </div>
</header> 

</>

  )
}

export default Header