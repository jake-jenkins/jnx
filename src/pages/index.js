import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home({ data }) {
  return (
    <Layout>
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