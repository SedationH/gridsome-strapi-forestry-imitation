import DefaultLayout from '~/layouts/Default.vue'
import dayjs from 'dayjs'
const APIHOST = 'http://localhost:1337'

import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({
  replaceLink: function(link, env) {
    return APIHOST + link
  },
}).use(require('markdown-it-replace-link'))

import '~/assets/style/index.scss'

export default function(Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)

  // 时间过滤器
  Vue.filter('date', (value, format = 'YYYY') => {
    return dayjs(value).format(format)
  })

  Vue.filter('file', url => APIHOST + url)

  Vue.filter('md', value => md.render(value))
}
