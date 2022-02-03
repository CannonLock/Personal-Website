import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {Treemap, ResponsiveContainer, Tooltip, Rectangle } from "recharts"
import { Box, Flex } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui"
import { mix } from '@theme-ui/color'
import { Rounded} from "./Cards"

const data_to_heirarchy = async (data) => {

  let tree = {}
  data.github.user.repositories.edges.forEach((edge) => {
    let node = edge.node

    if(node.defaultBranchRef != null && node.defaultBranchRef.target.history.totalCount > 0){

      if(!(node.owner.login in tree)){
        tree[node.owner.login] = []
      }

      tree[node.owner.login].push({name: node.name, size: node.defaultBranchRef.target.history.totalCount})
    }
  })

  let heirarchy = []
  for (const [key, value] of Object.entries(tree)) {
    heirarchy.push({
      name: key,
      children: value
    })
  }

  return heirarchy
}

const CustomTooltip = (props) => {
  console.log(props)
  if (props.active && props.payload && props.payload.length) {
    return (
      <Rounded sx={{ backgroundColor: "muted", zIndex: "100000"}} className="custom-tooltip">
        <p className="intro">IK This is Broken</p>
        <p className="desc">I wanted to push becuase I am happy it is this far.</p>
      </Rounded>
    );
  }

  return null;
};

const CustomizedContent = (props) => {
  const { root, depth, x, y, width, height, index, colors, name, value } = props;
  let color = mix('muted',"gray",  (index / root.children.length))(theme)

  return (
    <g>
      <Rectangle
        radius={"5px"}
        onMouseEnter={() => console.log("fart")}
        x={x}
        y={y}
        type={"flat"}
        width={width}
        height={height}
        style={{
          fill:
            depth < 2
              ? color
              : "#ffffff00",
          stroke: "#fff",
          strokeWidth: 2 / (depth + 1e-10),
          strokeOpacity: 1 / (depth + 1e-10)
        }}
      />
      {depth === 1 ? (
        <text
          x={x + width / 2}
          y={y + height / 2 + 7}
          textAnchor="middle"
          fill="#fff"
          fontSize={14}
        >
          {name}
        </text>
      ) : null}
    </g>
  );
};

const GithubEventList = (props) => {

  const data = useStaticQuery(graphql`
    {
    github {
      user(login: "CannonLock") {
        id
        repositories(orderBy: {field: UPDATED_AT, direction: DESC}, last: 100) {
          edges {
            node {
              defaultBranchRef {
                target {
                  ... on GitHub_Commit {
                    history(author: {id: "MDQ6VXNlcjQ5MDMyMjY1"}) {
                      totalCount
                    }
                  }
                }
                name
              }
              isFork
              name
              owner {
                login
                avatarUrl(size: 100)
              }
              url
            }
          }
        }
      }
    }
  }
  `)

  const [heirarchy, setHeirarchy] = useState(false)

  useEffect(() => {
    const wrapper = async () => {
      let heirarchy = await data_to_heirarchy(data)

      setHeirarchy(heirarchy)
    }

    wrapper()
  }, [])

  if(!heirarchy){return null}

  return(
    <Box sx={{position:'relative', height:"100%", width:"100%", pl:4, borderRadius: "20px"}}>
      <ResponsiveContainer>
        <Treemap
          data={heirarchy}
          dataKey="size"
          height={500}
          width={500}
          ratio={4 / 3}
          stroke="#fff"
          content={<CustomizedContent />}
        >
          <Tooltip content={<CustomTooltip />} allowEscapeViewBox={{ x: true, y: true }} offset={-200}/>
        </Treemap>
      </ResponsiveContainer>
    </Box>

  )
}



export default GithubEventList