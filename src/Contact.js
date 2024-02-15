import React from 'react'
import './Contact.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
function Contact() {
  return (
    <div className='Contact'>
      <div className="textzone">
          
            <h2>CONTACT</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo totam fugit eum nihil, corrupti ipsam quas. Esse, sint! Inventore unde iusto perferendis veritatis esse, illum optio corrupti! In itaque iure illo non assumenda maiores?
        </p>
        <div className="contact_form">
            <ul className='contact-inp'>
              <li className="half">
                <input  className='fade name' type="text" name='name' placeholder='Name' required />
                <label className="line-name"></label>
                <input  className='fade' type="email" name='Email' placeholder='Email' required />
                <label className="line-email"></label>
              </li>
              <li>
                <input className='subject fade' type="text"  name="subject" placeholder='Subject' required/>
                <label className="line-sub"></label>
              </li>
              <li>
                <textarea className='fade' name="message" placeholder='Message' required></textarea>
                <label className="line"></label>
              </li>
              <div className='btn_class'>
                <ul className='social-icons'>
                  <li>
                    <LinkedInIcon />
                  </li>
                  <li>
                    <GitHubIcon/>
                  </li>
                  <li>
                    <InstagramIcon/>
                  </li>
                </ul>
                <a className='btn' href='/'>Send Message!</a>
              </div>
             </ul>
        </div>

      </div>
      
      
      <div class="animation_layer parallax" id="jungle4"></div> 
  
      
    </div>
  )      
}

export default Contact