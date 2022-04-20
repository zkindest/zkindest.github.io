import React from "react";
import styled from "styled-components";
import MoonIcon from "../public/static/moon.svg";
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import SunIcon from "../public/static/sun.svg";
import { ThemeContext } from "@/lib/ThemeContext";
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const Toggle: React.FC = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);
  const isLight = colorMode === "light";

  return (
    <ToggleContainer
      className="toggle_container"
      lightTheme={isLight}
      onClick={() => {
        isLight ? setColorMode("dark") : setColorMode("light");
      }}
      aria-label="Toggle theme"
    >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default Toggle;

const ToggleContainer = styled.button<{ lightTheme: boolean }>`
  border: 2px solid var(--clr-links);
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: inherit;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  width: 4rem;
  height: 2rem;
  background: var(--clr-toggler-bg);
  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    /* // sun icon */
    &:first-child {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(0)" : "translateY(100px)"};
    }

    /* // moon icon */
    &:nth-child(2) {
      transform: ${({ lightTheme }) =>
        lightTheme ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;
