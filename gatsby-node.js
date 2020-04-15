const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              name
              title
            }
            fields {
              slug
            }
            body
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
    throw result.errors;
  }

  const pages = result.data.allMdx.edges;

  pages.forEach(({ node: page }, index) => {
    const previous = index === pages.length - 1 ? null : pages[index + 1];
    const next = index === 0 ? null : pages[index - 1];
    createPage({
      path: `${page.fields.slug}`,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        id: page.id,
        title: page.frontmatter.title,
        content: page.body,
        previous,
        next,
      },
    });
  });
};

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const { internal } = node;
  if (internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode }); // 根据文件夹名生成slug
    createNodeField({
      node,
      name: `slug`,
      value: `/blog${slug}`,
    });
  }
};
