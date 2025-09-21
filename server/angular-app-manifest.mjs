
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
    'index.csr.html': {size: 5067, hash: '7fb221a0943ffcdd9ad7a030aa3acc688ab93e59418f50b6f5f251015fe935ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1039, hash: 'e50240498230de5da79897d6b5ff085bad4c574e2e6aa6b0ca0e4aea8cd34381', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11817, hash: '0692ec2210e2381227e9d31a66537e439d44cee84f6a21f59cabd51d669443b0', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 12890, hash: '633d84ced744838755c5ece08df13e5a746d9b3a34a4fab93b25e0fb7a9d5ae7', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'education/index.html': {size: 11758, hash: 'dc096b4dae4ea00a854a95f4d89ddc225400b76418550dd1bbbd396d27bfb247', text: () => import('./assets-chunks/education_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 11613, hash: 'b0c273272df7adb404e389e3c51b840cf6377c92f20ebfd115edc315f08705e0', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11685, hash: '66ec65cbbda912bea9c8cd9dee16734a9b20f268ece7b2a54a00a50ba25bf252', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 12366, hash: '21ee541b8bc15461eba324e3dc99617eb4f666d3cdfe26522c15daa2b117d2f5', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-MB6ORDUC.css': {size: 231086, hash: 'mPzXIw+ZM5w', text: () => import('./assets-chunks/styles-MB6ORDUC_css.mjs').then(m => m.default)}
  },
};
