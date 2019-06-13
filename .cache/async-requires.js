// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-storyblok-entry-jsx": () => import("/Users/tom/projects/thomasheller.net/v2019-storyblok/src/templates/storyblok-entry.jsx" /* webpackChunkName: "component---src-templates-storyblok-entry-jsx" */),
  "component---src-templates-bloglist-jsx": () => import("/Users/tom/projects/thomasheller.net/v2019-storyblok/src/templates/bloglist.jsx" /* webpackChunkName: "component---src-templates-bloglist-jsx" */),
  "component---cache-dev-404-page-js": () => import("/Users/tom/projects/thomasheller.net/v2019-storyblok/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("/Users/tom/projects/thomasheller.net/v2019-storyblok/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-editor-js": () => import("/Users/tom/projects/thomasheller.net/v2019-storyblok/src/pages/editor.js" /* webpackChunkName: "component---src-pages-editor-js" */),
  "component---src-pages-index-jsx": () => import("/Users/tom/projects/thomasheller.net/v2019-storyblok/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/tom/projects/thomasheller.net/v2019-storyblok/.cache/data.json")

