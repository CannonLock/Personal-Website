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
import TextContainer from "../../components/TextContainer"
import List from "../../components/CardList/List"
import SearchBar from "../../components/CardList/SearchBar"
import InputContainer from "../../components/InputContainer"

const ProjectPage = () => {

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
        <TextContainer>
          <p>
            A collection of all the projects that are atleast somewhat tangential to my studies.
          </p>
        </TextContainer>

        <SearchBar>
          <>
            <>
              <Label
                htmlFor="title"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Title
              </Label>
              <Input
                id="title"
                type="filter"
                name="title"
                sx={{
                  borderStyle: 'hidden hidden solid hidden',
                  borderWidth: 2,
                  fontSize: 2,
                  color: 'text',
                  p:1,
                  ":focus" : {
                    outline : 0,
                    borderColor: 'secondary'
                  }
                }}
              />
            </>
          </>
          <>
            <>
              <Button
                sx={{
                  borderColor: 'text',
                  border: 'solid',
                  borderWidth: 2,
                  borderRadius: 5,
                  bg: 'transparent',
                  ":focus": {
                    outline: 'none',
                    color: 'secondary',
                    transition: 'color .05s',
                  }
                }}
              >
                Surprise Me!
              </Button>
            </>
          </>

        </SearchBar>
      </Container>
    </Layout>
  )
  
      
}

export default ProjectPage;