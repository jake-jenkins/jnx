import React from 'react'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import { IoCallSharp, IoMailOpenSharp, IoLogoTwitter, IoLogoGithub } from "react-icons/io5";

export default function contact() {
    return (
        <Layout>
<Helmet>
    <title>Contact - Jake Jenkins, Front End Web Developer</title>
    <meta name="description" content="Professional Portfolio for Jake Jenkins, Front End Web Developer.  Lets build Awesome Web Apps and Websites." />
    <meta name="keywords" cpntent="jake,jenkins,web,design,development,developer,portfolio,app,react,frond end,node,mvc,asp,net,sql,wales,bristol,cardiff,newport" />
  </Helmet>
<h1>Contact</h1>
<p>Please note that Jake Jenkins is a sole trader, Trading as Jnx Web Development.</p>
<p>&nbsp;</p>
<h2>Talk to me</h2>
<p>
<a href="tel:+442920001404"><IoCallSharp /> 01495 832223</a>
<br/>
<a href="mailto:jake@jnx.app"><IoMailOpenSharp /> dev@jakejnx.com</a>
<br/>
<a href="https://twitter.com/jnx_uk" target="_blank" rel="noreferrer"><IoLogoTwitter /> @jnx_uk</a>
<br/>
<a href="https://github.com/jnx-uk" target="_blank" rel="noreferrer"><IoLogoGithub /> jnx-uk</a>
</p>
<p>&nbsp;</p>
<p><h2>Send some post</h2></p>
<p>
JNX Web Development<br/>
45 Blue Lake Close<br/>
Ebbw Vale<br/>
NP23 6FD
</p>
        </Layout>
    )
}
