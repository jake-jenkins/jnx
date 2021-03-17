import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
    return (
        <div>
           <Navbar />
        <main>
            {children}
        </main>
        <footer>
        © Jake Jenkins 2003 - 2021.
        </footer>
        </div>
    )
}
