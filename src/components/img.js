import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

// https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/#fixed
// https://www.gatsbyjs.org/docs/gatsby-image/
// https://medium.com/@kyle.robert.gill/ridiculously-easy-image-optimization-with-gatsby-js-59d48e15db6e

const ImgC = ({ file }) => {
  //www.gatsbyjs.org/docs/static-query/
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "salar-de-uyuni" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      style={{
        position: 'absolute',
        zIndex: -1,
      }}
    />
  );
};

export default ImgC;
