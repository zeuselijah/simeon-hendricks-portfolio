import React from 'react'

const NavBar = () => {
  return (
    <nav className="nav">
        <a href="/" className='site-title'>
            Simeon Hendricks
        </a>
        <ul>
            <li className="active">
                <a href="https://docs.google.com/document/d/1xoedXThmrS3Lq6ztOESpRa_QdBGVfjHWoYQg9Bs0pLU/edit" target="_blank" rel="noreferrer" >Resume</a>
            </li>
            <li className="active" smooth spy to="projects">
                <a href="https://github.com/zeuselijah" target="_blank" rel="noreferrer" >Projects</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;