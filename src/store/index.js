import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let url = `https://tribeback.herokuapp.com/api/`;

export default new Vuex.Store({
    state: {
        products: [''],
        productsUsed: [''],
        cart: [''],
        brands: [''],
        categories: [''],
        product: '',
        images: [''],
        sizes: ['']

    },
    mutations: {
        fetchProducts(state, data) {
            state.products = data
        },
        fetchProduct(state, data) {
            state.images = data.images
            state.sizes = data.sizes
            state.product = data
        },
        fetchProductsUsed(state, data) {
            state.productsUsed = data
        },
        fetchProductUsed(state, data) {
            state.images = data.images
            state.sizes = data.sizes
            state.productUsed = data
        },
        fetchCart(state, data) {
            state.cart = data
        },
        fetchBrands(state, data) {
            state.brands = data
        },
        fetchCategories(state, data) {
            state.categories = data
        },
        addToCart(state, id) {
            let product = state.products.find(p => p.id === id)
            state.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                amount: 1
            })
        },
        increment(state, id) {
            let product = state.cart.find(p => p.id === id)
            if (product.amount >= 0) {
                product.amount++
            }
        },
        decrement(state, id) {
            let product = state.cart.find(p => p.id === id)
            if (product.amount > 1) {
                product.amount--
            }
        },
        remove(state, id) {
            let product = state.cart.find(p => p.id === id)
            state.cart.splice(product, 1)
        }
    },
    getters: {
        totalCart(state) {
            return state.cart.map(p => p.price * p.amount)
                .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        },
        totalByRow(state) {
            return state.cart.map(p => p.price * p.amount)
        }
    },
    actions: {
        fetchProductsData({ commit }) {
            axios.get(url + 'products').then((res) => {
                commit('fetchProducts', res.data)
            })
        },
        fetchProduct({ commit }, id) {
            axios.post(url + 'products/getById', { "id": id }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
                commit('fetchProduct', res.data)
            }).catch(error => {
                console.log(error.response)
            })
        },
        fetchProductsByBrand({ commit }, id) {
            axios.post(url + 'products/getByBrand', { "brand": id }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
                commit('fetchProducts', res.data)
            }).catch(error => {
                console.log(error.response)
            })
        },
        fetchProductsByCategory({ commit }, id) {
            axios.post(url + 'products/getByCategory', { "category": id }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
                commit('fetchProducts', res.data)
            }).catch(error => {
                console.log(error.response)
            })
        },
        fetchProductsUsedData({ commit }) {
            axios.get(url + 'productsUsed').then((res) => {
                commit('fetchProductsUsed', res.data)
            })
        },
        fetchProductUsed({ commit }, id) {
            axios.post(url + 'productsUsed/getById', { "id": id }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
                commit('fetchProductUsed', res.data)
            }).catch(error => {
                console.log(error.response)
            })
        },
        fetchBrandsData({ commit }) {
            axios.get(url + 'brands').then((res) => {
                commit('fetchBrands', res.data)
            })
        },
        fetchCategoriesData({ commit }) {
            axios.get(url + 'categories').then((res) => {
                commit('fetchCategories', res.data)
            })
        },
        addToCart(context, id) {
            let product = context.state.cart.find(p => p.id === id)
            if (product) {
                context.commit('increment', id)
            } else {
                context.commit('addToCart', id)
            }
        }
    },
    modules: {

    }
})