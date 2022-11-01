import React from 'react';
import './css/About.css';

const Home = () => {
  return (
    <div className='about-container'>
        <div className='about-parent'>
            <div className='about-details'>
                <img src="https://i.imgur.com/ALeN6rl.jpg" alt="" className="headshot" />
                <div className="container">
                    <p>
                        Certified Scrum Master and Software Engineer, with 10+ years of experience in 
                        operations and project management. Solution-driven, agile, 
                        lean six-sigma focused, team building and detail-oriented, 
                        leading teams in solving client pain points. Proven to develop
                        strong relationships across cultures and teams to provide leadership 
                        in a fast-paced environment. 
                    </p>
                </div>
                <div className='colz'>
                    <div className="colz-icon1">
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
    
  )
}
export default Home;