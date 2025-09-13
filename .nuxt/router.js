import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _41befd74 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _411a42f0 = () => interopDefault(import('..\\pages\\advisory.vue' /* webpackChunkName: "pages/advisory" */))
const _7a13695d = () => interopDefault(import('..\\pages\\capabilities\\index.vue' /* webpackChunkName: "pages/capabilities/index" */))
const _bc9b88f4 = () => interopDefault(import('..\\pages\\concept-note.vue' /* webpackChunkName: "pages/concept-note" */))
const _26131232 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _49db4eda = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _e99dcb5c = () => interopDefault(import('..\\pages\\founder\\index.vue' /* webpackChunkName: "pages/founder/index" */))
const _67a114e3 = () => interopDefault(import('..\\pages\\I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL.vue' /* webpackChunkName: "pages/I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL" */))
const _4f1e3ddb = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _f02b12b0 = () => interopDefault(import('..\\pages\\members\\index.vue' /* webpackChunkName: "pages/members/index" */))
const _d326238c = () => interopDefault(import('..\\pages\\pledge\\index.vue' /* webpackChunkName: "pages/pledge/index" */))
const _3fb9da36 = () => interopDefault(import('..\\pages\\register_success.vue' /* webpackChunkName: "pages/register_success" */))
const _41b909f0 = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages/registration" */))
const _6edffc04 = () => interopDefault(import('..\\pages\\SeeSummit2021.vue' /* webpackChunkName: "pages/SeeSummit2021" */))
const _6ec3cd02 = () => interopDefault(import('..\\pages\\SeeSummit2022.vue' /* webpackChunkName: "pages/SeeSummit2022" */))
const _723a4e84 = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages/success" */))
const _7555b366 = () => interopDefault(import('..\\pages\\success\\_id.vue' /* webpackChunkName: "pages/success/_id" */))
const _77c48846 = () => interopDefault(import('..\\pages\\supporters.vue' /* webpackChunkName: "pages/supporters" */))
const _1f9e5d54 = () => interopDefault(import('..\\pages\\team\\index.vue' /* webpackChunkName: "pages/team/index" */))
const _f0b5eec0 = () => interopDefault(import('..\\pages\\tenders.vue' /* webpackChunkName: "pages/tenders" */))
const _ddabedda = () => interopDefault(import('..\\pages\\ventures\\index.vue' /* webpackChunkName: "pages/ventures/index" */))
const _1d4017f4 = () => interopDefault(import('..\\pages\\about\\src.vue' /* webpackChunkName: "pages/about/src" */))
const _249ed515 = () => interopDefault(import('..\\pages\\capabilities\\consulting_and_advisory.vue' /* webpackChunkName: "pages/capabilities/consulting_and_advisory" */))
const _4943aa44 = () => interopDefault(import('..\\pages\\capabilities\\digital_documentation.vue' /* webpackChunkName: "pages/capabilities/digital_documentation" */))
const _75abaf27 = () => interopDefault(import('..\\pages\\capabilities\\documentry.vue' /* webpackChunkName: "pages/capabilities/documentry" */))
const _e4538178 = () => interopDefault(import('..\\pages\\capabilities\\esg.vue' /* webpackChunkName: "pages/capabilities/esg" */))
const _0f997fb5 = () => interopDefault(import('..\\pages\\capabilities\\intellectual_support.vue' /* webpackChunkName: "pages/capabilities/intellectual_support" */))
const _23e22a20 = () => interopDefault(import('..\\pages\\capabilities\\media_advocacy.vue' /* webpackChunkName: "pages/capabilities/media_advocacy" */))
const _078802b4 = () => interopDefault(import('..\\pages\\capabilities\\partnerships.vue' /* webpackChunkName: "pages/capabilities/partnerships" */))
const _09269ee0 = () => interopDefault(import('..\\pages\\capabilities\\research.vue' /* webpackChunkName: "pages/capabilities/research" */))
const _50e39cc6 = () => interopDefault(import('..\\pages\\efs\\login.vue' /* webpackChunkName: "pages/efs/login" */))
const _02708970 = () => interopDefault(import('..\\pages\\esf\\members.vue' /* webpackChunkName: "pages/esf/members" */))
const _75cadeeb = () => interopDefault(import('..\\pages\\events\\campaigns.vue' /* webpackChunkName: "pages/events/campaigns" */))
const _b161329a = () => interopDefault(import('..\\pages\\membership\\internship.vue' /* webpackChunkName: "pages/membership/internship" */))
const _36c8304b = () => interopDefault(import('..\\pages\\membership\\voluntary.vue' /* webpackChunkName: "pages/membership/voluntary" */))
const _2b54c9ec = () => interopDefault(import('..\\pages\\ventures\\m_book.vue' /* webpackChunkName: "pages/ventures/m_book" */))
const _7dc33fc2 = () => interopDefault(import('..\\pages\\events\\_id.vue' /* webpackChunkName: "pages/events/_id" */))
const _4ef53722 = () => interopDefault(import('..\\pages\\pledge\\_id.vue' /* webpackChunkName: "pages/pledge/_id" */))
const _5bbd343b = () => interopDefault(import('..\\pages\\ventures\\_id.vue' /* webpackChunkName: "pages/ventures/_id" */))
const _3f597e13 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _4945e93b = () => interopDefault(import('..\\pages\\_id.vue' /* webpackChunkName: "pages/_id" */))

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
    component: _41befd74,
    name: "about"
  }, {
    path: "/advisory",
    component: _411a42f0,
    name: "advisory"
  }, {
    path: "/capabilities",
    component: _7a13695d,
    name: "capabilities"
  }, {
    path: "/concept-note",
    component: _bc9b88f4,
    name: "concept-note"
  }, {
    path: "/demo",
    component: _26131232,
    name: "demo"
  }, {
    path: "/events",
    component: _49db4eda,
    name: "events"
  }, {
    path: "/founder",
    component: _e99dcb5c,
    name: "founder"
  }, {
    path: "/I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL",
    component: _67a114e3,
    name: "I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL"
  }, {
    path: "/inspire",
    component: _4f1e3ddb,
    name: "inspire"
  }, {
    path: "/members",
    component: _f02b12b0,
    name: "members"
  }, {
    path: "/pledge",
    component: _d326238c,
    name: "pledge"
  }, {
    path: "/register_success",
    component: _3fb9da36,
    name: "register_success"
  }, {
    path: "/registration",
    component: _41b909f0,
    name: "registration"
  }, {
    path: "/SeeSummit2021",
    component: _6edffc04,
    name: "SeeSummit2021"
  }, {
    path: "/SeeSummit2022",
    component: _6ec3cd02,
    name: "SeeSummit2022"
  }, {
    path: "/success",
    component: _723a4e84,
    name: "success",
    children: [{
      path: ":id?",
      component: _7555b366,
      name: "success-id"
    }]
  }, {
    path: "/supporters",
    component: _77c48846,
    name: "supporters"
  }, {
    path: "/team",
    component: _1f9e5d54,
    name: "team"
  }, {
    path: "/tenders",
    component: _f0b5eec0,
    name: "tenders"
  }, {
    path: "/ventures",
    component: _ddabedda,
    name: "ventures"
  }, {
    path: "/about/src",
    component: _1d4017f4,
    name: "about-src"
  }, {
    path: "/capabilities/consulting_and_advisory",
    component: _249ed515,
    name: "capabilities-consulting_and_advisory"
  }, {
    path: "/capabilities/digital_documentation",
    component: _4943aa44,
    name: "capabilities-digital_documentation"
  }, {
    path: "/capabilities/documentry",
    component: _75abaf27,
    name: "capabilities-documentry"
  }, {
    path: "/capabilities/esg",
    component: _e4538178,
    name: "capabilities-esg"
  }, {
    path: "/capabilities/intellectual_support",
    component: _0f997fb5,
    name: "capabilities-intellectual_support"
  }, {
    path: "/capabilities/media_advocacy",
    component: _23e22a20,
    name: "capabilities-media_advocacy"
  }, {
    path: "/capabilities/partnerships",
    component: _078802b4,
    name: "capabilities-partnerships"
  }, {
    path: "/capabilities/research",
    component: _09269ee0,
    name: "capabilities-research"
  }, {
    path: "/efs/login",
    component: _50e39cc6,
    name: "efs-login"
  }, {
    path: "/esf/members",
    component: _02708970,
    name: "esf-members"
  }, {
    path: "/events/campaigns",
    component: _75cadeeb,
    name: "events-campaigns"
  }, {
    path: "/membership/internship",
    component: _b161329a,
    name: "membership-internship"
  }, {
    path: "/membership/voluntary",
    component: _36c8304b,
    name: "membership-voluntary"
  }, {
    path: "/ventures/m_book",
    component: _2b54c9ec,
    name: "ventures-m_book"
  }, {
    path: "/events/:id",
    component: _7dc33fc2,
    name: "events-id"
  }, {
    path: "/pledge/:id",
    component: _4ef53722,
    name: "pledge-id"
  }, {
    path: "/ventures/:id",
    component: _5bbd343b,
    name: "ventures-id"
  }, {
    path: "/",
    component: _3f597e13,
    name: "index"
  }, {
    path: "/:id",
    component: _4945e93b,
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
