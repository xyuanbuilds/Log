module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"/Users/xuyuan/github/blog/src/utils/typography"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
