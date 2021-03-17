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
    <title>Welcome - Jake Jenkins, Front End Web Developer</title>
    <meta name="description" content="Professional Portfolio for Jake Jenkins, Front End Web Developer.  Lets build Awesome Web Apps and Websites." />
    <meta name="keywords" cpntent="jake,jenkins,web,design,development,developer,portfolio,app,react,frond end,node,mvc,asp,net,sql,wales,bristol,cardiff,newport" />
  </Helmet>
  <section className={styles.header}>
    <div>
      <h2>Awesome</h2>
      <h3>Web Apps & Sites.</h3>
      <p>UX designer and web developer in South Wales.</p>
      <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
    </div>
    <Img fluid={data.file.childImageSharp.fluid}></Img>
  </section>
    </Layout>
    )
  }

export const query = graphql`
  query Bulb {
    file(relativePath: {eq: "bulb.jpg"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    }
    `