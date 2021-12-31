import { wrapFunctional } from './utils'

export { default as Cinquieme } from '../../components/Cinquieme.vue'
export { default as Deuxieme } from '../../components/Deuxieme.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Loader } from '../../components/Loader.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as MainContent } from '../../components/MainContent.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as Premiere } from '../../components/Premiere.vue'
export { default as Quartrieme } from '../../components/Quartrieme.vue'
export { default as Showcase } from '../../components/Showcase.vue'
export { default as Thumbnail } from '../../components/Thumbnail.vue'
export { default as Troisieme } from '../../components/Troisieme.vue'

export const LazyCinquieme = import('../../components/Cinquieme.vue' /* webpackChunkName: "components/cinquieme" */).then(c => wrapFunctional(c.default || c))
export const LazyDeuxieme = import('../../components/Deuxieme.vue' /* webpackChunkName: "components/deuxieme" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyLoader = import('../../components/Loader.vue' /* webpackChunkName: "components/loader" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMainContent = import('../../components/MainContent.vue' /* webpackChunkName: "components/main-content" */).then(c => wrapFunctional(c.default || c))
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyPremiere = import('../../components/Premiere.vue' /* webpackChunkName: "components/premiere" */).then(c => wrapFunctional(c.default || c))
export const LazyQuartrieme = import('../../components/Quartrieme.vue' /* webpackChunkName: "components/quartrieme" */).then(c => wrapFunctional(c.default || c))
export const LazyShowcase = import('../../components/Showcase.vue' /* webpackChunkName: "components/showcase" */).then(c => wrapFunctional(c.default || c))
export const LazyThumbnail = import('../../components/Thumbnail.vue' /* webpackChunkName: "components/thumbnail" */).then(c => wrapFunctional(c.default || c))
export const LazyTroisieme = import('../../components/Troisieme.vue' /* webpackChunkName: "components/troisieme" */).then(c => wrapFunctional(c.default || c))
