import React, { useState } from "react"
import { Grid, Box, Paragraph, Heading, Image } from "theme-ui"
import { graphql } from 'gatsby'
import GIF from "../static/gifs/Breast-Stroke.gif"
import Container from '../components/layout/Container'
import jsx from "theme-ui"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import { Rounded } from "../components/Cards"

const IndexPage = ({ data }) => {

  const monstera = getImage(data.file)

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
              width: ["300px", "500px"],
              height: ["300px", "500px"]
            }}
          >
            <Box
              sx={{
                position: "absolute",
                p: 5,
                zIndex: 99
              }}
            >
              <Rounded
                sx={{
                  p: 5
                }}
              >
                This is some test text
              </Rounded>
            </Box>
            <Box>
              <GatsbyImage alt={"Monstera Leaf"} image={monstera} />
            </Box>
          </Box>
        </Grid>

      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    file(relativePath: {eq: "monstera.webp"}) {
      relativePath
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default IndexPage;