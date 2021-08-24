import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React, { Children, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName?: string;
}
const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  activeClassName,
  ...props
}) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child?.props?.className || "";

  let className =
    asPath == props.href || asPath == props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
