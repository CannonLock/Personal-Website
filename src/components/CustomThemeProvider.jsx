const React = require("react")
const { ThemeProvider } = require("theme-ui")
const CustomCodeBlock = require("../components/CodeBlock").default

const MyCode = props => (<CustomCodeBlock {...props} />)

const components = {
  code: MyCode,
}

const CustomThemeProvider = (props) => {
  return (
    <ThemeProvider
      components={components}
    >
      {props.children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider