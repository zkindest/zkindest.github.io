import React from 'react';
import Link from 'next/link';

import Post from './Post';
import styled from 'styled-components';
import { MDXItem } from '@/lib/types';
import { numPostsOnHome } from '@/constants/variables';

interface PostsProps {
  className?: string;
  posts: MDXItem[];
}

const Posts: React.FC<PostsProps> = ({ posts, className = '' }) => {
  return (
    <div className={`${className} articles`}>
      {posts.map((post, index) => {
        return <Post key={index} {...post} />;
      })}
      {posts.length > numPostsOnHome && (
        <div className="articles__more">
          Check out{' '}
          <Link href="/articles/1">
            <a>Articles</a>
          </Link>{' '}
          for more...
        </div>
      )}
    </div>
  );
};

export default styled(Posts)`
  .articles {
    &__more {
      padding: 2rem 0 0 0;
      text-align: left;
      a {
        font-weight: 400;
      }
    }
  }
`;
