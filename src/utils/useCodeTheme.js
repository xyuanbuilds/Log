import React, { useLayoutEffect, useState, useEffect } from 'react';
import dark from 'prism-react-renderer/themes/oceanicNext';

// light theme https://github.com/atom/one-light-syntax
// dark Theme https://github.com/atom/one-dark-syntax
const THEME_MAP = {
  light: {
    plain: {
      color: 'hsl(230, 8%, 24%)',
      backgroundColor: 'hsl(230, 1%, 98%)',
    },
    styles: [
      {
        types: ['prolog'],
        style: {
          color: 'rgb(0, 0, 128)',
        },
      },
      {
        types: ['comment'],
        style: {
          color: 'hsl(230, 4%, 64%)',
        },
      },
      {
        types: ['builtin', 'changed', 'keyword'],
        style: {
          color: 'hsl(301, 63%, 40%)',
        },
      },
      {
        types: ['number', 'inserted'],
        style: {
          color: 'hsl(230, 8%, 15%)',
        },
      },
      {
        types: ['constant'],
        style: {
          color: 'hsl(41, 99%, 30%)',
        },
      },
      {
        types: ['attr-name', 'variable'],
        style: {
          color: 'hsl(5, 74%, 59%);',
        },
      },
      {
        types: ['deleted', 'string', 'attr-value'],
        style: {
          color: 'hsl(119, 34%, 47%)',
        },
      },
      {
        types: ['selector'],
        style: {
          color: 'hsl(301, 63%, 40%)',
        },
      },
      {
        types: ['tag'],
        style: {
          color: 'rgb(78, 201, 176)',
        },
      },
      {
        types: ['tag'],
        languages: ['markup'],
        style: {
          color: 'hsl(221, 87%, 60%)',
        },
      },
      {
        types: ['punctuation', 'operator'],
        style: {
          color: 'hsl(198, 99%, 37%)',
        },
      },
      {
        types: ['punctuation'],
        languages: ['markup'],
        style: {
          color: 'hsl(5, 74%, 59%);',
        },
      },
      {
        types: ['function'],
        style: {
          color: 'hsl(221, 87%, 60%)',
        },
      },
      {
        types: ['class-name'],
        style: {
          color: 'hsl(41, 99%, 38%)',
        },
      },
      {
        types: ['char'],
        style: {
          color: 'hsl(230, 12%, 24%)',
        },
      },
    ],
  },
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
  const [theme, changeTheme] = React.useState(THEME_MAP.light);
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
