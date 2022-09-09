import React from 'react';
import styled from 'styled-components';
import Links from '@/constants/links';
import SideBar from '@/components/SideBar';
import Link from 'next/link';

export type HeaderProps = {
  siteTitle: string;
  subtitle?: string;
};
const defaultProps = {
  siteTitle: `Afroz Mohammad`,
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Wrapper>
      <div className="header">
        <nav className="header__nav">
          <Link href="/">
            <a className="header__nav--logo">
              <span style={{ fontWeight: 600 }}>{props.siteTitle} </span>
            </a>
          </Link>
          {/* fixed positioning see component */}
          <SideBar />
          {/* Flex positioning see below */}
          <ul className="header__nav--links">
            <Links></Links>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};

Header.defaultProps = defaultProps;

export const Wrapper = styled.header`
  .header {
    padding: 2rem 0;
    &__nav {
      display: flex;
      justify-content: space-between;
      &--logo {
        padding-right: 1rem;
        font-size: 1.5rem;
        text-decoration: none;
        font-style: italic;
        color: var(--clr-textcolor);
        &:active {
          color: #000;
        }
        &:hover,
        &:active:hover {
          color: rgb(74, 85, 104);
        }
      }
      &--links {
        list-style: none;
        padding: 0;
        margin: 0;
        @media all and (max-width: 648px) {
          display: none;
        }
        display: flex;
        justify-content: space-between;
        align-items: center;

        //awesome
        li + li {
          margin-left: 24px;
        }
      }
    }
  }
`;
export default Header;
