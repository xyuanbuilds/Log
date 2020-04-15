import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

// data: pageQuery相关，pageContext: createPage({ context }) 相关
const Page = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <MDXProvider>
        <MDXRenderer>{pageContext.content}</MDXRenderer>
      </MDXProvider>
      <ul>
        <li>
          <Link
            to={pageContext.next ? pageContext.next.node.fields.slug : null}
          >
            下一个
          </Link>
        </li>
        <li>
          <Link
            to={
              pageContext.previous
                ? pageContext.previous.node.fields.slug
                : null
            }
          >
            上一个
          </Link>
        </li>
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
