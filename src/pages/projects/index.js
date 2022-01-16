import React, { useState } from "react"
import { Box, Flex, Heading, Text, Button } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-plugin-image"
import Container from '../../components/layout/Container'
import {
  Label,
  Input,
} from 'theme-ui'

import SEO from "../../components/seo"
import Layout from "../../components/layout/Layout"

const ProjectPage = ({ data }) => {

  return (
    <Layout>
      <Container>
        <SEO title="Projects" />
        <Heading
          sx = {{
            fontSize : 5
          }}
        >
          Project Page
        </Heading>
        <p>
          A collection of all the projects that are atleast somewhat tangential to my studies.
        </p>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <Link to={`/projects/${node.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: ASC}
      filter: {fileAbsolutePath: {glob: "**/projects/**"}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "D-M-Y")
        }
        id
        slug
      }
    }
  } 
`

export default ProjectPage;