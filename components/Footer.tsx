import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import styled from "styled-components";
import defaults from "@/config";

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ className }) => {
  const { userName, twitterUserName, author } = defaults;
  return (
    <footer className={className}>
      <div className="footer">
        <AiOutlineCopyright /> 2020-present{" "}
        <a href={"https://twitter.com/" + twitterUserName || userName}>
          {author}
        </a>
        .All Rights Reserved.
      </div>
    </footer>
  );
};

export default styled(Footer)`
  width: 100%;
  position: absolute;
  bottom: 0;
  font-size: 0.9em;

  .footer {
    text-align: center;
    padding: 0.5em 0;
    font-size: 0.9em;
    align-items: center;
    svg {
      margin-bottom: -0.1rem;
    }
    a {
      font-size: 1em;
      font-weight: 400;
    }
  }
`;
