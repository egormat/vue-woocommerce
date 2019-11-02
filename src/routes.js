import HomePage from './views/HomePage'
import ProductPage from './views/ProductPage'
import CategoryPage from './views/CategoryPage'
import Cart from './views/Cart'

const routes = [
  { path: '/',
    name: 'home',
    component: HomePage
  },

  {path: '/product/:id',
    name: 'product',
    component: ProductPage
  },

  {path: '/category/:id',
    name: 'category',
    component: CategoryPage
  },

  {path: '/cart',
    name: 'cart',
  component: Cart}
]


export default routes;
