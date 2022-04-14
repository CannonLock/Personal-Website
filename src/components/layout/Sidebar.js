import { Link } from "gatsby"
import { jsx } from "theme-ui"
import { Box } from "theme-ui"

import links from "../../data/link"

const NavListItem = ( props ) => {
  return (
    <li
      sx={{
        color: `background`,
        listStyleType: `none`,
        pl: 0
      }}        
    >
      <Link
        to={props.link}
        sx={{
          textDecoration: `none`,
          fontSize: 3,
          color: `background`,
        }}
      >
        {props.children}
      </Link>
    </li>
  )
}

const SideBar = ( props ) => {
  return (
    <Box
      sx={{
        bg: `secondary`,
        m: 2,
        mt: 0,
        mr:0,
        p: `2 2`,
        borderRadius:10,
        display : ['visible', 'none', 'none'],
        position: `absolute`,
        top: 0,
        right: 0,
        overflow: `hidden`,
        maxWidth: props.width,
        transition: `max-width .5s`,
        zIndex: 1000,
      }}
    >
      <ul
        sx={{
          pl: 3,
          pr: 3
        }}
      >
        {
          links.map( ( l, i )  => <NavListItem key={i.toString()} link={l['path']}>{l['name']}</NavListItem>)
        }
      </ul>
    </Box>
  )
}

export default SideBar;
