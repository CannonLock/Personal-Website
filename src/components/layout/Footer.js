import React from "react"
import { Link } from "@theme-ui/components"
import { Heading } from 'theme-ui'
import { Box, Flex, Text } from "theme-ui"

const ContactLink = ( props ) => {
  return (
    <Text
      sx={{
        textAlign:"center",
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
  )
}

const Footer = ( props ) => {

  return (
    <Flex
      sx = {{
        borderTopWidth: "2px",
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderStyle: "solid",
        borderColor: "highlight",
        pt: 2,
        mt: "auto",
        mr: 2,
        ml: 2,
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Heading
        sx={{
          fontSize:[2,3],
          color:'primary',
          textAlign:"center"
        }}
      >
        Contact Information
      </Heading>
      <ContactLink 
        contact="Email" 
        contactText="lockannon@gmail.com" 
        contactLink="mailto:lockannon@gmail.com"
      />
      <ContactLink 
        contact="Github" 
        contactText="CannonLock" 
        contactLink="https://github.com/CannonLock?tab=repositories"
      />
      <ContactLink 
        contact="LinkedIn" 
        contactText="cannonlock" 
        contactLink="linkedin.com/in/cannonlock"
      />
    </Flex>
  )
  
}

export default Footer;