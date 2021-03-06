import React from 'react'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import { IoCallSharp, IoMailOpenSharp, IoLogoTwitter, IoLogoGithub } from "react-icons/io5";

export default function contact() {
    return (
        <Layout>
<Helmet>
    <title>Contact - WalesDev.com Web Developer in Wales</title>
    <meta name="description" content="Professional Portfolio for Jake Jenkins, Front End Web Developer.  Lets build Awesome Web Apps and Websites." />
    <meta name="keywords" cpntent="jake,jenkins,web,design,development,developer,portfolio,app,react,frond end,node,mvc,asp,net,sql,wales,bristol,cardiff,newport" />
  </Helmet>
<h1>Contact</h1>
<p>Please note that Jake Jenkins is a sole trader, Trading as WalesDev.com</p>
<p>&nbsp;</p>
<h2>Talk to me</h2>
<p>
<a href="tel:+4401495832223"><IoCallSharp /> 01495 832223</a>
<br/>
<a href="mailto:hello@walesdev.com"><IoMailOpenSharp /> hello@walesdev.com</a>
<br/>
<a href="https://twitter.com/waleswebdev" target="_blank" rel="noreferrer"><IoLogoTwitter /> @waleswebdev</a>
<br/>
<a href="https://github.com/waleswebdev" target="_blank" rel="noreferrer"><IoLogoGithub /> waleswebdev</a>
</p>
<p>&nbsp;</p>
<p><h2>Send some post</h2></p>
<p>
WalesDev.com<br/>
45 Blue Lake Close<br/>
Ebbw Vale<br/>
NP23 6FD
</p>
        </Layout>
    )
}
