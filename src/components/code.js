import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Highlight, { defaultProps } from 'prism-react-renderer';
import useTheme from '@/utils/useCodeTheme';
import './Code.css';

// import every component that needs to be available in Code blocks and add it to the scope
import Button from './button';

const Code = ({ codeString, language, ...props }) => {
  const theme = useTheme();

  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} scope={{ Button }} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <>
            <pre className={`code ${className}`} style={style}>
              <div className="mac">
                <span></span>
                <span></span>
                <span></span>
              </div>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </>
        )}
      </Highlight>
    );
  }
};

export default Code;
