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
        },
        fetchProductsSearchPrice(state, data) {
            console.log(data)
            console.log(state.products)
            const array1 = state.products
            const array2 = data
            const intersection = array1.filter(a => array2.some(b => a._id === b._id));
            state.products = intersection
            console.log(intersection)
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
        fetchProductsSearch({ commit }, querySearch) {
            console.log(querySearch)
            axios.post(url + 'products/search', { "query": querySearch }).then((res) => {
                commit('fetchProducts', res.data)
            }).catch(error => {
                console.log(error.response)
            })
        },
        async fetchProductsSearch2({ commit }, params) {
            const min = params.key1
            const max = params.key2
            const querySearch = params.key3
            let array1 = []
            await axios.post(url + 'products/search', { "query": querySearch }).then((res) => {
                array1 = res.data
            }).catch(error => {
                console.log(error.response)
            })
            let array2 = []
            await axios.post(url + 'products/getByPrice', { "minPrice": min, "maxPrice": max }).then((res) => {
                array2 = res.data
            }).catch(error => {
                console.log(error.response)
            })
            const intersection = array1.filter(a => array2.some(b => a._id === b._id));
            commit('fetchProducts', intersection)
        },
        fetchProductsSearchPrice({ commit }, params) {

            const min = params.key1
            const max = params.key2
            console.log({ min, max })
            axios.post(url + 'products/getByPrice', { "minPrice": min, "maxPrice": max }).then((res) => {
                commit('fetchProductsSearchPrice', res.data)
            }).catch(error => {
                console.log(error.response)
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
                console.log("dkfdlf")
                commit('fetchProductsUsed', res.data)
            }).catch(error => {
                console.log(error.response)
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