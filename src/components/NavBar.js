import React from 'react'

const NavBar = () => {
    
  return (
    <nav className="nav">
        <a href="/" className='site-title'>
            Simeon Hendricks
        </a>
        <ul>
            <CustomLink href="/about">About</CustomLink>
            <CustomLink href="/skills">Skills</CustomLink>
            <CustomLink href="/projects">Projects</CustomLink>
            <CustomLink href="https://docs.google.com/document/d/1-XvU8aV1EXUxV2jVYuuTL6U29cg7drTrqSKqM5OXV6A/edit">Resume</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink ({ href, children, ...props }) {
    const path = window.location.pathname

    return (
        <li className={path === href ? "active" : ""}>
        <a href={href}>{children}</a>
        </li>    
    )
}


export default NavBar;