<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <script type="application/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    
    <a name="Up" class="arrow-up"></a>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img
          src="logo-tribe.png"
          alt="TRIBE - Streetwear Clothes"
          title="TRIBE - Streetwear Clothes"
        /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link"><router-link to="/">HOME</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/productos">PRODUCTOS</router-link></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link"><router-link to="/marcas">MARCAS</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/categorias">CATEGORIAS</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><router-link to="/compraventa">COMPRAVENTA</router-link></a>
        </li>
      </ul>
      <div class="d-flex icons">
        <li>
          <a style="text-decoration: none" v-if="userLogged">{{
            userLogged
          }}</a>
        </li>
        <li>
          <router-link v-if="userLogged" to="/profile"
            ><i class="fa fa-user fa-lg"></i
          ></router-link>
          <router-link v-else to="/loginregister"
            ><i class="fa fa-user fa-lg"></i
          ></router-link>
        </li>
        <li>
          <router-link to="/cart"
            ><i class="fa fa-shopping-cart fa-lg"></i
          ></router-link>
        </li>
        <button
          v-if="userLogged"
          class="btn btn-danger"
          v-on:click="logout"
          value=""
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  </div>
</nav>

    <div class="d-flex align-items-center justify-content-center mb-3">
      <router-view />
    </div>

    <p>
      <a href="#Up"><i class="fas fa-chevron-up"></i></a>
    </p>
    <footer>
      <div class="footer-container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="about">
              <span>Sobre nosotros</span>
              <li>
                <a href="#">Quiénes somos</a>
              </li>
              <li>
                <a href="#">Nuestras ventajas</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="social">
              <span>Redes sociales</span>
              <li>
                <a href="#"><i class="fab fa-facebook-f fa-2x"></i></a>
              </li>

              <li>
                <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
              </li>

              <li>
                <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="contact">
              <span>Contacto</span>
              <li>
                <p>trib3.com@gmail.com</p>
              </li>
              <li>
                <a href="#">Guía de tallas</a>
              </li>
            </ul>
          </div>
          <div class="rights-container">
            <ul class="rights">
              <li>
                <p>
                  <a href="#" class="privacity">Política de privacidad</a> ©
                  2021 TRIBE. Todos los derechos reservados
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import auth from "@/logic/auth";

export default {
  methods: {
    logout: function () {
      auth.deleteUserLogged();
      this.$router.go(this.$router.push("/"));
    },
  },
  computed: {
    userLogged() {
      return auth.getNameLogged();
    },
    typeLogged() {
      if (auth.getTypeLogged() === "admin") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul,
li{
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar{
  padding: 0 4%;
}

.nav-link a{
  color: white;
  text-decoration: none;
  margin-left: 15px;
}

.nav-link a:hover{
  color: white;
  text-decoration: underline;
}

.nav-link a.router-link-exact-active {
  color: #f5b652;
}

.nav-link a.router-link-exact-active:hover {
  text-decoration: none;
}

.d-flex li i{
  color: white;
  padding: 15px;
}

.d-flex li a.router-link-exact-active i{
  color: #f5b652;
}

.controls .btn-tribe {
  background-color: #f5b652;
  border: 1px solid #f5b652;
  color: white;
}

.controls .btn-tribe-full {
  background-color: #f5b652;
  border: 1px solid #f5b652;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.btn-tribe-margin{
  background-color: #f5b652;
  border: 1px solid #f5b652;
  color: white;
  margin: 5px;
}

.controls .btn-tribe:hover, .btn-tribe-margin:hover {
  color: black;
  background: #db9f3f;
  border: 1px solid #f5b652;
}


p a {
  color: white;
}

p a:hover {
  color: black;
}

p a i {
  position: fixed;
  padding: 15px;
  font-size: 15px;
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  background: #f5b652;
}

.box-full-content a {
  text-decoration: none;
}

.footer-container {
  margin-top: 100px;
}
footer {
  background-color: #33383c;
}

footer ul li {
  padding: 5px 0px;
}

.about span,
.contact span,
.social span {
  color: #f5b652;
  padding: 20px;
  margin-bottom: 20px;
  display: block;
  text-transform: uppercase;
  font-size: 18px;
}

.about li a,
.contact li p,
.contact li a,
.social li a,
.rights li a,
.rights li p {
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  margin: auto;
}

.about li a:hover,
.contact li a:hover,
.rights li a:hover,
.privacity:hover {
  text-decoration: underline;
  color: #fff;
}

.about,
.contact,
.social {
  list-style: none;
}

.rights-container {
  width: 100%;
}
.social li {
  display: inline-block;
}

.fa-2x {
  margin: 0 20px;
}

.fa-2x:hover {
  color: #f5b652;
}

@media only screen and (max-width: 992px) {
  
  .icons{
    margin-left: 45%;
  }
}
</style>
