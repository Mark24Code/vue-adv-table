import Hello from './components/Hello'

Hello.install = function(Vue) {
  Vue.component(Hello.name, Hello)
}

export default Hello
