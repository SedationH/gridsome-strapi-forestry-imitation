const c1 = () => import(/* webpackChunkName: "page--src--templates--strapi-project-vue" */ "/Users/sedationh/workspace/project/gridsome-strapi-forestry-imitation/src/templates/StrapiProject.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--strapi-journal-vue" */ "/Users/sedationh/workspace/project/gridsome-strapi-forestry-imitation/src/templates/StrapiJournal.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/sedationh/workspace/project/gridsome-strapi-forestry-imitation/src/pages/Journal.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/sedationh/workspace/project/gridsome-strapi-forestry-imitation/src/pages/Contact.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/sedationh/workspace/project/gridsome-strapi-forestry-imitation/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/sedationh/workspace/project/gridsome-strapi-forestry-imitation/src/pages/Index.vue")

export default [
  {
    path: "/projects/:id/",
    component: c1
  },
  {
    path: "/journals/:id/",
    component: c2
  },
  {
    path: "/journal/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
