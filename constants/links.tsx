import React from "react";
import ActiveLink from "@/components/ActiveLink";
import Toggle from "@/components/Toggle";

const Links: React.FC = () => {
  return (
    <React.Fragment>
      <li>
        <ActiveLink href="/about" >
          /about
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/articles/1" >
          /articles
        </ActiveLink>
      </li>
      <li>
        <ActiveLink href="/tags" >
          /tags
        </ActiveLink>
      </li>
      <li>
        <Toggle />
      </li>
    </React.Fragment>
  );
};

export default Links;
