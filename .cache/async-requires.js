// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---content-shuld-be-too-index-mdx": () => import("./../content/shuld-be-too/index.mdx" /* webpackChunkName: "component---content-shuld-be-too-index-mdx" */),
  "component---content-shuld-be-url-mdx": () => import("./../content/shuld-be-url.mdx" /* webpackChunkName: "component---content-shuld-be-url-mdx" */),
  "component---src-templates-page-js": () => import("./../src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */)
}

