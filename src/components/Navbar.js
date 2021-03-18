import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {

    return (
        <header>
        <h1>
            <a href="/">
            <img src="/jnx-logo.png" alt="JNX logo" height="70" width="100"></img>
            </a>
        </h1>
        <nav>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        </nav>
        </header>
    )
}
