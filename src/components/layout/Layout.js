/** @jsxImportSource theme-ui */

import React from "react"
import PropTypes from "prop-types"
import { Flex } from 'theme-ui'
import { jsx } from "theme-ui"

import SEO from "../seo"
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
      <SEO {...props} />
      <Header/>
        <main>{props.children}</main>
      <Footer/>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
