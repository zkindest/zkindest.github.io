import ErrorBoundary from '@/components/ErrorBoundary';
import Navigator from '@/components/Navigator';
import Post from '@/components/Posts/Post';
import SEO from '@/components/SEO';
import { postsPerPage } from '@/constants/variables';
import mdxUtil from '@/lib/mdx-util';
import { MDXItem } from '@/lib/types';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import styled from 'styled-components';

type PostListProps = {
  posts: MDXItem[];
  className: string;
  currentPage: number;
  numPages: number;
};

const PostList: React.FC<PostListProps> = ({
  posts,
  className,
  numPages,
  currentPage,
}) => {
  const pageName = '/articles';

  return (
    <React.Fragment>
      <SEO title={`Articles | Page ${currentPage}`} />
      <ErrorBoundary>
        <section className={className}>
          <h2>Articles</h2>
          <div className="articles">
            {posts.map((post, index) => {
              return <Post key={index} {...post} />;
            })}
          </div>
          <Navigator
            currentPage={currentPage}
            pageName={pageName}
            numPages={numPages}
          />
        </section>
      </ErrorBoundary>
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await mdxUtil.getPosts();
  //how many pages
  const numPages = Math.ceil(posts.length / postsPerPage);

  // numPages=5 => 0,1,2,3,4,5
  const paths = Array.from({ length: numPages }).map((_, index) => {
    return {
      params: {
        id: String(index + 1),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await mdxUtil.getPosts();
  const currentPage = parseInt(params?.id as string);

  const numPages = Math.ceil(posts.length / postsPerPage);

  //posts index starts from 0
  const postsOfCurrentPage = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return {
    props: {
      posts: postsOfCurrentPage,
      currentPage,
      numPages,
    },
  };
};

export default styled(PostList)`
  margin: 1rem 0;
  text-align: center;

  .articles {
    text-align: left;
    margin: 2rem auto 4rem;
    min-height: 42em;
  }
  .articles > * + * {
    margin-top: 2rem;
  }
`;
