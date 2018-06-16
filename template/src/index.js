{{#if_eq cliType 'component'}}
import VueComponent from './lib/{{ name }}.vue'
export function install(Vue) {
  Vue.component(VueComponent.name, VueComponent)
  /* -- Add more components here -- */
}
export default VueComponent
{{/if_eq}}
{{#if_eq cliType 'plugin'}}
const VuePlugin = {
  install: (Vue, options) => {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
      // ...
    })

    // 3. 注入组件
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
      // ...
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
    }
  }
}
export default VuePlugin
{{/if_eq}}
{{#if_eq cliType 'jsLibary'}}
export default function(){

};
{{/if_eq}}

