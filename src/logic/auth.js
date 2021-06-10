import axios from "axios";
import Cookies from "js-cookie";

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
    async operationCart(data, operation) {
        const res = await axios.post(ENDPOINT_PATH + '/brands/searchById', { "id": data.key3 })
        console.log(res)
        const token = 'Bearer ' + this.getTokenLogged()
        const msg = {
            "operation": operation,
            "id_item": data.key1,
            "sizeSelected": data.key2,
            "quantity": 1,
            "type": "brand",
            "emailSeller": res.data.email
        }
        return axios.post(ENDPOINT_PATH + '/users/me/cart', msg, {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
            }
        })
    },
};