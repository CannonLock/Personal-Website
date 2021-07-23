import React, { useState } from "react"
import { Grid, Box, Heading, Text } from "theme-ui"
import GIF from "../static/gifs/Breast-Stroke.gif"
import jsx from "theme-ui"

import SEO from "../components/seo"
import Layout from "../components/layout/Layout"

const IndexPage = ( props ) => {

  return (
    <Layout>
      <SEO title="Home" />
      <Grid columns={[2, '1fr auto']}>
        <Box>
          <p>
            Welcome, this website is solely to put a face on some projects that
            I have been working on. If you are interested in me the links below
            should give you a good idea of the various facets of my life.
          </p>
        </Box>
        <Box>
          <img src={GIF} alt="Swimming Gif" />
        </Box>
      </Grid>
    </Layout>
  )
}

export default IndexPage;