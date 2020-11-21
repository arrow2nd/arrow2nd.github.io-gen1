import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import index from '@/pages/index'
import mj3ds from '@/pages/works/game/mj_3ds'
import mjSw from '@/pages/works/game/mj_sw'
import nyanko from '@/pages/works/game/nyanko'
import syntax from '@/pages/works/game/syntax'
import tokumei from '@/pages/works/other/tokumei'
import produce from '@/pages/works/other/produce'
import totsuzen from '@/pages/works/other/totsuzen'
import twnyan from '@/pages/works/other/twnyan'
import sb4 from '@/pages/works/other/sb4'

// fontawesome
library.add(fas, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/mj_3ds',
      name: 'mj_3ds',
      component: mj3ds
    },
    {
      path: '/mj_sw',
      name: 'mj_sw',
      component: mjSw
    },
    {
      path: '/nyanko',
      name: 'nyanko',
      component: nyanko
    },
    {
      path: '/syntax',
      name: 'syntax',
      component: syntax
    },
    {
      path: '/tokumei',
      name: 'tokumei',
      component: tokumei
    },
    {
      path: '/produce',
      name: 'produce',
      component: produce
    },
    {
      path: '/totsuzen',
      name: 'totsuzen',
      component: totsuzen
    },
    {
      path: '/twnyan',
      name: 'twnyan',
      component: twnyan
    },
    {
      path: '/sb4',
      name: 'sb4',
      component: sb4
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
