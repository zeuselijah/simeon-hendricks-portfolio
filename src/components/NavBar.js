import React from 'react'

const NavBar = () => {
  return (
    <nav className="nav">
        <a href="/" className='site-title'>
            Simeon Hendricks
        </a>
        <ul>
            <li className="active">
                <a href="/about">About</a>
            </li>
            <li className="active">
                <a href="https://docs.google.com/document/d/1xoedXThmrS3Lq6ztOESpRa_QdBGVfjHWoYQg9Bs0pLU/edit">Resume</a>
            </li>
            <li className="active">
                <a href="/projects">Projects</a>
            </li>
            <li className="active">
                <a href="/references">References</a>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;