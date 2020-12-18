/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const resources = {
  path: '/resources',
  component: Layout,
  redirect: '/resources',
  name: 'resources',
  meta: {
    title: '资源管理',
    icon: 'clipboard'
  },
  children: [{
    path: 'material',
    component: () => import('@/views/resources/Material'),
    name: 'Material',
    meta: { title: '素材管理', noCache: true }
  }, {
    path: 'lecturer',
    component: () => import('@/views/resources/Lecturer'),
    name: 'Lecturer',
    meta: { title: '讲师管理', noCache: true }
  }, {
    path: 'create-lecturer',
    component: () => import('@/views/resources/CreateLecturer'),
    name: 'CreateLecturer',
    meta: { title: '添加讲师', noCache: true },
    hidden: true
  }, {
    path: 'director',
    component: () => import('@/views/resources/Director'),
    name: 'Director',
    meta: { title: '班主任管理', noCache: true }
  }, {
    path: 'create-director',
    component: () => import('@/views/resources/CreateDirector'),
    name: 'CreateDirector',
    meta: { title: '添加班主任', noCache: true },
    hidden: true
  }]
}

export default resources
