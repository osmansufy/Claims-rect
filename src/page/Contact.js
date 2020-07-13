import React from 'react'


const contact=props=>{
    return(
        <div id="Contact" class="contact-section">
    <h2>our team</h2>
    <img src="./assets/image/brush-stroke.svg" width="200" alt="" class="brush-divider" />
    <p class="paragraph-xl">See what 300 years of combined restoration experience can do for you</p>
    <div class="contact-container">
        <div class="contact-img col-lg-6" >
            <img src="assets/image/contact-form.png" alt="" />
        </div>
        <div class="contact-form col-lg-6 col-md-12 "
        >
            <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                   
                    <input type="email" class="form-control w-input " id="inputEmail4" placeholder="Email" />
                  </div>
                  <div class="form-group col-md-6">
                   
                    <input type="password" class="form-control w-input" id="inputPassword4" placeholder="Password" />
                  </div>
                  <div class="form-group col-md-6">
                   
                    <input type="email" class="form-control w-input" id="inputEmail4" placeholder="Email" />
                  </div>
                  <div class="form-group col-md-6">
                   
                    <input type="password" class="form-control w-input" id="inputPassword4" placeholder="Password" />
                  </div>
                </div>
                <div class="form-group">
                    <textarea class="contact-form-textarea form-control w-input" name="" id="" cols="30" rows="10"></textarea>
                    
                  </div>
            
                
                <input type="submit" value="Send Message"  class="colored-button w-button" />
              </form>
              <div id="w-node-49d11db922d1-bb022707" class="contact-info-text-block">
                <div class="contact-info-text-field"><strong class="bold-text">phone: </strong> 407-502-4886</div>
                <div class="contact-info-text-field"><strong class="bold-text">address:</strong>1150 Elboc Way, Winter Garden, FL 34787</div>
                <div class="contact-info-text-field"><strong class="bold-text">email: </strong>learnmore@netclaimsnow.com</div>
            </div>
        </div>
    </div>
</div>
    )
}

export default contact