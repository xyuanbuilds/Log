import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      {/* <img
        // fixed={data.file.childImageSharp.fixed}
        style={{
          position: 'absolute',
          zIndex: -1,
        }}
        src="salar-de-uyuni.jpeg"
        // sizes={data.file.childImageSharp.fixed}
      /> */}
      <ul>
        {data.allMdx.edges.map(({ node: page }) => {
          const { frontmatter, fields, id } = page;
          return (
            <li key={id}>
              <Link to={fields.slug}>{frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/">back</Link>
    </div>
  );
};

// export const pageQuery = graphql`

// `;

export default Index;
