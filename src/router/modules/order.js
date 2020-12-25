/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const order = {
  path: '/order',
  component: Layout,
  redirect: '/order',
  name: 'order',
  meta: {
    title: '订单管理',
    icon: 'form'
  },
  children: [{
    path: 'order',
    component: () => import('@/views/order/Order'),
    name: 'Order',
    meta: { title: '订单管理', noCache: true }
  }]
}

export default order
