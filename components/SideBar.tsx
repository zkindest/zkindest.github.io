import Links from '@/constants/links';
import React, { useState } from 'react';
import styled from 'styled-components';

const SideBar = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = (e: any) => {
    const target = e.target as HTMLElement;

    if (target.tagName === 'A' || target.tagName === 'BUTTON') {
      setChecked((checked) => !checked);
    }
  };
  return (
    <Wrapper>
      <input
        name="toggle"
        type="checkbox"
        id="toggle"
        onChange={() => {
          setChecked((checked) => !checked);
        }}
      />
      <div className={`sidebar__background ${checked ? 'expand' : 'collapse'}`}>
        <ul id="sidebar__menu" onClick={handleClick}>
          <Links></Links>
        </ul>
      </div>
      <label htmlFor="toggle" className={`sidebar__btn ${checked && 'close'}`}>
        <div className="sidebar__btn--holder">
          <span></span>
          <span></span>
        </div>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  @media all and (min-width: 649px) {
    display: none;
    visibility: hidden;
  }
  position: fixed;
  right: 0;
  z-index: 999;
  .sidebar__btn {
    display: flex;
    width: 40px;
    height: 40px;
    position: relative;
    cursor: pointer;
    &--holder {
      position: relative;
      top: 10px;
      left: 10px;

      span {
        position: absolute;
        width: 20px;
        height: 2px;
        backdrop-filter: invert(200%);
        /* filter: invert(200%); */
        background-color: var(--clr-text);
        transition: transform 0.4s ease;
      }
      span:last-of-type {
        top: 5px;
      }
    }
  }

  .sidebar__background {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    min-height: 100vh;
    background: var(--clr-bg);
    transition: transform 0.3s ease-out;

    ul {
      padding: 1em;
      position: absolute;
      top: 15px;
      width: 100%;
      color: var(--clr-show-text);
      list-style: none;

      li {
        padding: 1em 0;
        margin: 0;
        a {
          font-size: 1.5rem;
          font-weight: 700;
        }
      }
    }
  }
  input[type='checkbox'] {
    display: none;
  }

  /* side bar button animation */
  .close span:last-child {
    top: 2px;
    transform: rotate(45deg);
  }
  .close span:first-child {
    top: 2px;
    transform: rotate(135deg);
  }

  //side bar background animation
  .expand {
    transform: none;
  }
  .collapse {
    transform: translateY(-100%) translateZ(0);
  }
`;

export default SideBar;
