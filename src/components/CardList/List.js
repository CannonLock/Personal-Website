import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Flex, Box } from 'theme-ui'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-plugin-image"
import { jsx } from "theme-ui"

import ListCard from "./ListCard"
import { keyMaker } from "../../functions/general"

const List = ( props ) => {

  const data = props.data;
  var key = 0;

  return(
    <>
      {
        data.map((cardInfo) => {
          return(
            <ListCard
              key={ key = keyMaker(key) }
              title={cardInfo.node.title}
              image={cardInfo.node.image.childImageSharp.fluid}
              alt={cardInfo.node.alt}
              description={cardInfo.node.description}
              tags={cardInfo.node.tags}
            />
          )
          
        })
      }
    </>
  )
}

export default List;