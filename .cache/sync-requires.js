
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/cannonlock/WebstormProjects/Personal-Website/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/cannonlock/WebstormProjects/Personal-Website/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/cannonlock/WebstormProjects/Personal-Website/src/pages/index.js")),
  "component---src-pages-projects-index-js": preferDefault(require("/Users/cannonlock/WebstormProjects/Personal-Website/src/pages/projects/index.js"))
}
