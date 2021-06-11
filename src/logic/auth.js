import axios from "axios";
import Cookies from "js-cookie";
import store from "../store/index.js";

const ENDPOINT_PATH = "https://tribeback.herokuapp.com/api";

export default {
    setLogged(name, email, token, type) {
        Cookies.set("nameLogged", name);
        Cookies.set("emailLogged", email);
        Cookies.set("tokenLogged", token);
        Cookies.set("typeLogged", type);
    },
    getNameLogged() {
        return Cookies.get("nameLogged");
    },
    getEmailLogged() {
        return Cookies.get("emailLogged");
    },
    getTokenLogged() {
        return Cookies.get("tokenLogged");
    },
    getTypeLogged() {
        return Cookies.get("typeLogged");
    },
    deleteUserLogged() {
        Cookies.remove('nameLogged');
        Cookies.remove('emailLogged');
        Cookies.remove('tokenLogged');
        Cookies.remove('userLogged');
        Cookies.remove('typeLogged');
    },
    register(name, lastname, telephone, email, password) {
        return axios.post(ENDPOINT_PATH, {
            "name": name,
            "lastname": lastname,
            "telephone": telephone,
            "email": email,
            "password": password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    login(email, password) {
        return axios.post(ENDPOINT_PATH + "/users/login", {
            "email": email,
            "password": password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    fecthChangePass(pass, newPass) {
        const token = 'Bearer ' + this.getTokenLogged()
        return axios.post(ENDPOINT_PATH + '/users/me/changepass', {
            "oldpassword": pass,
            "password": newPass
        }, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    },
    infoUser() {
        const token = 'Bearer ' + this.getTokenLogged()
        return axios.get(ENDPOINT_PATH + '/users/me', { headers: { 'Authorization': token } })
    },
    addBrand(name, logo, telephone, email) {
        const token = 'Bearer ' + this.getTokenLogged()
        return axios.post(ENDPOINT_PATH + '/brands', {
            "name": name,
            "logo": logo,
            "telephone": telephone,
            "email": email
        }, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    },
    addProduct(data) {
        const token = 'Bearer ' + this.getTokenLogged()
        return axios.post(ENDPOINT_PATH + '/products', data, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    },
    addProductUsed(data) {
        const token = 'Bearer ' + this.getTokenLogged()
        return axios.post(ENDPOINT_PATH + '/productsUsed', data, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    },
    productUsedFav() {
        console.log("entra")
        const token = 'Bearer ' + this.getTokenLogged()
        var operation
        if (store.state.productUsed.fav) {
            operation = ""
        } else {
            operation = "insert"
        }
        const id_item = store.state.productUsed._id
        console.log(operation)
        console.log(id_item)
        return axios.post(ENDPOINT_PATH + '/users/me/favorites', {
            "operation": operation,
            "id_item": id_item
        }, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    },
    productUsedWish() {
        console.log("entra")
        const token = 'Bearer ' + this.getTokenLogged()
        var operation
        if (store.state.productUsed.wish) {
            operation = ""
        } else {
            operation = "insert"
        }
        const id_item = store.state.productUsed._id
        console.log(operation)
        console.log(id_item)
        return axios.post(ENDPOINT_PATH + '/users/me/wishlist', {
            "operation": operation,
            "id_item": id_item
        }, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    },
    productFav(fav) {
        const token = 'Bearer ' + this.getTokenLogged()
        var operation
        if (fav) {
            operation = "insert"
        } else {
            operation = "delete"
        }
        const id_item = store.state.product._id
        console.log(operation)
        console.log(id_item)
        return axios.post(ENDPOINT_PATH + '/users/me/favorites', {
            "operation": operation,
            "id_item": id_item
        }, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    },
    productWish(wish) {
        const token = 'Bearer ' + this.getTokenLogged()
        var operation
        if (wish) {
            operation = "insert"
        } else {
            operation = "delete"
        }
        const id_item = store.state.product._id
        console.log(operation)
        console.log(id_item)
        return axios.post(ENDPOINT_PATH + '/users/me/wishlist', {
            "operation": operation,
            "id_item": id_item
        }, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    },
    getFavorites() {
        const token = 'Bearer ' + this.getTokenLogged()
        return axios.get(ENDPOINT_PATH + '/users/me/favorites', {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    },
    getWishs() {
        const token = 'Bearer ' + this.getTokenLogged()
        return axios.get(ENDPOINT_PATH + '/users/me/wishlist', {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    }
};