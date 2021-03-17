import React from 'react'
import Layout from "../../components/Layout"
import { graphql, Link } from 'gatsby' 
import * as styles from '../../styles/projects.module.css'

export default function Projects({ data }) {
    const projects = data.projects.nodes
    return (
        <Layout>
        <div className={styles.portfolio}>
            <h2>Projects</h2>
            <h3>Websites I have created</h3>
        <div className={styles.projects}>
            {projects.map(project => (
                <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                    <div>
                        <h3>{ project.frontmatter.title }</h3>
                        <p>{ project.frontmatter.stack }</p>
                    </div>
                </Link>
            ))}
        </div>
        </div>
        </Layout>
    )
}

// export page query

export const query = graphql`
query ProjectList {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
          frontmatter {
            slug
            stack
            title
          }
          id
        }
      }
    site: site {
        siteMetadata {
            title
        }
    }
  }
  
`