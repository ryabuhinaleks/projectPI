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
import CreateDocument from '@/components/CreateDocument'
import EventInformation from '@/components/EventInformation'
import Participants from '@/components/Participants'
import Dates from '@/components/Dates'
import Documents from '@/components/Documents'
import Confirmation from '@/components/Confirmation'
import DocumentInformation from '@/components/DocumentInformation'
import My_documents from '@/components/My_documents'
import Admin from '@/components/Admin'
import UpdateDocument from '@/components/UpdateDocument'


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
    {
      path: '/event/:id/info',
      name: 'EventInformation',
      component: EventInformation
    },
    {
      path: '/event/:id/part',
      name: 'Participants',
      component: Participants
    },
    {
      path: '/event/:id/dates',
      name: 'Dates',
      component: Dates
    },
    {
      path: '/event/:id/documents',
      name: 'Documents',
      component: Documents
    },
    {
      path: '/event/:id/documents/:id_doc',
      name: 'Confirmation',
      component: Confirmation
    },
    {
      path: '/event/:id/documents/:id_doc/info',
      name: 'DocumentInformation',
      component: DocumentInformation
    },
    {
      path: '/documents',
      name: 'My_documents',
      component: My_documents
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/documents/newDocument',
      name: 'CreateDocument',
      component: CreateDocument
    },
    {
      path: '/documents/:id_doc/update',
      name: 'UpdateDocument',
      component: UpdateDocument
    },
  ]
})
