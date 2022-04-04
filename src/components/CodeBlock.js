import React from "react";
import {Box} from "theme-ui"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from "react-code-blocks";

// Courtesy: https://github.com/rajinwonderland/react-code-blocks/blob/master/MDX.md

const PreTag = (props) => {
  return (
    <Box sx={{}}>
      {props.children}
    </Box>
  )
}

const CustomCodeBlock = (props) => {

  // if any language selected or python by default
  const { className, copy, children } = props;

  const language = className.match(/(?<=language-)(\w.*?)\b/) != null
    ? className.match(/(?<=language-)(\w.*?)\b/)[0]
    : "python";

  return copy ? (
    <SyntaxHighlighter
      PreTag={PreTag}
      language={language}
      theme={solarizedLight}
      wrapLines
      codeBlock
    >{children}</SyntaxHighlighter>
  ) : (
    <SyntaxHighlighter PreTag={PreTag} language={language} theme={solarizedLight} wrapLines >{children}</SyntaxHighlighter>
  );
};

export default CustomCodeBlock;