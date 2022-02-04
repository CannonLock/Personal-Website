import React from "react"
import { Grid, Box, Paragraph, Heading, Image, Flex } from "theme-ui"
import { graphql } from "gatsby"
import { Link } from "@theme-ui/components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Rounded, Content } from "../../components/Cards"
import Container from '../../components/layout/Container'
import Layout from "../../components/layout/Layout"
import SEO from "../../components/seo"
import { darken, mix } from "@theme-ui/color"
import theme from "../../gatsby-plugin-theme-ui"

const BlogPage = ({ data }) => {

  const vine = getImage(data.vine)

  return (
    <Layout>
      <SEO title={"Blog"} />
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
                height: "400px",
                width: "400px",
                ml: ["-100px", "-100px", "-200px", "-225px"],
                zIndex: 1
            }}>
              <GatsbyImage alt={"Dangling Vine"} image={vine} />
            </Box>
            <Box
              sx={{mt:4, zIndex: 2, position: 'relative'}}
            >
              <Rounded sx={{backgroundColor: darken('secondary',  .02)(theme)}}>
                <Heading sx={{color: "background"}}>
                  Blog Posts
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
                      href={"/blog/" + blog.slug}
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
      filter: {fileAbsolutePath: {glob: "**/blog/**"}}
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
    vine: file(relativePath: {glob: "vine.png"}) {
      relativePath
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`

export default BlogPage;