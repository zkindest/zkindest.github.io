import SEO from "@/components/SEO";
import mdxUtil from "@/lib/mdx-util";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import styled from "styled-components";
import defaults from "@/config";

interface PostProps {
  resourceId: string;
  frontMatter: FrontMatter;
}

const Post: React.FC<PostProps> = ({ resourceId, frontMatter }) => {
  const { title, description, image, date, time_to_read } = frontMatter;
  const MDX = dynamic(() => import(`../../posts/${resourceId}.mdx`), {
    loading: () => <p>Loading...</p>,
  });
  return (
    <React.Fragment>
      <SEO title={title} description={description} image={image} />
      <Wrapper>
        <div>
          <h1>{title}</h1>
          <span className="post__info">
            <AiOutlineClockCircle />
            {time_to_read ? `${time_to_read} read` : null}
            <MdDateRange />
            {date}
          </span>
          <div className="underline" />
        </div>
        <MDX></MDX>
        <div className="shareOnTwitter">
          <a href={encodeURI(`https://twitter.com/share?url=${defaults.baseUrl}/article/${resourceId}&text=${title}&via=${defaults.twitterUserName || defaults.userName}`)
          } target="_blank" rel="noopener noreferrer">Share Article</a>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};
const Wrapper = styled.article`
  /* width: 95vw; */
  max-width: 75ch;
  margin: 0 auto;
  .post__info {
    display: flex;
    align-items: center;
    svg:not(:first-of-type) {
      margin: 0 0.5em;
    }
    svg:first-of-type {
      margin-right: 0.5em;
    }
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await mdxUtil.getPosts();
  const paths = posts.map((post) => {
    return {
      params: { id: post.resourceId.split("/") },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resourceId = (params?.id as string[]).join("/");
  const post = await mdxUtil.getPostByResourcePath(resourceId);
  return {
    props: {
      resourceId,
      frontMatter: post.frontMatter,
    },
  };
};

export default Post;
