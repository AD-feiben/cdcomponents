import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)

let routes = []

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})
routes.forEach((route) => {
  route.component = r => require.ensure([], () =>
    r(require(`../docs/${route.name}.md`)))
})

export default new Router({
  routes: routes
})
