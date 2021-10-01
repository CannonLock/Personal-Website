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
              Welcome, thanks for visiting my page! It is currently a work in progress
              so if you are curious to learn more the best bet is the links on the bottom.
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