import React, { useState } from "react"
import { Grid, Box, Paragraph, Heading, Image } from "theme-ui"
import { graphql } from 'gatsby'
import Container from '../components/layout/Container'
import jsx from "theme-ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import { Rounded } from "../components/Cards"
import { Link } from "@theme-ui/components"
import { MDXRenderer } from 'gatsby-plugin-mdx'

const IndexPage = ({ data }) => {

  const monstera = getImage(data.monstera)
  const fern = getImage(data.fern)

  const recent_project = data.recentProject.nodes[0]
  const recent_blog = data.recentBlog.nodes[0]

  return (
    <Layout>
      <Container>
        <Grid columns={['1fr', '1fr 1fr', '1fr 1fr']}>
          <Box
            sx={{
              pl: 4
            }}
          >
            <Paragraph variant={"block"} sx={{fontsize:4}}>
              Web Developer during the day... and also at night. I use this website
              as a place to look into questions that I have and practice disseminating
              information.
            </Paragraph>
          </Box>
          <Box></Box>
        </Grid>
        <Grid columns={['1fr', '1fr 2fr', '1fr auto']}>
          <Box></Box>
          <Box
            sx={{
              position: "relative",
              width: ["300px", "450px"],
              height: ["300px", "450px"]
            }}
          >
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                zIndex: 99,
                display: "flex",
              }}
            >
              <Rounded
                sx={{
                  ml: -6,
                  mr: 4,
                  my: 'auto',
                  p: 3
                }}
              >
                <Heading sx={{display:'flex'}}>
                  <Link
                    href={"/blog/" + recent_blog.slug}
                    to={"/blog/" + recent_blog.slug}
                    sx={{color:"text", mx: 'auto'}}
                  >
                    {recent_blog.frontmatter.title}
                  </Link>
                </Heading>
                <Paragraph sx={{pt:3}}>
                  {recent_blog.frontmatter.excerpt}
                </Paragraph>
              </Rounded>
            </Box>
            <Box>
              <GatsbyImage alt={"Monstera Leaf"} image={monstera} />
            </Box>
          </Box>
        </Grid>
        <Grid columns={['1fr', '2fr 1fr', 'auto 1fr']}>
          <Box
            sx={{
              position: "relative",
              width: ["350px", "550px"],
              height: ["350px", "550px"]
            }}
          >
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                width: "100%",
                zIndex: 99,
                display: "flex",
              }}
            >
              <Rounded
                sx={{
                  ml: 4,
                  mr: -6,
                  my: 'auto',
                  p: 3
                }}
              >
                <Heading sx={{display:'flex'}}>
                  <Link
                    href={"/blog/" + recent_project.slug}
                    to={"/blog/" + recent_project.slug}
                    sx={{color:"text", mx: 'auto'}}
                  >
                    {recent_project.frontmatter.title}
                  </Link>
                </Heading>
                <Paragraph sx={{pt:3}}>
                  {recent_project.frontmatter.excerpt}
                </Paragraph>
              </Rounded>
            </Box>
            <Box>
              <GatsbyImage alt={"Fern Leaf"} image={fern} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    fern: file(relativePath: {glob: "fern.png"}) {
      relativePath
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    monstera: file(relativePath: {glob: "*monstera.png"}) {
      relativePath
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    recentBlog: allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {glob: "**/blog/**"}}
      limit: 1
    ) {
      nodes {
        id
        slug
        frontmatter {
          date
          github
          title
          excerpt
        }
      }
    }
    recentProject: allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {fileAbsolutePath: {glob: "**/projects/**"}}
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "D-M-Y")
          excerpt
        }
        id
        slug
      }
    }
  }
`

export default IndexPage;