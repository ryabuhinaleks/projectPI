import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/components/Signup'
import Login from '@/components/Login'
import Username from '@/components/Username'
import UpdateLoginInformation from '@/components/UpdateLoginInformation'
import Profile from '@/components/Profile'
import Pin from '@/components/Pin'
import Events from '@/components/Events'
import Event from '@/components/Event'
import CreateEvent from '@/components/CreateEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/username',
      name: 'Username',
      component: Username
    },
    {
      path: '/username/login',
      name: 'UpdateLoginInformation',
      component: UpdateLoginInformation
    },
    {
      path: '/username/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/username/pin',
      name: 'Pin',
      component: Pin
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/event/:id',
      name: 'Event',
      component: Event
    },
    {
      path: '/events/newEvent',
      name: 'CreateEvent',
      component: CreateEvent
    },
  ]
})
