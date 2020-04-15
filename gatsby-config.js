module.exports = {
  plugins: [
    /* content文件夹内md(x)作为blogs资源获取，并生成页面 */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    /* content作为blogs资源获取，并生成页面 */
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
  ],
};
