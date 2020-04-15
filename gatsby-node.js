// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(`
//     {
//       allFile {
//         edges {
//           node {
//             id
//             body
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     throw result.errors;
//   }

//   const pages = result.data.allMdx.edges.map(({ node }) => node);

//   pages.forEach((page) => {
//     const previous = index === pages.length - 1 ? null : pages[index + 1];
//     const next = index === 0 ? null : pages[index - 1];
//     createPage({
//       // path: `/${page.name}`,
//       component: require.resolve(`${__dirname}/src/templates/page.js`),
//       context: {
//         body: page.children.body,
//         previous,
//         next,
//       },
//     });
//   });
// };

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const { internal, componentPath } = node;
  console.log(internal.type);
  if (
    internal.type === 'Mdx'
    // componentPath &&
    // componentPath.includes('/content/')
  ) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
