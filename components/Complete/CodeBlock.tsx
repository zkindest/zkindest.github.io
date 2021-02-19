import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDarkTheme from "prism-react-renderer/themes/vsDark";
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
      theme={vsDarkTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Container>
            <PreContainer>
              <Pre className={className} style={style}>
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
            </PreContainer>
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
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
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

const LineContent = styled.span`
  display: table-cell;
`;

const PreContainer = styled.article`
  background-color: #1d1f21;
  position: relative;
  overflow: auto;
  padding: 1.1em;
  border-radius: var(--radius);
  margin: 2em 0;
  font-size: .9em;
`;
const Container = styled.div`
  position: relative;
`
export default PrismWrapper;
