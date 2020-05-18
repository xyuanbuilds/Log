import React from 'react';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import Code from '@/components/Code';

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    return props ? <Code {...props} /> : <pre {...preProps} />;
  },
  Link,
};

export const wrapRootElement = (props) => {
  // console.log(props);
  const { element } = props;
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
