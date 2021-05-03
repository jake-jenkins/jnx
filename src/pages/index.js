import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'


export default function Home({ data }) {
  return (

    <Layout>
      <Helmet>
    <title>Welcome - WalesDev.com Web Developer in Wales</title>
    <meta name="description" content="Professional Portfolio for Jake Jenkins, Front End Web Developer.  Lets build Awesome Web Apps and Websites." />
    <meta name="keywords" cpntent="jake,jenkins,web,design,development,developer,portfolio,app,react,frond end,node,mvc,asp,net,sql,wales,bristol,cardiff,newport" />
  </Helmet>
  <div class="container">
    <div class="col">
      <h2 className={styles.awesome1}>Awesome</h2>
      <h3 className={styles.awesome2}>Web Apps & Sites.</h3>
      <p>UX designer and web developer in South Wales.</p>
      <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
    </div>
    <div class="col">
    <Img fluid={data.file.childImageSharp.fluid}></Img>
    </div>
</div>
    </Layout>
    )
  }

export const query = graphql`
  query Bulb {
    file(relativePath: {eq: "pantone.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    }
    `