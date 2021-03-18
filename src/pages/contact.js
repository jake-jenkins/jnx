import React from 'react'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'

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
<a href="tel:+442920001404"><i class="lni lni-phone"></i> 02920 001 404</a>
<br/>
<a href="mailto:jake@jnx.app"><i class="lni lni-envelope"></i> jake@jnx.app</a>
<br/>
<a href="https://twitter.com/jnx_uk" target="_blank" rel="noreferrer"><i class="lni lni-twitter-filled"></i> @jnx_uk</a>
<br/>
<a href="https://github.com/jnx-uk" target="_blank" rel="noreferrer"><i class="lni lni-github-original"></i> jnx-uk</a>
</p>
<p>&nbsp;</p>
<p><h2>Send some post</h2></p>
<p>
JNX Web Development<br/>
97 Willowbrook Gardens<br/>
Cardiff<br/>
CF3 0BY
</p>
        </Layout>
    )
}
