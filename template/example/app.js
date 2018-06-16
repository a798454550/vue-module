// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {{#if_eq cliType 'component'}} VueComponent {{/if_eq}}{{#if_eq cliType 'plugin'}} VuePlugin {{/if_eq}}{{#if_eq cliType 'jsLibary'}} owner {{/if_eq}} from '../src'

Vue.config.productionTip = false

{{#if_eq cliType 'component'}}
new Vue({
  el: '#app',
  template: '<div><VueComponent/></div>',
  components: { VueComponent }
})

{{/if_eq}}

{{#if_eq cliType 'plugin'}}
Vue.use(VuePlugin)// 或者传入参数对象 Vue.use(VuePlugin,{})

new Vue({
  el: '#app',
  template: '<div>欢迎使用vue插件</div>'
})
{{/if_eq}}