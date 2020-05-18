import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
// import Img from 'gatsby-image';

const Index = ({ location }) => {
  console.log(location);
  const previous = location?.state?.previous;
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
      {previous && <Link to={previous}>回去</Link>}
    </div>
  );
};

export default Index;
