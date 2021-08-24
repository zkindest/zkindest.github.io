import React from "react";
import styled from "styled-components";
import Link from "next/link";

//pageName should be /{name};

type NavigatorProps = {
  className?: string;
  currentPage: number;
  pageName: string;
  numPages: number;
};

const Navigator: React.FC<NavigatorProps> = ({
  className,
  currentPage,
  pageName,
  numPages,
}) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `${pageName}/${currentPage - 1}`;
  const nextPage = `${pageName}/${currentPage + 1}`;
  return (
    <div className={`${className} navigator`}>
      {!isFirst && (
        <Link href={prevPage}>
          <a>&lArr; Newer</a>
        </Link>
      )}
      {!isLast && (
        <Link href={nextPage}>
          <a>Previous &rArr;</a>
        </Link>
      )}
    </div>
  );
};

export default styled(Navigator)`
  text-align: center;
  margin-top: 2em;

  a + a {
    margin-left: 0.5rem;
  }
`;
