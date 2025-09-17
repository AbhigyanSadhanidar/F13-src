import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _06928ede = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _42cbb4f2 = () => interopDefault(import('..\\pages\\advisory.vue' /* webpackChunkName: "pages/advisory" */))
const _80f1669a = () => interopDefault(import('..\\pages\\capabilities\\index.vue' /* webpackChunkName: "pages/capabilities/index" */))
const _6685ccf0 = () => interopDefault(import('..\\pages\\concept-note.vue' /* webpackChunkName: "pages/concept-note" */))
const _4148a4c8 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _1f79eab0 = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _6965f93c = () => interopDefault(import('..\\pages\\founder\\index.vue' /* webpackChunkName: "pages/founder/index" */))
const _5f57cd4d = () => interopDefault(import('..\\pages\\I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL.vue' /* webpackChunkName: "pages/I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL" */))
const _11081b9e = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _661f5592 = () => interopDefault(import('..\\pages\\members\\index.vue' /* webpackChunkName: "pages/members/index" */))
const _6c0b8a10 = () => interopDefault(import('..\\pages\\pledge\\index.vue' /* webpackChunkName: "pages/pledge/index" */))
const _6432a6a0 = () => interopDefault(import('..\\pages\\register_success.vue' /* webpackChunkName: "pages/register_success" */))
const _b811e71c = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages/registration" */))
const _c3a2c458 = () => interopDefault(import('..\\pages\\SeeSummit2021.vue' /* webpackChunkName: "pages/SeeSummit2021" */))
const _c3869556 = () => interopDefault(import('..\\pages\\SeeSummit2022.vue' /* webpackChunkName: "pages/SeeSummit2022" */))
const _1a9802da = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages/success" */))
const _3a2944d0 = () => interopDefault(import('..\\pages\\success\\_id.vue' /* webpackChunkName: "pages/success/_id" */))
const _68416c30 = () => interopDefault(import('..\\pages\\supporters.vue' /* webpackChunkName: "pages/supporters" */))
const _0f506aac = () => interopDefault(import('..\\pages\\team\\index.vue' /* webpackChunkName: "pages/team/index" */))
const _3002bcf6 = () => interopDefault(import('..\\pages\\tenders.vue' /* webpackChunkName: "pages/tenders" */))
const _79910769 = () => interopDefault(import('..\\pages\\ventures\\index.vue' /* webpackChunkName: "pages/ventures/index" */))
const _3c465020 = () => interopDefault(import('..\\pages\\about\\src.vue' /* webpackChunkName: "pages/about/src" */))
const _3f3cceeb = () => interopDefault(import('..\\pages\\capabilities\\consulting_and_advisory.vue' /* webpackChunkName: "pages/capabilities/consulting_and_advisory" */))
const _d886bb98 = () => interopDefault(import('..\\pages\\capabilities\\digital_documentation.vue' /* webpackChunkName: "pages/capabilities/digital_documentation" */))
const _e2231cde = () => interopDefault(import('..\\pages\\capabilities\\documentry.vue' /* webpackChunkName: "pages/capabilities/documentry" */))
const _0f11ffcc = () => interopDefault(import('..\\pages\\capabilities\\esg.vue' /* webpackChunkName: "pages/capabilities/esg" */))
const _16f874c2 = () => interopDefault(import('..\\pages\\capabilities\\intellectual_support.vue' /* webpackChunkName: "pages/capabilities/intellectual_support" */))
const _49f6685a = () => interopDefault(import('..\\pages\\capabilities\\media_advocacy.vue' /* webpackChunkName: "pages/capabilities/media_advocacy" */))
const _49b85ac4 = () => interopDefault(import('..\\pages\\capabilities\\partnerships.vue' /* webpackChunkName: "pages/capabilities/partnerships" */))
const _522af3ca = () => interopDefault(import('..\\pages\\capabilities\\research.vue' /* webpackChunkName: "pages/capabilities/research" */))
const _590042da = () => interopDefault(import('..\\pages\\csr\\projects.vue' /* webpackChunkName: "pages/csr/projects" */))
const _416080b0 = () => interopDefault(import('..\\pages\\efs\\login.vue' /* webpackChunkName: "pages/efs/login" */))
const _7177ca4c = () => interopDefault(import('..\\pages\\esf\\members.vue' /* webpackChunkName: "pages/esf/members" */))
const _3f28c07e = () => interopDefault(import('..\\pages\\events\\campaigns.vue' /* webpackChunkName: "pages/events/campaigns" */))
const _1f5888c6 = () => interopDefault(import('..\\pages\\membership\\internship.vue' /* webpackChunkName: "pages/membership/internship" */))
const _225ed3be = () => interopDefault(import('..\\pages\\membership\\voluntary.vue' /* webpackChunkName: "pages/membership/voluntary" */))
const _0ece6774 = () => interopDefault(import('..\\pages\\ventures\\m_book.vue' /* webpackChunkName: "pages/ventures/m_book" */))
const _c63a4dd0 = () => interopDefault(import('..\\pages\\events\\_id.vue' /* webpackChunkName: "pages/events/_id" */))
const _6e14d078 = () => interopDefault(import('..\\pages\\pledge\\_id.vue' /* webpackChunkName: "pages/pledge/_id" */))
const _315bd011 = () => interopDefault(import('..\\pages\\ventures\\_id.vue' /* webpackChunkName: "pages/ventures/_id" */))
const _a1b7602e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _27b18ede = () => interopDefault(import('..\\pages\\_id.vue' /* webpackChunkName: "pages/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _06928ede,
    name: "about"
  }, {
    path: "/advisory",
    component: _42cbb4f2,
    name: "advisory"
  }, {
    path: "/capabilities",
    component: _80f1669a,
    name: "capabilities"
  }, {
    path: "/concept-note",
    component: _6685ccf0,
    name: "concept-note"
  }, {
    path: "/demo",
    component: _4148a4c8,
    name: "demo"
  }, {
    path: "/events",
    component: _1f79eab0,
    name: "events"
  }, {
    path: "/founder",
    component: _6965f93c,
    name: "founder"
  }, {
    path: "/I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL",
    component: _5f57cd4d,
    name: "I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL"
  }, {
    path: "/inspire",
    component: _11081b9e,
    name: "inspire"
  }, {
    path: "/members",
    component: _661f5592,
    name: "members"
  }, {
    path: "/pledge",
    component: _6c0b8a10,
    name: "pledge"
  }, {
    path: "/register_success",
    component: _6432a6a0,
    name: "register_success"
  }, {
    path: "/registration",
    component: _b811e71c,
    name: "registration"
  }, {
    path: "/SeeSummit2021",
    component: _c3a2c458,
    name: "SeeSummit2021"
  }, {
    path: "/SeeSummit2022",
    component: _c3869556,
    name: "SeeSummit2022"
  }, {
    path: "/success",
    component: _1a9802da,
    name: "success",
    children: [{
      path: ":id?",
      component: _3a2944d0,
      name: "success-id"
    }]
  }, {
    path: "/supporters",
    component: _68416c30,
    name: "supporters"
  }, {
    path: "/team",
    component: _0f506aac,
    name: "team"
  }, {
    path: "/tenders",
    component: _3002bcf6,
    name: "tenders"
  }, {
    path: "/ventures",
    component: _79910769,
    name: "ventures"
  }, {
    path: "/about/src",
    component: _3c465020,
    name: "about-src"
  }, {
    path: "/capabilities/consulting_and_advisory",
    component: _3f3cceeb,
    name: "capabilities-consulting_and_advisory"
  }, {
    path: "/capabilities/digital_documentation",
    component: _d886bb98,
    name: "capabilities-digital_documentation"
  }, {
    path: "/capabilities/documentry",
    component: _e2231cde,
    name: "capabilities-documentry"
  }, {
    path: "/capabilities/esg",
    component: _0f11ffcc,
    name: "capabilities-esg"
  }, {
    path: "/capabilities/intellectual_support",
    component: _16f874c2,
    name: "capabilities-intellectual_support"
  }, {
    path: "/capabilities/media_advocacy",
    component: _49f6685a,
    name: "capabilities-media_advocacy"
  }, {
    path: "/capabilities/partnerships",
    component: _49b85ac4,
    name: "capabilities-partnerships"
  }, {
    path: "/capabilities/research",
    component: _522af3ca,
    name: "capabilities-research"
  }, {
    path: "/csr/projects",
    component: _590042da,
    name: "csr-projects"
  }, {
    path: "/efs/login",
    component: _416080b0,
    name: "efs-login"
  }, {
    path: "/esf/members",
    component: _7177ca4c,
    name: "esf-members"
  }, {
    path: "/events/campaigns",
    component: _3f28c07e,
    name: "events-campaigns"
  }, {
    path: "/membership/internship",
    component: _1f5888c6,
    name: "membership-internship"
  }, {
    path: "/membership/voluntary",
    component: _225ed3be,
    name: "membership-voluntary"
  }, {
    path: "/ventures/m_book",
    component: _0ece6774,
    name: "ventures-m_book"
  }, {
    path: "/events/:id",
    component: _c63a4dd0,
    name: "events-id"
  }, {
    path: "/pledge/:id",
    component: _6e14d078,
    name: "pledge-id"
  }, {
    path: "/ventures/:id",
    component: _315bd011,
    name: "ventures-id"
  }, {
    path: "/",
    component: _a1b7602e,
    name: "index"
  }, {
    path: "/:id",
    component: _27b18ede,
    name: "id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
