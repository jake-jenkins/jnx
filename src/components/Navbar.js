import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {

    return (
        <header>
        <div class="logo">
            <a href="/">
            <img src="/jnx-logo.png" alt="JNX logo"></img>
            </a>
        </div>
        <nav>
        <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        </div>  
        </nav>
        </header>
    )
}
