import React, { useState } from "react"
import { Grid, Box, Paragraph, Heading, Text } from "theme-ui"
import GIF from "../static/gifs/Breast-Stroke.gif"
import Container from '../components/layout/Container'
import jsx from "theme-ui"

import SEO from "../components/seo"
import Layout from "../components/layout/Layout"

const IndexPage = ( props ) => {

  return (
    <Layout>
      <Container>
        <SEO title="Home" />
        <Grid columns={[2, '1fr auto']}>
          <Box>
            <Paragraph variant={"block"} sx={{fontsize:4}}>
              Welcome, this website is solely to put a face on some projects that
              I have been working on. If you are interested in me the links below
              should give you a good idea of the various facets of my life.
            </Paragraph>
          </Box>
          <Box>
            <img src={GIF} alt="Swimming Gif" />
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}

export default IndexPage;