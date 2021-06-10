import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import auth from "@/logic/auth";

Vue.use(Vuex)
let url = `https://tribeback.herokuapp.com/api/`;

export default new Vuex.Store({
    state: {
        products: [''],
        productsSize: [''],
        productsUsed: [''],
        cart: [],
        brands: [''],
        brandsNames: [''],
        brandsIds: [''],
        categories: [''],
        categoriesNames: [''],
        product: '',
        images: [''],
        sizes: [''],
        onlySizes: []

    },
    mutations: {
        fetchProducts(state, data) {
            state.products = data
        },
        fetchProduct(state, data) {
            state.images = data.images
            state.sizes = data.sizes
            state.onlySizes = data.sizes.map(d => d.size);
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
            state.brandsNames = data.map(d => d.name);
            state.brandsIds = data.map(d => d._id);
        },
        fetchCategories(state, data) {
            state.categories = data
            state.categoriesNames = data.map(d => d.name);
        },
        addToCart(state, data) {
            let product = state.products.find(p => p._id === data.key1)
            state.cart.push({
                operation: "insert",
                id_item: product._id,
                name: product.name,
                price: product.price,
                sizeSelected: data.key2,
                emailSeller: "",
                type: "brand",
                quantity: 1
            })

        },
        increment(state, data) {
            let product = state.cart.find(p => p.id === data.key)
            if (product.quantity >= 0) {
                product.quantity++
            }
        },
        decrement(state, data) {
            let product = state.cart.find(p => p.id === data.id)
            if (product.quantity > 1) {
                product.quantity--
            }
        },
        remove(state, id) {
            let product = state.cart.find(p => p.id === id)
            state.cart.splice(product, 1)
        },
        fetchProductsSearchPrice(state, data) {
            const array1 = state.products
            const array2 = data
            const intersection = array1.filter(a => array2.some(b => a._id === b._id));
            state.products = intersection
        }
    },
    getters: {
        totalCart(state) {
            return state.cart.map(p => p.price * p.quantity)
                .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        },
        totalByRow(state) {
            return state.cart.map(p => p.price * p.quantity)
        }
    },
    actions: {
        fetchProductsData({ commit }) {
            axios.get(url + 'products').then((res) => {
                commit('fetchProducts', res.data)
            })
        },
        fetchProductsSearch({ commit }, querySearch) {
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
            var intersection = array1.filter(a => array2.some(b => a._id === b._id));
            let array3 = []
            if (params.key4 != "none") {
                await axios.post(url + 'products/getByGender', { "gender": params.key4 }).then((res) => {
                    array3 = res.data
                }).catch(error => {
                    console.log(error.response)
                })
                intersection = intersection.filter(a => array3.some(b => a._id === b._id));
            }
            commit('fetchProducts', intersection)
        },
        async fetchProductsUsedSearch({ commit }, params) {
            const min = params.key1
            const max = params.key2
            const querySearch = params.key3
            let array1 = []
            await axios.post(url + 'productsUsed/search', { "query": querySearch }).then((res) => {
                array1 = res.data
            }).catch(error => {
                console.log(error.response)
            })
            let array2 = []
            await axios.post(url + 'productsUsed/getByPrice', { "minPrice": min, "maxPrice": max }).then((res) => {
                array2 = res.data
            }).catch(error => {
                console.log(error.response)
            })
            var intersection = array1.filter(a => array2.some(b => a._id === b._id));
            let array3 = []
            if (params.key4 != "none") {
                await axios.post(url + 'productsUsed/getByGender', { "gender": params.key4 }).then((res) => {
                    array3 = res.data
                }).catch(error => {
                    console.log(error.response)
                })
                intersection = intersection.filter(a => array3.some(b => a._id === b._id));
            }
            commit('fetchProductsUsed', intersection)
        },
        fetchProductsSearchPrice({ commit }, params) {
            const min = params.key1
            const max = params.key2
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
        addToCart(context, data) {
            let product = context.state.cart.find(p => p.id === data.key1)
            if (product) {
                context.commit('increment', data)
                axios.post(url + 'users/me/cart')
            } else {
                context.commit('addToCart', data)
            }
        },
        decrement(context, id) {
            if (context.state.cart.length != 0) {
                let product = context.state.cart.find(p => p.id === id)
                if (product.quantity == 1) {
                    context.commit('remove', id)
                } else if (product.quantity > 1) {
                    context.commit('decrement', id)
                }
            }
        },
        updateCart({ commit }) {
            const token = 'Bearer ' + auth.getTokenLogged()
            axios.get(url + '/users/me/cart', {
                headers: {
                    'Authorization': token
                }
            }).then((res) => {
                commit('fetchCart', res.data)
            }).catch(error => {
                console.log(error.response)
            })
        },
        searchBrand({ commit }, query) {
            axios.post(url + 'brands/search', { "query": query }, { headers: { 'Content-Type': 'application/json' } }).then((res) => {
                commit('fetchBrands', res.data)
            }).catch(error => {
                console.log(error.response)
            })
        }
    },
    modules: {

    }
})