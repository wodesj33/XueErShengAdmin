/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const article = {
  path: '/article',
  component: Layout,
  redirect: '/article',
  name: 'ArticleManage',
  meta: {
    title: '文章管理',
    icon: 'documentation'
  },
  children: [{
    path: 'article',
    component: () => import('@/views/article/Article'),
    name: 'Article',
    meta: { title: '文章列表', noCache: true }
  }, {
    path: 'create-article',
    component: () => import('@/views/article/CreateArticle'),
    name: 'CreateArticle',
    meta: { title: '添加文章', noCache: true },
    hidden: true
  }, {
    path: 'discover',
    component: () => import('@/views/article/Discover'),
    name: 'Discover',
    meta: { title: '发现列表', noCache: true }
  }, {
    path: 'create-discover',
    component: () => import('@/views/article/CreateDiscover'),
    name: 'CreateDiscover',
    meta: { title: '添加发现文章', noCache: true },
    hidden: true
  }, {
    path: 'discover-comment',
    component: () => import('@/views/article/DiscoverComment'),
    name: 'DiscoverComment',
    meta: { title: '发现评论管理', noCache: true }
  }]
}

export default article
