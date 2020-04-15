const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/xuyuan/github/blog/.cache/dev-404-page.js"))),
  "component---content-shuld-be-too-index-mdx": hot(preferDefault(require("/Users/xuyuan/github/blog/content/shuld-be-too/index.mdx"))),
  "component---content-shuld-be-url-mdx": hot(preferDefault(require("/Users/xuyuan/github/blog/content/shuld-be-url.mdx")))
}

