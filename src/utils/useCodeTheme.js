import React, { useLayoutEffect, useState, useEffect } from 'react';
import dark from 'prism-react-renderer/themes/oceanicNext';
import light from 'prism-react-renderer/themes/github';

const THEME_MAP = {
  light,
  dark,
};

export const useColorSchema = () => {
  const [theme, changeTheme] = useState('light');
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function'
    ) {
      const darkMatcher = window.matchMedia('(prefers-color-scheme: dark)');
      const switchTheme = () => {
        changeTheme(darkMatcher.matches ? 'dark' : 'light');
      };
      darkMatcher.addListener(switchTheme);
      switchTheme();
      return () => darkMatcher.removeListener(switchTheme);
    }
  }, []);
  return theme;
};

export const useBodyClass = () => {
  const [theme, changeTheme] = useState(null);
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      typeof window.MutationObserver === 'function'
    ) {
      const { body } = window.document;
      const observer = new window.MutationObserver(function () {
        const className = body.getAttribute('class');
        if (className) {
          if (className.includes('dark')) {
            changeTheme('dark');
          } else if (className.includes('light')) {
            changeTheme('light');
          }
        } else {
          changeTheme(null);
        }
      });
      observer.observe(body, {
        attributes: true,
      });
      return () => observer.disconnect;
    }
  }, []);
  return theme;
};

const useTheme = () => {
  const [theme, changeTheme] = React.useState(light);
  const cssTheme = useColorSchema();
  const classTheme = useBodyClass();

  useLayoutEffect(() => {
    console.log(cssTheme, classTheme);
    changeTheme(() => {
      if (classTheme) return THEME_MAP[classTheme];
      return THEME_MAP[cssTheme];
    });
  }, [cssTheme, classTheme]);

  return theme;
};

export default useTheme;
