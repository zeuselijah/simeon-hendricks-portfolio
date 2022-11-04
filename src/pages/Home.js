import React from 'react';
import '../container/css/Home.css';

const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-parent'>
            <div className='home-details'>
                <img src="https://i.imgur.com/ALeN6rl.jpg" alt="" className="headshot" />
            <div className='list'>
                <br />
                <br />
                <br />
                <ul>
                    <li>Certified Scrum Master</li>
                    <li>Certified Software Engineer</li>
                    <li>Front-End Developer</li>
                    <li>Full-Stack Developer</li>
                </ul>
            </div>
            </div>
        </div>
    </div>  
    
  )
}
export default Home;