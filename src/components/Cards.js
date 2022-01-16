import React, { useState } from "react"
import { Grid, Box, Paragraph, Heading, Image } from "theme-ui"
import jsx from "theme-ui"

const Rounded = (props) => {

  return(
    <Box
      sx={{
        ...props.sx,
        borderRadius: '20px',
        backgroundColor: 'primary'
      }}
    >
      {props.children}
    </Box>
  )
}

export { Rounded }