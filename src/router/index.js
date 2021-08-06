import Vue from 'vue'
import Router from 'vue-router'
import Document from '@/components/Document'
import ScancodePage from '@/components/home/ScancodePage'
import Parsingcode from '@/components/home/ParsingcodePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'document',
      redirect: '/scancodepage',
      component: Document,
      children: [
        {
          path: '/scancodepage',
          name: 'scancodepage',
          component: ScancodePage,
          meta: { keepAlive: true }
        },
        {
          path: '/parsingpage',
          name: 'parsingpage',
          component: Parsingcode,
          meta: { keepAlive: true }
        }
      ]
    }
  ]
})
