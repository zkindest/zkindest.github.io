import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";
import styled from "styled-components";
import rangeParser from "parse-numeric-range";

const calculateLinesToHighlight = (meta: string) => {
  const RE = /{([\d,-]+)}/;
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)![1];
    const lineNumbers = rangeParser(strlineNumbers);
    return (index: any) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

//USE default JS TEMPLATE
const defaultClassName = "js";

const PrismWrapper: React.FC<any> = (props) => {
  const { className, metastring } = props.children.props;

  const language = className ? className.split("-")[1] : defaultClassName;
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Container>
            <Pre className={className} style={style}>
              {/* TO DO */}
              {/* <div className="code-tab">{language}</div> */}
              {tokens.map((line, i) => {
                const lineProps = getLineProps({
                  line,
                  key: i,
                });
                if (shouldHighlightLine(i)) {
                  lineProps.className = `${lineProps.className} highlight-line`;
                }
                return (
                  <Line {...lineProps}>
                    <LineContent>
                      {line.map((token, key) => (
                        <span
                          {...getTokenProps({
                            token,
                            key,
                          })}
                        />
                      ))}
                    </LineContent>
                  </Line>
                );
              })}
            </Pre>
          </Container>
        );
      }}
    </Highlight>
  );
};

// Styling Only
const Pre = styled.pre`
  margin: 0;
  padding: 0;
  background-color: transparent;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: "Courier New", Courier, monospace;
  line-height: 1.5;
  hyphens: none;
  word-spacing: normal;
  overflow-wrap: break-word;
  white-space: pre;
  word-break: normal;
  min-width: 100%;
  float: left;
  overflow: initial;

  .token-line {
    line-height: 1.5;
  }
  .code-tab {
    position: absolute;
    top: 0;
    right: 5%;
    color: rgb(156, 220, 254);
    font-size: 1em;
    font-weight: 700;
    transform: translateY(-100%);
    text-transform: uppercase;
    padding: 0.05rem 0.85rem 0;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    background: #1e1e1e;
  }
  .highlight-line {
    background-color: rgb(53, 59, 69);
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.3em solid #f99;
  }
`;
const Line = styled.div`
  display: table;
`;
/* const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`; */

const LineContent = styled.span`
  display: table-cell;
`;

const Container = styled.article`
  background-color: #1d1f21;
  position: relative;
  overflow: auto;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
  padding: 1.1em;
  border-radius: var(--radius);
  margin: 2em 0;
  font-size: 0.8em;
`;
export default PrismWrapper;
