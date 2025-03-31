import React from 'react'

const ContactUs = () => {
  return (
    <div>
    <div class="contact-container">
    <div class="main-contact">
      <h1>Contact Us</h1>
      <p>Have questions or need assistance? We're here to help! Reach out to us via phone, telephone or email. Let’s connect and bring your ideas to life!</p>
      <p><strong>Phone:</strong> 01406589641</p>
      <p><strong>Telephone:</strong> 0235689</p>
      <p><strong>Mail:</strong> <a href="mailto:teleMind3@gmail.com">teleMind3@gmail.com</a></p>
      
    </div>
    <div class="form-section">
      <form action="teleMindBD@gmail.com" method="POST" class="contact-form">
        <input type="text" name="name" placeholder="Enter your Name" required></input>
        <input type="email" name="email" placeholder="Enter a valid email address" required></input>
        <textarea name="message" rows="5" placeholder="Enter your message"></textarea>
        <button type="submit">SUBMIT</button>
      </form>
  </div>
  </div>

  <div class="social-media">
    <div class="social-icons">
      <h3>Visit</h3>
      <a href="https://facebook.com" target="_blank" class="social-link" rel="noopener noreferrer"> 
        <img src="fb.png" alt="1" />
      </a>
      <a href="https://instagram.com" target="_blank" class="social-link" rel="noopener noreferrer"> 
        <img src="insta.png" alt="2" />
      </a>
      <a href="https://wa.me/1234567890" target="_blank" class="social-link" rel="noopener noreferrer"> 
        <img src="wp.png" alt="3" />
      </a>
      <a href="https://www.linkedin.com/in/tanmoy-debnath-0b0930322/" target="_blank" class="social-link" rel="noopener noreferrer">
        <img src="link.png" alt="4" />
      </a>
      <a href="https://www.twitter.com" target="_blank" class="social-link" rel="noopener noreferrer">
        <img src="twi.png" alt="5" />
      </a>
    </div>
  </div>

  <div class="details-section">
    <div class="detail-box">
      <h3><div class="icon">📞</div> CALL US</h3>
      <p>01406589641, 01863998905</p>
    </div>
    <div class="detail-box">
      <h3><div class="icon">✉️</div> Message Us</h3>
      <p>Facebook, Twitter, Instagram, Whatsapp, LinkedIn</p>
    </div>
    <div class="detail-box">
      <h3><div class="icon">🕒</div> HOURS</h3>
      <p>Sat – Thu : 6 am – 11 pm , Fri: 9 am – 10 pm</p>
    </div>
  </div>
  
  </div>
  )
}

export default ContactUs;