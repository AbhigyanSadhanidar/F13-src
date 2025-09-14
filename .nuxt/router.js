import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _20d960bc = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _82991094 = () => interopDefault(import('..\\pages\\advisory.vue' /* webpackChunkName: "pages/advisory" */))
const _2094e76f = () => interopDefault(import('..\\pages\\capabilities\\index.vue' /* webpackChunkName: "pages/capabilities/index" */))
const _4f868db4 = () => interopDefault(import('..\\pages\\concept-note.vue' /* webpackChunkName: "pages/concept-note" */))
const _24091b40 = () => interopDefault(import('..\\pages\\demo.vue' /* webpackChunkName: "pages/demo" */))
const _5691426c = () => interopDefault(import('..\\pages\\events\\index.vue' /* webpackChunkName: "pages/events/index" */))
const _15399900 = () => interopDefault(import('..\\pages\\founder\\index.vue' /* webpackChunkName: "pages/founder/index" */))
const _25948411 = () => interopDefault(import('..\\pages\\I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL.vue' /* webpackChunkName: "pages/I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL" */))
const _6c227226 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _11f2f556 = () => interopDefault(import('..\\pages\\members\\index.vue' /* webpackChunkName: "pages/members/index" */))
const _b9ba3c68 = () => interopDefault(import('..\\pages\\pledge\\index.vue' /* webpackChunkName: "pages/pledge/index" */))
const _699d6564 = () => interopDefault(import('..\\pages\\register_success.vue' /* webpackChunkName: "pages/register_success" */))
const _e6106594 = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages/registration" */))
const _557414e0 = () => interopDefault(import('..\\pages\\SeeSummit2021.vue' /* webpackChunkName: "pages/SeeSummit2021" */))
const _5557e5de = () => interopDefault(import('..\\pages\\SeeSummit2022.vue' /* webpackChunkName: "pages/SeeSummit2022" */))
const _25ea50d4 = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages/success" */))
const _232a0594 = () => interopDefault(import('..\\pages\\success\\_id.vue' /* webpackChunkName: "pages/success/_id" */))
const _ed78e418 = () => interopDefault(import('..\\pages\\supporters.vue' /* webpackChunkName: "pages/supporters" */))
const _0e928168 = () => interopDefault(import('..\\pages\\team\\index.vue' /* webpackChunkName: "pages/team/index" */))
const _027591b2 = () => interopDefault(import('..\\pages\\tenders.vue' /* webpackChunkName: "pages/tenders" */))
const _48316025 = () => interopDefault(import('..\\pages\\ventures\\index.vue' /* webpackChunkName: "pages/ventures/index" */))
const _02def9b4 = () => interopDefault(import('..\\pages\\about\\src.vue' /* webpackChunkName: "pages/about/src" */))
const _42109ab2 = () => interopDefault(import('..\\pages\\capabilities\\consulting_and_advisory.vue' /* webpackChunkName: "pages/capabilities/consulting_and_advisory" */))
const _b1d57620 = () => interopDefault(import('..\\pages\\capabilities\\digital_documentation.vue' /* webpackChunkName: "pages/capabilities/digital_documentation" */))
const _4dbfa756 = () => interopDefault(import('..\\pages\\capabilities\\documentry.vue' /* webpackChunkName: "pages/capabilities/documentry" */))
const _bf37cc54 = () => interopDefault(import('..\\pages\\capabilities\\esg.vue' /* webpackChunkName: "pages/capabilities/esg" */))
const _1e6ddb63 = () => interopDefault(import('..\\pages\\capabilities\\intellectual_support.vue' /* webpackChunkName: "pages/capabilities/intellectual_support" */))
const _5b85211e = () => interopDefault(import('..\\pages\\capabilities\\media_advocacy.vue' /* webpackChunkName: "pages/capabilities/media_advocacy" */))
const _5fd1ec62 = () => interopDefault(import('..\\pages\\capabilities\\partnerships.vue' /* webpackChunkName: "pages/capabilities/partnerships" */))
const _ff56e0e4 = () => interopDefault(import('..\\pages\\capabilities\\research.vue' /* webpackChunkName: "pages/capabilities/research" */))
const _6262a274 = () => interopDefault(import('..\\pages\\efs\\login.vue' /* webpackChunkName: "pages/efs/login" */))
const _9f7648c4 = () => interopDefault(import('..\\pages\\esf\\members.vue' /* webpackChunkName: "pages/esf/members" */))
const _ef4e8d06 = () => interopDefault(import('..\\pages\\events\\campaigns.vue' /* webpackChunkName: "pages/events/campaigns" */))
const _1e7d5761 = () => interopDefault(import('..\\pages\\membership\\internship.vue' /* webpackChunkName: "pages/membership/internship" */))
const _42e271dd = () => interopDefault(import('..\\pages\\membership\\voluntary.vue' /* webpackChunkName: "pages/membership/voluntary" */))
const _14392638 = () => interopDefault(import('..\\pages\\ventures\\m_book.vue' /* webpackChunkName: "pages/ventures/m_book" */))
const _c7b62058 = () => interopDefault(import('..\\pages\\events\\_id.vue' /* webpackChunkName: "pages/events/_id" */))
const _6d56e734 = () => interopDefault(import('..\\pages\\pledge\\_id.vue' /* webpackChunkName: "pages/pledge/_id" */))
const _687327cd = () => interopDefault(import('..\\pages\\ventures\\_id.vue' /* webpackChunkName: "pages/ventures/_id" */))
const _747d23a5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _584c6966 = () => interopDefault(import('..\\pages\\_id.vue' /* webpackChunkName: "pages/_id" */))

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
    component: _20d960bc,
    name: "about"
  }, {
    path: "/advisory",
    component: _82991094,
    name: "advisory"
  }, {
    path: "/capabilities",
    component: _2094e76f,
    name: "capabilities"
  }, {
    path: "/concept-note",
    component: _4f868db4,
    name: "concept-note"
  }, {
    path: "/demo",
    component: _24091b40,
    name: "demo"
  }, {
    path: "/events",
    component: _5691426c,
    name: "events"
  }, {
    path: "/founder",
    component: _15399900,
    name: "founder"
  }, {
    path: "/I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL",
    component: _25948411,
    name: "I9c6MHOnM3JS8fbH7qmBAFGPRI0PuUlL"
  }, {
    path: "/inspire",
    component: _6c227226,
    name: "inspire"
  }, {
    path: "/members",
    component: _11f2f556,
    name: "members"
  }, {
    path: "/pledge",
    component: _b9ba3c68,
    name: "pledge"
  }, {
    path: "/register_success",
    component: _699d6564,
    name: "register_success"
  }, {
    path: "/registration",
    component: _e6106594,
    name: "registration"
  }, {
    path: "/SeeSummit2021",
    component: _557414e0,
    name: "SeeSummit2021"
  }, {
    path: "/SeeSummit2022",
    component: _5557e5de,
    name: "SeeSummit2022"
  }, {
    path: "/success",
    component: _25ea50d4,
    name: "success",
    children: [{
      path: ":id?",
      component: _232a0594,
      name: "success-id"
    }]
  }, {
    path: "/supporters",
    component: _ed78e418,
    name: "supporters"
  }, {
    path: "/team",
    component: _0e928168,
    name: "team"
  }, {
    path: "/tenders",
    component: _027591b2,
    name: "tenders"
  }, {
    path: "/ventures",
    component: _48316025,
    name: "ventures"
  }, {
    path: "/about/src",
    component: _02def9b4,
    name: "about-src"
  }, {
    path: "/capabilities/consulting_and_advisory",
    component: _42109ab2,
    name: "capabilities-consulting_and_advisory"
  }, {
    path: "/capabilities/digital_documentation",
    component: _b1d57620,
    name: "capabilities-digital_documentation"
  }, {
    path: "/capabilities/documentry",
    component: _4dbfa756,
    name: "capabilities-documentry"
  }, {
    path: "/capabilities/esg",
    component: _bf37cc54,
    name: "capabilities-esg"
  }, {
    path: "/capabilities/intellectual_support",
    component: _1e6ddb63,
    name: "capabilities-intellectual_support"
  }, {
    path: "/capabilities/media_advocacy",
    component: _5b85211e,
    name: "capabilities-media_advocacy"
  }, {
    path: "/capabilities/partnerships",
    component: _5fd1ec62,
    name: "capabilities-partnerships"
  }, {
    path: "/capabilities/research",
    component: _ff56e0e4,
    name: "capabilities-research"
  }, {
    path: "/efs/login",
    component: _6262a274,
    name: "efs-login"
  }, {
    path: "/esf/members",
    component: _9f7648c4,
    name: "esf-members"
  }, {
    path: "/events/campaigns",
    component: _ef4e8d06,
    name: "events-campaigns"
  }, {
    path: "/membership/internship",
    component: _1e7d5761,
    name: "membership-internship"
  }, {
    path: "/membership/voluntary",
    component: _42e271dd,
    name: "membership-voluntary"
  }, {
    path: "/ventures/m_book",
    component: _14392638,
    name: "ventures-m_book"
  }, {
    path: "/events/:id",
    component: _c7b62058,
    name: "events-id"
  }, {
    path: "/pledge/:id",
    component: _6d56e734,
    name: "pledge-id"
  }, {
    path: "/ventures/:id",
    component: _687327cd,
    name: "ventures-id"
  }, {
    path: "/",
    component: _747d23a5,
    name: "index"
  }, {
    path: "/:id",
    component: _584c6966,
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
