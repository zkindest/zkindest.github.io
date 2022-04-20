import React from "react";
import ActiveLink from "@/components/ActiveLink";
import Toggle from "@/components/Toggle";

const Links: React.FC = () => {
  return (
    <React.Fragment>
      <li>
        <ActiveLink href="/about" activeClassName="active">
          <a>/about</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/projects" activeClassName="active">
          <a>/projects</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/articles/1" activeClassName="active">
          <a>/articles</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/tags" activeClassName="active">
          <a>/tags</a>
        </ActiveLink>
      </li>
      <li>
        <Toggle />
      </li>
    </React.Fragment>
  );
};

export default Links;
