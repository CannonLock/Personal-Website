/** @jsx jsx */
import { graphql, Link as GatsbyLink, StaticQuery } from "gatsby"
import { StaticImage, getImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { Heading, jsx } from 'theme-ui'
import { Box, Button, Flex, NavLink } from 'theme-ui'

import links from "../../data/link"

const Header = () => {

  return(
    <Flex
      as="nav"
      sx={{
        mb:4,
        px:3,
        py:2,
        boxShadow: "0px 0px 5px #8080803d"
      }}
    >
      <Flex sx={{alignContent:"center"}} >
        <GatsbyLink
          to={"/"}
          sx={{display:"flex"}}
        >
          <StaticImage
            alt={"Man with Head in Hands"}
            src={"../../static/images/WebsiteFavicon.png"}
            width={50}
            height={50}
            objectFit={"scale-down"}
            placeholder={"tracedSVG"}
          />
        </GatsbyLink>
      </Flex>
      <NavLink to={"/"} p={2} as={GatsbyLink} variant="sub_nav">
        <Heading
          as={"h1"}
          sx = {{
            fontSize : 5
          }}
        >
          Cannon Lock
        </Heading>
      </NavLink>
      <NavLink to={"/about"} p={2} as={GatsbyLink} variant="sub_nav">
        <Heading as={"h3"}>About</Heading>
      </NavLink>
      <NavLink to={"/blog"} p={2} as={GatsbyLink} variant="sub_nav">
        <Heading as={"h3"}>Blog</Heading>
      </NavLink>
      <NavLink to={"/projects"} p={2} as={GatsbyLink} variant="sub_nav">
        <Heading as={"h3"}>Projects</Heading>
      </NavLink>
    </Flex>
  )
}


export default Header;
