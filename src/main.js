import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    temp: '',
    works: [
      {content: 'sdhahdsjahsdjha', done:true},
      {content: 'sdhahdsjahsdjha', done:false}
    ]
  },
  getters: {
    getWorks(state){
      return state.works
    }
  },
  mutations: {
    changed (state, value) {
      state.works.push(value)
    },
    deleteTodo(state, index){
      state.works.splice(index, 1)
    }
  },
  actions: {
    getChanged(context, value){
      if(context.state.temp != ''){
      context.commit('changed', value)
      context.state.temp = ''
      }
    }
  }
  
})

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
}).$mount('#app')
