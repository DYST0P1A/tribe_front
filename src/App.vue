<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />

    <a name="Up" class="arrow-up"></a>

    <div id="nav">
      <div class="nav-left">
        <img
          src="logo-tribe.png"
          alt="TRIBE - Streetwear Clothes"
          title="TRIBE - Streetwear Clothes"
        />
      </div>
      <div class="nav-center">
        <router-link to="/">HOME</router-link>
        <router-link to="/productos">PRODUCTOS</router-link>
        <router-link to="/marcas">MARCAS</router-link>
        <router-link to="/categorias">CATEGORIAS</router-link>
        <router-link to="/productosUsados">COMPRAVENTA</router-link>
        <router-link to="/addbrandproduct">ADMIN-ADD</router-link>
      </div>
      <div class="nav-right">
        <li>
          <form class="searcher">
            <button class="btn-searcher">
              <i class="fa fa-search fa-md"></i>
            </button>
            <input
              class="input-searcher"
              type="search"
              id="mySearch"
              name="s"
              placeholder="Buscar..."
              size="15"
            />
          </form>
        </li>
        <li>
          <router-link to="/loginregister"
            ><i class="fa fa-user fa-lg"></i
          ></router-link>
        </li>
        <li>
          <router-link to="/cart"
            ><i class="fa fa-shopping-cart fa-lg"></i
          ></router-link>
        </li>
      </div>
    </div>
    <router-view />
    <p>
      <a href="#Up"><i class="fas fa-chevron-up"></i></a>
    </p>
    <div class="footer block">
      <div class="footer_menu">
        <div class="sobre_nosotros">
          <div class="title">SOBRE NOSOTROS</div>
          <ul>
            <li><a href="">¿Quiénes somos?</a></li>
            <li><a href="">Nuestras ventajas</a></li>
          </ul>
        </div>
        <div class="redes_sociales">
          <div class="title">REDES SOCIALES</div>
          <ul>
            <li>
              <a href="">
                <div class="facebook">
                  <i class="fab fa-facebook-f"></i>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="twitter"><i class="fab fa-twitter"></i></div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="instagram">
                  <i class="fab fa-instagram"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="ayuda">
          <div class="title">CONTACTO</div>
          <ul>
            <li>trib3.com@gmail.com</li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>
          <a href="#">Política de privacidad</a> © 2021 TRIBE. Todos los
          derechos reservados
        </p>
      </div>
    </div>
  </div>
</template>

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
ul {
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

#nav {
  width: 100%;
  height: 65px;
  background: black;
  padding: 20px 2%;
}

#nav a {
  font-weight: bold;
  color: white;
  padding: 10px;
  text-decoration: none;
}

#nav a:hover {
  text-decoration: underline;
}

.nav-left {
  float: left;
  position: absolute;
  top: 10px;
  left: 20px;
}

#nav .nav-center {
  width: 65%;
  height: 60px;
  margin-left: 190px;
}

#nav .nav-center a {
  padding: 0 25px;
  float: left;
}

.nav-right {
  float: right;
  position: absolute;
  right: 2%;
  top: 2.2%;
  width: 25%;
}

.nav-right li {
  display: inline-block;
  vertical-align: middle;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #f5b652;
}

#nav a.router-link-exact-active:hover {
  text-decoration: none;
}

.controls .btn-tribe {
  background-color: #f5b652;
  border-color: #f5b652;
  color: white;
  margin: 5px 10px;
}

.controls .btn-tribe:hover {
  color: black;
  background: #db9f3f;
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

.btn-searcher {
  color: #f5b652;
  background: black;
  border: 0px;
}

.box input {
  color: #f5b652;
  border: 0px;
}

.input-searcher {
  background: black;
  border: 0px;
  color: #f5b652;
}

.searcher ::placeholder {
  color: #fff;
}
</style>
