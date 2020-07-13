import React from 'react'




const Top=(props)=>{
    return(
        <div className="menubar-section" id="menubar-section" >
        <div className="fixed-navbar-container">
               <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 ">
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
                      <a className="nav-link w-nav-link" href="blog.html">Bolg</a>
                    </li>
                    
                    

                  </ul>

                  <span className="navbar-text ">
                    <a href="contact.html" className="nav-link-free-pass w-nav-link"> contact</a>
                  </span>
                </div>
              </nav>
        
        </div>
    </div>
    )

}


export default Top