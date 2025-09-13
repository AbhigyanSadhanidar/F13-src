import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _14bf76c2 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _1ec3780c = () => interopDefault(import('../pages/advisory.vue' /* webpackChunkName: "pages/advisory" */))
const _9d7ead8c = () => interopDefault(import('../pages/capabilities/index.vue' /* webpackChunkName: "pages/capabilities/index" */))
const _8a2cd010 = () => interopDefault(import('../pages/concept-note.vue' /* webpackChunkName: "pages/concept-note" */))
const _549f00a4 = () => interopDefault(import('../pages/demo.vue' /* webpackChunkName: "pages/demo" */))
const _047384c6 = () => interopDefault(import('../pages/events/index.vue' /* webpackChunkName: "pages/events/index" */))
const _bc6c0efe = () => interopDefault(import('../pages/founder/index.vue' /* webpackChunkName: "pages/founder/index" */))
const _53afc455 = () => interopDefault(import('../pages/I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL.vue' /* webpackChunkName: "pages/I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL" */))
const _05d13bae = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _ee2e8d2a = () => interopDefault(import('../pages/members/index.vue' /* webpackChunkName: "pages/members/index" */))
const _52d3323d = () => interopDefault(import('../pages/pledge/index.vue' /* webpackChunkName: "pages/pledge/index" */))
const _07aca4b0 = () => interopDefault(import('../pages/register_success.vue' /* webpackChunkName: "pages/register_success" */))
const _0f4a510c = () => interopDefault(import('../pages/registration.vue' /* webpackChunkName: "pages/registration" */))
const _53779868 = () => interopDefault(import('../pages/SeeSummit2021.vue' /* webpackChunkName: "pages/SeeSummit2021" */))
const _535b6966 = () => interopDefault(import('../pages/SeeSummit2022.vue' /* webpackChunkName: "pages/SeeSummit2022" */))
const _203372d2 = () => interopDefault(import('../pages/success.vue' /* webpackChunkName: "pages/success" */))
const _990bf106 = () => interopDefault(import('../pages/success/_id.vue' /* webpackChunkName: "pages/success/_id" */))
const _28a74d90 = () => interopDefault(import('../pages/supporters.vue' /* webpackChunkName: "pages/supporters" */))
const _9f2e1fbe = () => interopDefault(import('../pages/team/index.vue' /* webpackChunkName: "pages/team/index" */))
const _359e2cee = () => interopDefault(import('../pages/tenders.vue' /* webpackChunkName: "pages/tenders" */))
const _6ea583c4 = () => interopDefault(import('../pages/ventures/index.vue' /* webpackChunkName: "pages/ventures/index" */))
const _3caf09f1 = () => interopDefault(import('../pages/about/src.vue' /* webpackChunkName: "pages/about/src" */))
const _44b0b7b2 = () => interopDefault(import('../pages/capabilities/consulting_and_advisory.vue' /* webpackChunkName: "pages/capabilities/consulting_and_advisory" */))
const _ee5bde8a = () => interopDefault(import('../pages/capabilities/digital_documentation.vue' /* webpackChunkName: "pages/capabilities/digital_documentation" */))
const _a5e65d2c = () => interopDefault(import('../pages/capabilities/documentry.vue' /* webpackChunkName: "pages/capabilities/documentry" */))
const _401bd261 = () => interopDefault(import('../pages/capabilities/esg.vue' /* webpackChunkName: "pages/capabilities/esg" */))
const _cd5a2b90 = () => interopDefault(import('../pages/capabilities/intellectual_support.vue' /* webpackChunkName: "pages/capabilities/intellectual_support" */))
const _6fbf33b3 = () => interopDefault(import('../pages/capabilities/media_advocacy.vue' /* webpackChunkName: "pages/capabilities/media_advocacy" */))
const _29acbf92 = () => interopDefault(import('../pages/capabilities/partnerships.vue' /* webpackChunkName: "pages/capabilities/partnerships" */))
const _03e175e3 = () => interopDefault(import('../pages/capabilities/research.vue' /* webpackChunkName: "pages/capabilities/research" */))
const _699bf39b = () => interopDefault(import('../pages/efs/login.vue' /* webpackChunkName: "pages/efs/login" */))
const _12293f51 = () => interopDefault(import('../pages/esf/members.vue' /* webpackChunkName: "pages/esf/members" */))
const _494ab42e = () => interopDefault(import('../pages/events/campaigns.vue' /* webpackChunkName: "pages/events/campaigns" */))
const _235114b6 = () => interopDefault(import('../pages/membership/internship.vue' /* webpackChunkName: "pages/membership/internship" */))
const _92b19430 = () => interopDefault(import('../pages/membership/voluntary.vue' /* webpackChunkName: "pages/membership/voluntary" */))
const _876d130e = () => interopDefault(import('../pages/ventures/m_book.vue' /* webpackChunkName: "pages/ventures/m_book" */))
const _0e110345 = () => interopDefault(import('../pages/events/_id.vue' /* webpackChunkName: "pages/events/_id" */))
const _1d129fe5 = () => interopDefault(import('../pages/pledge/_id.vue' /* webpackChunkName: "pages/pledge/_id" */))
const _8aecb1a8 = () => interopDefault(import('../pages/ventures/_id.vue' /* webpackChunkName: "pages/ventures/_id" */))
const _3b69443e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _51ad36ee = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

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
    component: _14bf76c2,
    name: "about"
  }, {
    path: "/advisory",
    component: _1ec3780c,
    name: "advisory"
  }, {
    path: "/capabilities",
    component: _9d7ead8c,
    name: "capabilities"
  }, {
    path: "/concept-note",
    component: _8a2cd010,
    name: "concept-note"
  }, {
    path: "/demo",
    component: _549f00a4,
    name: "demo"
  }, {
    path: "/events",
    component: _047384c6,
    name: "events"
  }, {
    path: "/founder",
    component: _bc6c0efe,
    name: "founder"
  }, {
    path: "/I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL",
    component: _53afc455,
    name: "I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL"
  }, {
    path: "/inspire",
    component: _05d13bae,
    name: "inspire"
  }, {
    path: "/members",
    component: _ee2e8d2a,
    name: "members"
  }, {
    path: "/pledge",
    component: _52d3323d,
    name: "pledge"
  }, {
    path: "/register_success",
    component: _07aca4b0,
    name: "register_success"
  }, {
    path: "/registration",
    component: _0f4a510c,
    name: "registration"
  }, {
    path: "/SeeSummit2021",
    component: _53779868,
    name: "SeeSummit2021"
  }, {
    path: "/SeeSummit2022",
    component: _535b6966,
    name: "SeeSummit2022"
  }, {
    path: "/success",
    component: _203372d2,
    name: "success",
    children: [{
      path: ":id?",
      component: _990bf106,
      name: "success-id"
    }]
  }, {
    path: "/supporters",
    component: _28a74d90,
    name: "supporters"
  }, {
    path: "/team",
    component: _9f2e1fbe,
    name: "team"
  }, {
    path: "/tenders",
    component: _359e2cee,
    name: "tenders"
  }, {
    path: "/ventures",
    component: _6ea583c4,
    name: "ventures"
  }, {
    path: "/about/src",
    component: _3caf09f1,
    name: "about-src"
  }, {
    path: "/capabilities/consulting_and_advisory",
    component: _44b0b7b2,
    name: "capabilities-consulting_and_advisory"
  }, {
    path: "/capabilities/digital_documentation",
    component: _ee5bde8a,
    name: "capabilities-digital_documentation"
  }, {
    path: "/capabilities/documentry",
    component: _a5e65d2c,
    name: "capabilities-documentry"
  }, {
    path: "/capabilities/esg",
    component: _401bd261,
    name: "capabilities-esg"
  }, {
    path: "/capabilities/intellectual_support",
    component: _cd5a2b90,
    name: "capabilities-intellectual_support"
  }, {
    path: "/capabilities/media_advocacy",
    component: _6fbf33b3,
    name: "capabilities-media_advocacy"
  }, {
    path: "/capabilities/partnerships",
    component: _29acbf92,
    name: "capabilities-partnerships"
  }, {
    path: "/capabilities/research",
    component: _03e175e3,
    name: "capabilities-research"
  }, {
    path: "/efs/login",
    component: _699bf39b,
    name: "efs-login"
  }, {
    path: "/esf/members",
    component: _12293f51,
    name: "esf-members"
  }, {
    path: "/events/campaigns",
    component: _494ab42e,
    name: "events-campaigns"
  }, {
    path: "/membership/internship",
    component: _235114b6,
    name: "membership-internship"
  }, {
    path: "/membership/voluntary",
    component: _92b19430,
    name: "membership-voluntary"
  }, {
    path: "/ventures/m_book",
    component: _876d130e,
    name: "ventures-m_book"
  }, {
    path: "/events/:id",
    component: _0e110345,
    name: "events-id"
  }, {
    path: "/pledge/:id",
    component: _1d129fe5,
    name: "pledge-id"
  }, {
    path: "/ventures/:id",
    component: _8aecb1a8,
    name: "ventures-id"
  }, {
    path: "/",
    component: _3b69443e,
    name: "index"
  }, {
    path: "/:id",
    component: _51ad36ee,
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
