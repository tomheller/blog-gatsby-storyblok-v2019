const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-storyblok-entry-jsx": hot(preferDefault(require("/Users/tom/projects/thomasheller.net/v2019-storyblok/src/templates/storyblok-entry.jsx"))),
  "component---src-templates-bloglist-jsx": hot(preferDefault(require("/Users/tom/projects/thomasheller.net/v2019-storyblok/src/templates/bloglist.jsx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/tom/projects/thomasheller.net/v2019-storyblok/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/tom/projects/thomasheller.net/v2019-storyblok/src/pages/about.js"))),
  "component---src-pages-editor-js": hot(preferDefault(require("/Users/tom/projects/thomasheller.net/v2019-storyblok/src/pages/editor.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/tom/projects/thomasheller.net/v2019-storyblok/src/pages/index.jsx")))
}

