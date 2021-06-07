import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let url = `https://tribeback.herokuapp.com/api/`;

export default new Vuex.Store({
    state: {
        products: [],
        productsUsed: [],
        cart: [],
        brands: [],
        categories: []
    },
    mutations: {
        fetchProducts(state, data) {
            state.products = data
        },
        fetchProductsUsed(state, data) {
            state.productsUsed = data
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
        fetchProductsUsedData({ commit }) {
            axios.get(url + 'productsUsed').then((res) => {
                commit('fetchProductsUsed', res.data)
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
        fetchProduct({ commit }, id) {
            axios.get(url + 'products/getById/', { params: { id: id } }).then((res) => {
                commit('fetchProducts', res.data)
            })
        },
        fetchProductByBrand({ commit }, id) {
            axios.get(url + 'products/getByBrand/', { params: { id: id } }).then((res) => {
                commit('fetchProducts', res.data)
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