import Link from "next/link";
import SEO from "@/components/SEO";
import mdxUtil from "@/lib/mdx-util";
import { MDXItem } from "@/lib/types";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";

type GroupedProps = {
  className: string;
  items: MDXItem[];
  category: string;
};

const Tagged: React.FC<GroupedProps> = ({ className, items, category }) => {
  return (
    <React.Fragment>
      <SEO title={`${category} stuff`} />
      <section className={className}>
        <h2>{category}</h2>
        <ul className="tagged">
          {items.map(({ resourceId, frontMatter }) => {
            return (
              <li key={resourceId} className="tagged__article">
                <Link href={`/article/${resourceId}`}>
                  <a>{frontMatter.title}</a>
                </Link>
                <span className="tagged__article--date">
                  {frontMatter.date}
                </span>
              </li>
            );
          })}
        </ul>
      </section>
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const grouped = await mdxUtil.getPostsByCategories();
  const paths = Object.keys(grouped).map((category) => {
    return {
      params: { id: category.toLowerCase() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const grouped = await mdxUtil.getPostsByCategories();

  const rawString = params!.id as string;
  const category = rawString[0].toUpperCase() + rawString.substring(1);
  return {
    props: {
      category,
      items: grouped[rawString],
    },
  };
};

export default styled(Tagged)`
  margin: 0 auto;
  width: max-content;
  display: flex;
  flex-direction: column;
  transition: var(--main-transition);

  h2 {
    text-align: center;
  }

  .tagged {
    padding: 0;
    margin: 0;
    text-align: left;
    display: table;
    &__article {
      display: table-row;
      list-style: none;
      counter-increment: count_post 1;
      
      &::before {
        content: counters(count_post, "decimal-leading-zero") ". ";
      }
      a {
        display: table-cell;
        padding: 0em 2em 0 0.5em;
      }

      &--date {
        display: table-cell;
      }
    }
  }
`;
