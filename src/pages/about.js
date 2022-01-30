import React, { useState } from "react"
import { Box, Flex, Heading, Paragraph, Text } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-plugin-image"

import SEO from "../components/seo"
import Layout from "../components/layout/Layout"
import TextContainer from "../components/TextContainer"
import Container from "../components/layout/Container"


const HeadShotImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "WebsiteHeadshotCompressed.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box
      sx = {{
        bg: 'primary',
        pt: "15px",
        pl: "20px",
        pr: "20px",
        pb: "20px",
        m: 'auto',
        minWidth: "250px",
        width: "250px",
        height: "auto",
        borderRadius: 30,
        float: 'right'
      }}
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Headshot"
      />
    </Box>
  )
}

const SegmentHeader = ( props ) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start'
      }}
    >
      <Box
        sx={{
          display : 'flex',
          flexDirection : 'row',
          flexWrap : 'wrap',
        }}
      >
        {props.children}
      </Box>
    </Box>

  )
}

const AboutPage = ( props ) => {

  return (
    <Layout>
      <SEO title="About" />
      <Container
        sx={{pt:4}}
      >
        <Heading as={"h1"}>About Me</Heading>
        <Paragraph>
          Work in progress, last one was a bit too CV-esque.
        </Paragraph>
      </Container>

    </Layout>
  )
}

export default AboutPage;