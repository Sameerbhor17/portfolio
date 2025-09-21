
export default {
  basePath: 'https://sameerbhor17.github.io/portfolio',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
