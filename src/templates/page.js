import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// data: pageQuery相关，pageContext: createPage({ context }) 相关
const Page = ({ pageContext }) => {
  const { next, previous } = pageContext;
  console.log(pageContext);
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <MDXProvider>
        <MDXRenderer>{pageContext.content}</MDXRenderer>
      </MDXProvider>
      <ul>
        {previous && (
          <li>
            <Link to={previous.node.fields.slug}>
              上一个: {previous.node.frontmatter.title}
            </Link>
          </li>
        )}
        {next && (
          <li>
            <Link to={next.node.fields.slug}>
              下一个: {next.node.frontmatter.title}
            </Link>
          </li>
        )}
      </ul>
    </Layout>
  );
};

// export const pageQuery = graphql`
//   query BlogPostQuery($id: String) {
//     mdx(id: { eq: $id }) {
//       id
//       body
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

export default Page;
