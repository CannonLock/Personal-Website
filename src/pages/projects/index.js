import React, { useState } from "react"
import { Box, Flex, Heading, Text, Button, jsx } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img, { GatsbyImage, getImage } from "gatsby-plugin-image"
import Container from '../../components/layout/Container'
import SEO from "../../components/seo"
import Layout from "../../components/layout/Layout"
import { Content, Rounded } from "../../components/Cards"
import { darken, mix } from "@theme-ui/color"
import theme from "../../gatsby-plugin-theme-ui"

const ProjectPage = ({ data }) => {

  const ivy = getImage(data.ivy)

  return (
    <Layout>
      <SEO title={"Projects"} />
      <Container>
        <Flex>
          <Box
            sx={{
              mx: 'auto',
              width:["100%", "100%", "750px", "750px", "750px", "750px"]
            }}
          >
            <Box sx={{
              position: "absolute",
              height: "500px",
              width: "500px",
              ml: ["-100px", "-100px", "-100px", "-150px"],
              zIndex: 1
            }}>
              <GatsbyImage alt={"Dangling Vine"} image={ivy} />
            </Box>
            <Box
              sx={{mt:4, zIndex: 2, position: 'relative'}}
            >
              <Rounded sx={{backgroundColor: darken('secondary',  .02)(theme)}}>
                <Heading sx={{color: "background"}}>
                  Project Posts
                </Heading>
              </Rounded>
              <Box
                sx={{mt: 4}}
              >
                {
                  data.allMdx.nodes.map(blog => (
                    <Content
                      id={blog.id}
                      title={blog.frontmatter.title}
                      date={blog.frontmatter.date}
                      content={blog.frontmatter.excerpt}
                      href={"/projects/" + blog.slug}
                      sx={{
                        mb: 2,
                        backgroundColor: darken("gray",  .04)(theme),
                        '&:hover': {
                          backgroundColor: darken("gray",  .03)(theme),
                          boxShadow: "3px 3px 5px #996F66"
                        },
                      }}
                    />
                  ))
                }
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {glob: "**/projects/**"}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          excerpt
        }
        id
        slug
      }
    }
    ivy: file(relativePath: {glob: "ivy.png"}) {
      relativePath
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  } 
`

export default ProjectPage;