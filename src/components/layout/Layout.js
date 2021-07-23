/** @jsx jsx */
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Flex } from 'theme-ui'
import Container from './Container'
import { jsx } from "theme-ui"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ( props ) => {
  
  return (
    <Flex
      sx={{
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "background"
      }}
    >
      <Header/>
      <Container>
        <main>{props.children}</main>
      </Container>
      <Footer/>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
