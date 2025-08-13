
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sameerbhor17.github.io/portfolio/',
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
    'index.csr.html': {size: 5067, hash: '75c2b05b26c7d259d842c96bdbf369ac3b97f1783c3afbb325e7db2cb480b290', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1039, hash: '14a2b7e2aec8a4c54077b89db8ebdf844467458bea453fa82fda5c938b3e84db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11477, hash: 'ccb432646ab158fa15afc8265b6b4802ac87a4249e1332a0830af16028bc82de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 11538, hash: '4c178b5c847ee129e249c4affe4af56a99bb2acfa0bdc98f0237d4e8e5d7b947', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 11312, hash: '76990ff61e4f814a1206514b986e2097a118745e692ad959fd4503f08b3ca8e0', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 12997, hash: '7c1d9962b51bc698e32572e7207ae8b0cb366cf4ac6c35989b34cfe059db122b', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 12871, hash: 'be456d7f3e3afb4828b6afe6692c7b1a473e9004ef48fb213d6bd9c6bcc0d634', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 11585, hash: '504632510a2abc62775846277e53e64c8132aceaadbff58f5c2fe5021ef3b938', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-UOSJVJ45.css': {size: 231007, hash: 'ta7yF+wgeOc', text: () => import('./assets-chunks/styles-UOSJVJ45_css.mjs').then(m => m.default)}
  },
};
