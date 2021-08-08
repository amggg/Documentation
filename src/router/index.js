import Vue from 'vue'
import Router from 'vue-router'
import Document from '@/components/Document'
import ScancodePage from '@/components/home/ScancodePage'
import ParsingcodePage from '@/components/home/ParsingcodePage'
import IntegratedPage from "../components/home/IntegratedPage";
import GenerateCodePage from "../components/home/GenerateCodePage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'document',
      redirect: '/integraedpage',
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
          component: ParsingcodePage,
          meta: { keepAlive: true }
        },
        {
          path: '/integraedpage',
          name: 'integraedpage',
          component: IntegratedPage,
          meta: { keepAlive: true }
        },
        {
          path: '/generatecodepage',
          name: 'generatecodepage',
          component: GenerateCodePage,
          meta: { keepAlive: true }
        }
      ]
    }
  ]
})
