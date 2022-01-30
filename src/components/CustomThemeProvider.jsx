import React from "react"
import {ThemeProvider} from "theme-ui"
import CustomCodeBlock from "./CodeBlock"

const MyCode = props => (<CustomCodeBlock {...props} />)

const components = {
  code: MyCode,
}

const CustomThemeProvider = (props) => {
  return (
    <ThemeProvider
      theme={{}}
      components={components}
    >
      {props.children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider