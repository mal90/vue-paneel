import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'




Vue.use(VueRouter)
Vue.use(BootstrapVue);



import Menu from './components/Menu.vue'
import Users from './components/Users.vue'
import AddUsers from './components/AddUsers.vue'


const routes = [
	//route for the home route of the webpage
  { path: '/', component: Menu } ,
  { path: '/users', component: Users },
  { path: '/addusers', component: AddUsers } 
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

new Vue({
  //define the selector for the root component
    el: '#app',
    //pass the template to the root component
    template: '<App/>',
    //declare components that the root component can access
    components: { App },
    //pass in the router to the Vue instance
    router
  }).$mount('#app')//mount the router on the app
