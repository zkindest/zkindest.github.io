import React from 'react'
import styled from 'styled-components';

const Recommend= ({ links,className }) => {

  return (
    <div className={className}>
      <h3>If you like this post,you might also like:</h3>
      <ul>
      {
        links.map(({ slug, name }) => {
          return <li key={slug}><a href={slug} >{name}</a></li>
        })
      }
      </ul>
    </div>
  )
}

export default styled(Recommend)`
  li {
    list-style: none;
    
      counter-increment: count_recommend 1;
      &::before {

        content: counters(count_recommend, "decimal-leading-zero") ". ";
      }

  }

`;
