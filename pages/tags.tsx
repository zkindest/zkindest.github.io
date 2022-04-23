import Link from 'next/link';
import SEO from '@/components/SEO';
import mdxUtil from '@/lib/mdx-util';
import { GetStaticProps } from 'next';
import React from 'react';
import styled from 'styled-components';

type TagsProps = {
  className?: string;
  categories: string[];
};

const Tags: React.FC<TagsProps> = ({ className, categories }) => {
  return (
    <React.Fragment>
      <SEO title="All Tags" />
      <section className={className}>
        <h2>Tags</h2>
        <ul>
          {categories.map((category, index) => {
            return (
              <li key={index}>
                <Link href={`/tag/${category.toLowerCase()}`}>
                  <a>#{category}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const categories = await mdxUtil.getTags();
  return {
    props: {
      categories,
    },
  };
};
export default styled(Tags)`
  width: 100%;
  transition: var(--main-transition);
  h2 {
    text-align: center;
  }
  ul {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    li {
      display: inline-block;
      padding: 0 0.3rem;
    }
  }
`;
