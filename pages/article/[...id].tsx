import SEO from "@/components/SEO";
import mdxUtil from "@/lib/mdx-util";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import styled from "styled-components";
import defaults from "@/config";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useEffect } from "react";

interface PostProps {
  resourceId: string;
  frontMatter: FrontMatter;
}

const Post: React.FC<PostProps> = ({ resourceId, frontMatter }) => {
  const { title, description, image, date, time_to_read } = frontMatter;
  const MDX = dynamic(() => import(`../../posts/${resourceId}.mdx`), {
    loading: () => <p style={{ textAlign: "center" }}>Loading...</p>,
  });
  useEffect(function addUtterance() {
    const scriptEl = document.createElement("script");
    const postWrapperEl = document.querySelector(".post__wrapper");

    scriptEl.setAttribute("src", "https://utteranc.es/client.js");
    scriptEl.setAttribute("crossorigin", "anonymous");
    scriptEl.setAttribute("async", "true");
    scriptEl.setAttribute(
      "repo",
      `${defaults.gitUserName}/${defaults.gitRepoName}`
    );
    scriptEl.setAttribute("issue-term", "title");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("branch", "main");

    postWrapperEl && postWrapperEl.appendChild(scriptEl);
  }, []);
  return (
    <React.Fragment>
      <ErrorBoundary>
        <SEO
          title={title}
          description={description}
          image={image}
          path={process.env.BACKEND_URL + `article/${resourceId}`}
          preconnectGitApi={true}
        />
        <Wrapper className="post__wrapper">
          <div>
            <h1>{title}</h1>
            <span className="post__info">
              <AiOutlineClockCircle />
              {time_to_read ? `${time_to_read} read` : null}
              <MdDateRange />
              {date}
            </span>
            <hr />
          </div>
          <MDX></MDX>
          <div className="shareOnTwitter">
            <em>Share Article:</em>&nbsp;
            <a
              href={encodeURI(
                `https://twitter.com/share?url=${defaults.baseUrl
                }/article/${resourceId}&text=${title}&via=${defaults.twitterUserName || defaults.userName
                }`
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </Wrapper>
      </ErrorBoundary>
    </React.Fragment>
  );
};
const Wrapper = styled.article`
  font-size: 1rem;
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
  .shareOnTwitter {
    display: flex;
    justify-content: flex-end;
    margin: 1em 0;
    padding: 0.5em;
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
