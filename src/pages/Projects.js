import React from 'react';
import '../container/css/Projects.css';

const Projects = () => {
  return (
    <>
        <h1>Projects</h1>
    <div className="grid">
        <a href="https://doctors-portal-p4.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src="https://i.imgur.com/t5IIOfI.png" alt="" className="projects" />
        </a>
        <a href="https://travel-xp-log.netlify.app/" target="_blank" rel="noreferrer">
            <img src="https://i.imgur.com/4VtuYsy.jpg" alt="" className="projects" />
        </a>
        <a href="https://cattlecaller22.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src="https://i.imgur.com/b8BtWxK.jpg" alt="" className="projects" />
        </a>
        <a href="https://gilded-dodol-05c71d.netlify.app" target="_blank" rel="noreferrer">
            <img className='projects' src="https://i.imgur.com/jDuNmg1.png" alt="" />  
        </a>
    </div>
    </>
  )
}
export default Projects;