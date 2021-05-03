import { Link } from 'gatsby'
import React from 'react'
import { IoChatbubbleEllipsesSharp, IoPlanetSharp, IoHandRight } from "react-icons/io5";

export default function Navbar() {

    return (
        <header>
        <h1>
            <a href="/">
            <img src="/wales-dev-logo.png" alt="JNX logo" height="100" width="150"></img>
            </a>
        </h1>
        <nav>
        <Link to="/about"><IoHandRight /> About</Link>
        <Link to="/projects"><IoPlanetSharp /> Portfolio</Link>
        <Link to="/contact"><IoChatbubbleEllipsesSharp /> Contact</Link>
        </nav>
        </header>
    )
}
