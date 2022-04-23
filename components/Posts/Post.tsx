import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Tagger from '../Tagger';
import { MDXItem } from '@/lib/types';

const Post: React.FC<MDXItem> = ({ frontMatter, resourceId }) => {
  const { title, categories, description } = frontMatter;
  return (
    <Wrapper>
      <div className="post">
        <h3>
          <Link href={`/article/${resourceId}`}>
            <a className="post__header">{title}</a>
          </Link>
        </h3>
        <Tagger categories={categories || []} />
        <p className="post__excerpt">
          {description}
          <span style={{ display: 'inline-block' }}>
            <Link href={`/article/${resourceId}`}>
              <a>Continue Reading&rarr;</a>
            </Link>
          </span>
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  font-size: 1rem;
  position: relative;
  clear: both;
  .post {
    &__excerpt {
      color: var(--clr-show-text);
      word-break: break-word;
      margin: 0;
    }
    &__header {
      padding: 0.2em;
      padding-left: 0;
    }

    h3 {
      font-weight: 600;
      margin: 0.2rem 0;
    }
  }
`;

export default Post;
