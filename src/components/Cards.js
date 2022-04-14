import React, { useState } from "react"
import { Grid, Box, Paragraph, Heading, Divider } from "theme-ui"
import { Link } from "@theme-ui/components"

const Content = ({id, title, date, content, href, sx}) => {
  return(
    <Link
      id={id}
      href={href}
      to={href}
      sx={{textDecoration: "none"}}
    >
      <Rounded
        sx={{
          display: "block",
          color:"background",
          boxShadow: 'none',
          transition: "background-color .5s, box-shadow .5s",
          bg: "secondary",
          "&:hover": {
            bg: "primary",
            boxShadow: (theme) => `2px 5px 7px ${theme.colors.gray}`
          },
          ...sx
        }}
      >
        <Heading sx={{display:'flex'}}>
          {title}
        </Heading>
        <Grid columns={['1fr']} sx={{ mt: 3 }}>
          <Box>
            {date}
          </Box>
        </Grid>
        <Divider sx={{ borderColor: "text" }} />
        <Paragraph sx={{pt:3}}>
          {content}
        </Paragraph>
      </Rounded>
    </Link>
    )
}

const Rounded = (props) => {

  return(
    <Box
      sx={{
        borderRadius: '20px',
        p:3,
        bg: 'primary',
        ...props.sx,
      }}
    >
      {props.children}
    </Box>
  )
}

export { Rounded, Content }