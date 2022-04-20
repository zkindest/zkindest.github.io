import ErrorBoundary from "@/components/ErrorBoundary";
import Posts from "@/components/Posts";
import SEO from "@/components/SEO";
import { numPostsOnHome } from "@/constants/variables";
import mdxUtil from "@/lib/mdx-util";
import { MDXItem } from "@/lib/types";
import { GetStaticProps } from "next";
import React from "react";

type Props = {
  posts: MDXItem[];
};

const IndexPage: React.FC<Props> = ({ posts }) => {
  return (
    <React.Fragment>
      <SEO title="Afz" />
      <ErrorBoundary>
        <Posts posts={posts} title="Blog" />
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
