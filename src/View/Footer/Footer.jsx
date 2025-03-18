import React from 'react';
import "./footer.css";

function Footer() {
  return (
    <div className='fixed'>
    <div className="footer-container ">
        <div className="container-1">
          <h5 className='heading'>ONLINE SHOPPING</h5>
          <ul className="list">
            <li>HOME</li>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>HOME & LIVING</li>
            <li>BEAUTY</li>
          </ul>
        </div>

        <div className="container-2">
          <h5 className='heading'>EXPERIENCE MYNTRA APP ON MOBILE</h5>
            <div className="button-container">
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-btn" />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="store-btn" />
              </a>
          </div>   
          
      </div>
     
    </div>
    <p className='copyright'>&copy; 2025 Myntra. All Rights Reserved.</p>
  </div>
  
  )
}

export default Footer;