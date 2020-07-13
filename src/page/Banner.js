import React from 'react'



const Banner=(props)=>{
    return(
        <div className="banner-section w-background"> 
            <video  autoplay=""
            loop="" muted="1">
                <source src="assets/cf-12-displaying html data inside the container.mp4" type="video/mp4" />
            </video>
       <div className="banner-nav w-100">
            <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 nav-bg-tr ">
                <a href="index.html" aria-current="page" className="brand  navbar-brand w-nav-brand w--current">
                <img src="./assets//image/logo.png" height="40" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarText" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse w-nav-menu" id="navbarText">
                <ul className="navbar-nav w-100 ml-auto nav-width">
                    <li className="nav-item active">
                    <a className="nav-link w-nav-link" href="index.html#About-Us">About us</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link w-nav-link" href="index.html#Team">Our team</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link w-nav-link" href="blog.html">Blog</a>
                    </li>
                    
                    

                </ul>

                <span className="navbar-text ">
                    <a href="contact.html" className="nav-link-free-pass w-nav-link"> contact</a>
                </span>
                </div>
            </nav>
        </div>
        <div className="banner-content-wrapper">
        <h6 className="banner-caption">est. 2010</h6>
        <h1 className="hero-heading">
            MAXIMIZING <strong className="blue-bold">YOUR</strong> PROFITS<br />
            WHILE EXPEDITING <strong className="blue-bold">YOUR</strong> CASH FLOW
        </h1>
        <h6 className="heading-10">See what 300 years of combined restoration experience can do for you</h6>
        <img src="./assets/image/brush-stroke.svg" width="200" alt="" className="brush-divider" />
        <div className="banner-buttons-wrapper flex-sm-wrap"><a href="#About-Us" className="banner-colored-button w-button">Learn More</a><a href="tel:4075024886" className="banner-outline-button w-button">Get started!</a></div>
    
       </div>
      
   </div>
    )
}


export default Banner