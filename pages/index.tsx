import ErrorBoundary from '@/components/ErrorBoundary';
import Posts from '@/components/Posts';
import SEO from '@/components/SEO';
import { numPostsOnHome } from '@/constants/variables';
import mdxUtil from '@/lib/mdx-util';
import { MDXItem } from '@/lib/types';
import { GetStaticProps } from 'next';
import React from 'react';
import styled from 'styled-components';

type Props = {
  posts: MDXItem[];
};

const IndexPage: React.FC<Props> = ({ posts }) => {
  return (
    <React.Fragment>
      <ErrorBoundary>
        <SEO title="Afz" />
        <BlogSection>
          <h1>Blog</h1>
          <Posts posts={posts} />
        </BlogSection>
      </ErrorBoundary>
    </React.Fragment>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const posts = (await mdxUtil.getPosts()).slice(0, numPostsOnHome);

  return {
    props: {
      posts,
    },
  };
};
export default IndexPage;

const BlogSection = styled.section`
  h1 {
    color: var(--clr-show-text);
    text-transform: uppercase;
    text-align: left;
    margin: 2rem 0;
  }
`;
