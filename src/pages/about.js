import React from 'react'
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

export default function about() {
    return (
        <Layout>
    <Helmet>
    <title>About - WalesDev.com Web Developer in Wales</title>
    <meta name="description" content="Professional Portfolio for Jake Jenkins, Front End Web Developer.  Lets build Awesome Web Apps and Websites." />
    <meta name="keywords" content="jake,jenkins,web,design,development,developer,app,react,frond end,node,mvc,asp,net,sql,wales,bristol,cardiff,newport" />
  </Helmet>
        <div>
            <h1>About</h1>
            <p>Jake Jenkins is a UX and Web Developer based in South Wales with a passion for building the best, easiest to use web sites and applications.</p>
            <div class="container">
                <div class="col">
                    <h2>Why work with me?</h2>
                    <ul>
                    <li>I work in partnership and love working with users</li>
                    <li>I always go the extra mile</li>
                    <li>I make the complex, simple</li>
                    <li>I am experienced in design and build</li>
                    </ul>
                </div>

                <div class="col">
                    <h2>What makes a great app or site?</h2>
                    <ul>
                    <li>Easy, and intuitive for users</li>
                    <li>Blazing Fast, latest technology</li>
                    <li>Easy to Update</li>
                    <li>Publishing Control</li>
                    <li>Secure</li>
                    </ul>
                </div>
                
                </div>

                <div class="container">
                <div class="col">
                    <h2>Core Technologies</h2>
                    <ul>
                    <li>REACT</li>
                    <li>Node.js</li>
                    <li>HTML, CSS and SASS</li>
                    <li>Tailwind, Bulma and Bootstrap</li>
                    <li>.net Core Web Applications</li>
                    <li>MVC and Entity Framework</li>
                    <li>MySQL, MS SQL Server, Postgres</li>
                    </ul>
                    </div>

                    </div>

            
 
 

        </div>
        </Layout>
    )
}
