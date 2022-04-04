import React from "react"
import {ThemeProvider} from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/index"
import CustomCodeBlock from "./CodeBlock"

const MyCode = props => (
  <CustomCodeBlock {...props} />
)

const components = {
  code: MyCode,
}

const CustomThemeProvider = (props) => {
  return (
    <ThemeProvider
      theme={theme}
      components={components}
    >
      {props.children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider