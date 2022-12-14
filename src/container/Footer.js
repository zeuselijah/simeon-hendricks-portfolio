import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <>
    
    <div className='footer-container'>
    <h5 className='connect'><span>Connect Here:</span></h5>
        <div className='footer-parent'>
            <div className='footer-details'>
                <div className='colz'>
                <div className="colz-icon">
                        <div className="gitHub">
                            <a href="https://github.com/zeuselijah">
                                <img alt="gitHub" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                            </a>
                        </div>
                    
                        <div className="linkedIn">
                            <a href="https://www.linkedin.com/in/simeonhendricks/">
                                <img alt="linkedIn" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    </>
  )
}
export default Footer;