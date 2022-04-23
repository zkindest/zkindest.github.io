import React, { useState, useEffect, createContext } from 'react';
import { COLOR_MODE_KEY } from '../constants/theme';

type ThemeProps = {
  colorMode: string;
  setColorMode: (newValue: string) => void;
};

export const ThemeContext = createContext<ThemeProps>({} as ThemeProps);
export const ThemeProvider = ({ children }: any) => {
  const [colorMode, rawSetColorMode] = useState('');
  useEffect(() => {
    const body = window.document.body;
    rawSetColorMode(body.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  const contextValue = React.useMemo(() => {
    function setColorMode(newValue: string) {
      const body = window.document.body;

      // 1. Update React color-mode state
      rawSetColorMode(newValue);

      // 2. Update localStorage
      localStorage.setItem(COLOR_MODE_KEY, newValue);

      // 3. Update each color
      if (newValue == 'dark') {
        body.classList.remove('light');
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
        body.classList.add('light');
      }
    }
    return {
      colorMode,
      setColorMode,
    };
  }, [colorMode, rawSetColorMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
