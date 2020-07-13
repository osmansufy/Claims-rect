import React from 'react'



const map=props=>{
    return(
        <div id="map" className="map-section">
    <div  style="opacity: 1;" className="icon-xl">
        <div  style="opacity: 1;" className="icon-xl-block">
            <img src="./assets/image/map-icon.svg" height="50" alt="" />
        </div>
    </div>
    <div className="map-part">
        <div className="html-embed w-embed w-iframe">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6611649015604!2d-81.56547338491929!3d28.549902582450454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e783aa71c63e7f%3A0x39e83f1eec5c30f1!2s1150%20Elboc%20Way%2C%20Winter%20Garden%2C%20FL%2034787!5e0!3m2!1sen!2sus!4v1567022162886!5m2!1sen!2sus"
                width="100%"
                height="450"
                frameborder="0"
                style="border: 0;"
                allowfullscreen=""
            ></iframe>
        </div>
    </div>
</div>
    )
}


export default map 