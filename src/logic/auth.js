import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "https://tribeback.herokuapp.com/api/users";

export default {
    setLogged(name, email, token) {
        Cookies.set("nameLogged", name);
        Cookies.set("emailLogged", email);
        Cookies.set("tokenLogged", token);

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
    deleteUserLogged() {
        Cookies.remove('nameLogged');
        Cookies.remove('emailLogged');
        Cookies.remove('tokenLogged');
        Cookies.remove('userLogged');
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
        return axios.post(ENDPOINT_PATH + "/login", {
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
        return axios.post(ENDPOINT_PATH + '/me/changepass', {
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
        return axios.get(ENDPOINT_PATH + '/me', { headers: { 'Authorization': token } })
    }
};