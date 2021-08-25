import React from "react"
import { Link } from "@theme-ui/components"
import { Heading } from 'theme-ui'
import { Box, Flex, Text, Grid, Image } from "theme-ui"
import LinkedIn from "../../static/icons/linkedin.svg"
import Email from "../../static/icons/envelope-fill.svg"
import Github from "../../static/icons/github.svg"

const ContactLink = ( props ) => {
  return (
    <Flex sx={{px: 2, my: "auto", mx:["auto", "auto", 0]}}>
      <Link href={props.contactLink} sx={{my:"auto"}}>
        <Image
          src={props.src}
          sx={{
            px: 2,
            height: "20px"
          }}
        />
      </Link>
      <Text
        sx={{
          textAlign:"center",
          my: "auto",
          fontSize: [1, 2]
        }}
      >
        {props.contact + ": "}
        <Link
          sx={{color: 'text', textDecoration: 'underline'}}
          href={props.contactLink}
        >
          {props.contactText}
        </Link>
      </Text>
    </Flex>
  )
}

const Footer = ( props ) => {

  return (
    <Flex
      sx = {{
        mt: "auto",
        px: 3,
        py: 3,
        boxShadow: "0px 0px 5px #8080803d",
        flexDirection: "column"
      }}
    >
      <Heading
        sx={{
          fontSize:[3,4],
          mb:3,
          textAlign:"center"
        }}
      >
        Contact Information
      </Heading>
      <Flex
        sx={{
          justifyContent:"center",
          flexDirection:["column", "column", "row"]
        }}
      >
        <ContactLink
          contact="Email"
          contactText="lockannon@gmail.com"
          contactLink="mailto:lockannon@gmail.com"
          src={Email}
        />
        <ContactLink
          contact="Github"
          contactText="CannonLock"
          contactLink="https://github.com/CannonLock?tab=repositories"
          src={Github}
        />
        <ContactLink
          contact="LinkedIn"
          contactText="cannonlock"
          contactLink="https://linkedin.com/in/cannonlock"
          src={LinkedIn}
        />
      </Flex>

    </Flex>
  )
  
}

export default Footer;