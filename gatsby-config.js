module.exports = {
  plugins: [
    /* content文件夹内md(x)作为blogs资源获取，并生成页面 */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/content/`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-page-creator',
    //   options: {
    //     path: `${__dirname}/content`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          // blogs: require.resolve('./src/templates/page.js'), // 资源blogs使用的模板
          // default: require.resolve('./src/components/default-page-layout.js'),
        },
      },
    },
    /* content作为blogs资源获取，并生成页面 */
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      },
    },
    /* 图片处理 */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Meditation`,
    //     short_name: `M`,
    //     start_url: `/`,
    //     icon: `./src/assets/icons/index.png`,
    //   },
    // },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          '@': require('path').resolve(__dirname, 'src'),
        },
      },
    },
  ],
};
