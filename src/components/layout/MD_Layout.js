import React from "react"
import { Grid, Box, Flex } from "theme-ui"
import Layout from './Layout'
import Container from './Container'
import CustomThemeProvider from "../CustomThemeProvider"

const MD_Layout = ( props ) => {
  let { pageContext } = props
  return (
    <Layout
      title={pageContext.frontmatter.title}
      description={pageContext.frontmatter.excerpt}
      image={props.path + pageContext.frontmatter.image}
      {...props}
    >
      <Container>
        <Flex>
          <Box
            sx={{
              mx: 'auto',
              width:["100%", "100%", "750px", "750px", "750px", "750px"]
            }}
          >
            <CustomThemeProvider>
              {props.children}
            </CustomThemeProvider>
          </Box>
        </Flex>
      </Container>
    </Layout>
  )
}

export default MD_Layout