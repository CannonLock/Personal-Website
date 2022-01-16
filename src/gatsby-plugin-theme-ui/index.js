/** @jsx jsx */
import { swiss as light, deep as dark } from '@theme-ui/presets'

// Okay
const theme = {
  breakpoints: ['576px', '768px', '992px', '1200px', '1400px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "'Montserrat', sans-serif;",
    heading: "'Titillium Web', sans-serif;"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  useColorSchemeMediaQuery : true,
  colors : {
    ...light.colors,
    modes : {
      light : {
        ...light.colors
      },
      dark : {
        ...light.colors
      }
    }
  },
  fontSize : dark.fontSizes,
  fontWeights : dark.fontWeights,
  lineHeights : dark.lineHeights,
  prism : dark.prism,
  styles : dark.styles,
  textStyles : dark.textStyles,
  container: {
    pl: 2,
    pr: 2,
  },
  text: {
    block: {
      variant: 'paragraph',
      my: 3,
      textAlign: 'justify',
      textAlignLast: 'start',
      textJustify: 'auto'
    },
  },
  links: {
    sub_nav: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }
}

export default theme;