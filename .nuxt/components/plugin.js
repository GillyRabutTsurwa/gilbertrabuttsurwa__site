import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Cinquieme: () => import('../../components/Cinquieme.vue' /* webpackChunkName: "components/cinquieme" */).then(c => wrapFunctional(c.default || c)),
  Deuxieme: () => import('../../components/Deuxieme.vue' /* webpackChunkName: "components/deuxieme" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Loader: () => import('../../components/Loader.vue' /* webpackChunkName: "components/loader" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  MainContent: () => import('../../components/MainContent.vue' /* webpackChunkName: "components/main-content" */).then(c => wrapFunctional(c.default || c)),
  Navigation: () => import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c)),
  Premiere: () => import('../../components/Premiere.vue' /* webpackChunkName: "components/premiere" */).then(c => wrapFunctional(c.default || c)),
  Quartrieme: () => import('../../components/Quartrieme.vue' /* webpackChunkName: "components/quartrieme" */).then(c => wrapFunctional(c.default || c)),
  Showcase: () => import('../../components/Showcase.vue' /* webpackChunkName: "components/showcase" */).then(c => wrapFunctional(c.default || c)),
  Thumbnail: () => import('../../components/Thumbnail.vue' /* webpackChunkName: "components/thumbnail" */).then(c => wrapFunctional(c.default || c)),
  Troisieme: () => import('../../components/Troisieme.vue' /* webpackChunkName: "components/troisieme" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
