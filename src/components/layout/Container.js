import React from "react"
import { Container as Theme_Container } from 'theme-ui'

const Container = ( props ) => {
  return (
    <Theme_Container sx={{
      maxWidth: ["100%", "540px", "720px", "960px",	"1140px",	"1320px"]
    }}>
      { props.children }
    </Theme_Container>
  )
}

export default Container