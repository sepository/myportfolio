import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Skill from '@/components/Skill'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
