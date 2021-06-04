import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import ProductDetail from '../views/ProductDetail.vue'
import LogInRegister from '../views/LogInRegister.vue'
import AdminAddBrandProduct from '../views/AdminAddBrandProduct.vue'
import AddProduct from '../views/AddProduct.vue'
import AddBrand from '../views/AddBrand.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/loginregister',
        name: 'LogInRegister',
        component: LogInRegister
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/ProductDetail/:id',
        name: 'ProductDetail',
        component: ProductDetail
    },
    {
        path: '/addbrandproduct',
        name: 'AddBrandProduct',
        component: AdminAddBrandProduct
    },
    {
        path: '/addproduct',
        name: 'AddProduct',
        component: AddProduct
    },
    {
        path: '/addbrand',
        name: 'AddBrand',
        component: AddBrand
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router