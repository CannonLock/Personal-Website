import React from "react"

import Layout from './Layout'
import Container from './Container'

const MD_Layout = ( props ) => {
  return (
    <Layout>
      <Container>
        {props.children}
      </Container>
    </Layout>
  )
}

export default MD_Layout