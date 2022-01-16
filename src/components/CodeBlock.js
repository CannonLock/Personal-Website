import React from "react";
import { CodeBlock, CopyBlock, solarizedLight } from "react-code-blocks";

// Courtesy: https://github.com/rajinwonderland/react-code-blocks/blob/master/MDX.md

const CustomCodeBlock = (props) => {

  // if any language selected or python by default
  const { className, copy, children } = props;

  const language = className.match(/(?<=language-)(\w.*?)\b/) != null
    ? className.match(/(?<=language-)(\w.*?)\b/)[0]
    : "python";

  return copy ? (
    <CopyBlock
      text={children}
      language={language}
      theme={solarizedLight}
      wrapLines
      codeBlock
    />
  ) : (
    <CodeBlock text={children} language={language} theme={solarizedLight} wrapLines />
  );
};

export default CustomCodeBlock;