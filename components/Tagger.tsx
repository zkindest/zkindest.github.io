import React from "react";
import Link from "next/link";
import styled from "styled-components";

type TaggerProps = {
  categories?: string[];
  className?: string;
};

const Tagger: React.FC<TaggerProps> = ({ categories, className }) => {
  return (
    <ul className={className}>
      {categories?.map((category, index) => {
        return (
          <li key={index}>
            <Link href={`/tag/${category.toLowerCase()}`}>
              <a >

                #{category}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default styled(Tagger)`
  font-size: 0.9rem;
  margin: 0;
  padding: 0;
  display: flex;
  /* color: var(--clr-grey); */

  li {
    margin: 0;
    padding-right: 0.7rem;
    list-style: none;
  }
`;
