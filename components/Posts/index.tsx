import React from "react";
import Link from "next/link";

import Post from "./Post";
import styled from "styled-components";
import { MDXItem } from "@/lib/types";

interface PostsProps {
  className?: string;
  posts: MDXItem[];
  title: string;
}

const Posts: React.FC<PostsProps> = ({ posts, className, title }) => {
  return (
    <section className={className}>
      <h2>{title}</h2>
      <div className="articles">
        {posts.map((post, index) => {
          return <Post key={index} {...post} />;
        })}
        <div className="articles__more">
          Check out{" "}
          <Link href="/articles/1">
            <a>Articles</a>
          </Link>{" "}
          for more...
        </div>
      </div>
    </section>
  );
};

export default styled(Posts)`
  margin: 1rem 0;
  text-align: center;

  h2 {
    color: var(--clr-show-text);
    text-transform: uppercase;
    text-align: left;
  }

  .articles {
    text-align: left;

    article + article {
      padding-top: 2rem;
    }
    &__more {
      padding: 2rem 0 0 0;
      text-align: left;
      a {
        font-weight: 400;
      }
    }
  }
`;
