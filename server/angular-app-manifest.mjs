
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Sameerbhor17.github.io/portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/experience"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/education"
  },
  {
    "renderMode": 2,
    "route": "/portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5067, hash: '9a4b598f5b775532bc527d79115b13db69ce89bc53f259be6c2cb4551362ff57', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1039, hash: '5b50914a10bbfb3ff2f64beddee276c9a3e304bfa180e1f7deb978b1620f4766', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11477, hash: '4bdff3647cec9e0ca708dad6418eb93070ae8ae84eacc7b5ca90372643bd9e95', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 11538, hash: '58b48dff69d7439940acc2464a016fb922da4fd2ef70e2dd38effdf7be3083fa', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 11312, hash: '3bde91e818b2c8b21547e90507ea7ae06fce029571f7ee39eb5a5e2000229a05', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 12997, hash: '36a4bd9452342ea2459558eb798fb02299a479e15233e54058bb42ef9e5db15b', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 12871, hash: '8e695ebf3cdde8de281abdacbef27179a34c3516a73a4881d08175f4467a8788', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 11585, hash: '60ffcc06ed789903dd54a757054b02ac7b92109472a2895978bd892da0de2f81', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-UOSJVJ45.css': {size: 231007, hash: 'ta7yF+wgeOc', text: () => import('./assets-chunks/styles-UOSJVJ45_css.mjs').then(m => m.default)}
  },
};
