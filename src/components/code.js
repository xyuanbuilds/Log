import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import useTheme from '@/utils/useCodeTheme';
import './Code.css';

const Code = ({ codeString, language }) => {
  const theme = useTheme();
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
};

export default Code;
