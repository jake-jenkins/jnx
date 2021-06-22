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
                WalesDev.com Web Developer in Wales © Jake Jenkins 2003 - 2021.
            </footer>
            <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "0540619f98104afab3f3eac71fe36435"}'></script>
        </div>
    )
}
