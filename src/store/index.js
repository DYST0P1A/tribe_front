// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// const url = "https://pgomez-ecommerce-api.azurewebsites.net/"

// export default new Vuex.Store({
//     state: {
//         products: [],
//         cart: [],
//         product: null,
//         images: []
//     },
//     mutations: {
//         LOAD_PRODUCTS: (state, data) => (state.products = data),
//         LOAD_PRODUCT: (state, data) => (state.product = data, state.images = data.images),
//         DELETE_CART: (state) => (state.cart = []),
//         addToCart(state, params) {
//             let product = state.products.find(product => product.id === params.param1)
//             state.cart.push({
//                 id: product.id,
//                 idCart: params.param2,
//                 name: product.name,
//                 price: product.price,
//                 amount: 1
//             })
//         },
//         increment(state, id) {
//             let product = state.cart.find(product => product.id === id)
//             product.amount++
//         },
//         decrement(state, id) {
//             let product = state.cart.find(product => product.id === id)
//             if (product != null) {
//                 product.amount--
//                     if (product.amount <= 0) {
//                         var aux = 0
//                         state.cart.forEach((el, index) => {
//                             if (el.id == id) aux = index;
//                         })
//                         state.cart.splice(aux, 1)
//                     }
//             }
//         },
//         removeProduct(state, id) {
//             var aux = 0
//             state.cart.forEach((el, index) => {
//                 if (el.id == id) aux = index;
//             })
//             state.cart.splice(aux, 1)
//         }
//     },
//     getters: {
//         totalCart(state) {
//             return state.cart.map(p => p.price * p.amount)
//                 .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
//         },
//         totalByRow(state) {
//             return state.cart.map(p => p.price * p.amount)
//         },
//         getImages(state) {
//             return state.images
//         }
//     },
//     actions: {
//         fetchData(context) {
//             fetch(url + 'products')
//                 .then(response => response.json())
//                 .then(response => {
//                     context.commit('LOAD_PRODUCTS', response)
//                 })
//         },
//         decrementProduct(context, id) {
//             let product = context.state.cart.find(product => product.id === id)
//             if (product) {
//                 if (product.amount >= 1) {
//                     let aux = product.amount - 1
//                     const requestOptions = {
//                         method: "PUT",
//                         headers: { "Content-Type": "application/json" },
//                         body: JSON.stringify({
//                             id: product.idCart,
//                             product: {
//                                 id: product.id
//                             },
//                             Quantity: aux
//                         })
//                     };
//                     fetch(url + `carts/${product.idCart}`, requestOptions)
//                         .then(result => result.text())
//                     context.commit('decrement', id)
//                 }
//             }
//         },
//         async addToCart(context, item) {
//             let product = context.state.cart.find(product => product.id === item.id)
//             if (product) {
//                 let aux = product.amount + 1
//                 const requestOptions = {
//                     method: "PUT",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({
//                         id: product.idCart,
//                         product: {
//                             id: product.id
//                         },
//                         Quantity: aux
//                     })
//                 };
//                 fetch(url + `carts/${product.idCart}`, requestOptions)
//                     .then(result => result.text())
//                 context.commit('increment', item.id)
//             } else {
//                 const requestOptions = {
//                     method: "POST",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({
//                         id: 0,
//                         Product: item,
//                         Quantity: 1
//                     })
//                 };
//                 const response = await fetch(url + 'carts', requestOptions);
//                 var idCartAux = await response.json();
//                 var params = { 'param1': item.id, 'param2': idCartAux }
//                 context.commit('addToCart', params)
//             }
//         },
//         fetchProduct(context, id) {
//             fetch(url + `products/${id}`)
//                 .then(response => response.json())
//                 .then(response => {
//                     context.commit('LOAD_PRODUCT', response)
//                 })
//         },
//         deleteCart(context) {
//             fetch(url + 'carts', {
//                     method: 'DELETE',
//                 }).then(res => res.text())
//                 .then(context.commit('DELETE_CART'))
//         },
//         createOrders(context) {
//             let cart = []
//             for (const p in context.state.cart) {
//                 var jsonArray = [{
//                     'product': { 'id': context.state.cart[p].id },
//                     'quantity': context.state.cart[p].amount
//                 }];
//                 cart = cart.concat(jsonArray);
//             }
//             const requestOptions = {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(cart)
//             };
//             fetch(url + 'orders', requestOptions)
//                 .then(response => response.json())
//         }
//     },
//     modules: {}
// })