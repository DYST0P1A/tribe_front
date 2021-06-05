import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
let url = `https://tribeback.herokuapp.com/api/`;

export default new Vuex.Store({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        fetchProducts(state, data){
            state.products = data
        },
        fetchCart(state, data){
            state.cart = data
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
            if (product.amount >= 0){
                product.amount++
            }
        },
        decrement(state, id) {
            let product = state.cart.find(p => p.id === id)
            if (product.amount > 1){
                product.amount--
            }
        },
        remove(state, id) {
            let product = state.cart.find(p => p.id === id)
            state.cart.splice(product,1)
        }
    },
    getters: {
        totalCart(state) {
            return state.cart.map(p => p.price * p.amount)
                             .reduce( (previousValue, currentValue) => previousValue + currentValue, 0)
        },
        totalByRow(state){
            return state.cart.map(p => p.price * p.amount)
        }
    },
    actions: {
        fetchProductsData({commit}) {
            axios.get(url + 'products').then((res) => {
                commit('fetchProducts', res.data)
            })
        },
        addToCart(context, id) {
            let product = context.state.cart.find(p => p.id === id)
            if (product) {
                context.commit('increment', id)
            }else {
                context.commit('addToCart', id)
            }
        }
    },
    modules: {
    
    }
})