import React from "react";
import styled from "styled-components";
import ActiveLink from "@/components/ActiveLink";

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
        <ActiveLink href={prevPage}>
          <a className="navigator__prev">&lArr; Newer</a>
        </ActiveLink>
      )}
      {!isLast && (
        <ActiveLink href={nextPage}>
          <a className="navigator__next">Previous &rArr;</a>
        </ActiveLink>
      )}
    </div>
  );
};

export default styled(Navigator)`
  text-align: center;
  margin-top: 2em;

  .navigator {
    &__prev,
    &__next {
      font-weight: 400;
      margin: 0.5rem;
      padding: 1rem 0.5rem;
    }
    &__link {
      margin: 0 0.5rem;
      padding: 1rem 1.5rem;
      border-radius: 6px;
    }
    &__active {
      background-color: #111;
      color: var(--clr-green-light);
    }
  }
`;
