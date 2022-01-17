import React from "react"
import { Container as Theme_Container } from 'theme-ui'

const Container = ( props ) => {
  return (
    <Theme_Container sx={{
      maxWidth: ["100%", "100%", "100%", "100%",	"100%",	"1320px"],
      mb: 4,
      px: [2, 2, 4, 4, 4, 0]
    }}>
      { props.children }
    </Theme_Container>
  )
}

export default Container
