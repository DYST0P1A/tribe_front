<template>
  <div id="app">
    
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
   
    <a name="Up" class="arrow-up"></a>
 
    <div id="nav">
      <div class="nav-left">
        <img src="logo-tribe.png" alt="TRIBE - Streetwear Clothes" title="TRIBE - Streetwear Clothes">
      </div>
        <router-link to="/" class="nav-center">HOME</router-link>
        <router-link to="/ropa" class="nav-center">ROPA</router-link>
        <router-link to="/zapatillas" class="nav-center">ZAPATILLAS</router-link>
        <router-link to="/accesorios" class="nav-center">ACCESORIOS</router-link>
      <div class="nav-right">
        <li><router-link to="/loginregister"><i class="fa fa-user fa-lg"></i></router-link></li>
        <li><router-link to="/cart"><i class="fa fa-shopping-cart fa-lg"></i></router-link></li>
      </div>
    </div>
    <router-view />
    <p>
      <a href="#Up"><i class="fas fa-chevron-up"></i></a>
    </p>
  </div>
  
</template>

<style>

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body{
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
  width: 200vh;
  height: 65px;
  background: black;
  padding: 20px 2%;
}

#nav a {
  font-weight: bold;
  color: white;
  padding: 10px;
  text-decoration: none;
  margin: auto;
}

#nav a:hover {
  text-decoration: underline;
}

.nav-left{
  float: left;
  position: absolute;
  top: 10px;
  left: 20px;
}

#nav .nav-center {
  padding: 0 40px;
}

.nav-right{
  float: right;
}

.nav-right li{
  display: inline;
}

#nav a.router-link-exact-active {
  color: #f5b652;
}

#nav a.router-link-exact-active:hover {
  text-decoration: none;
}

p a {
  color: white;
}

p a:hover {
  color: black;
}

p a i{
  position: fixed;
	padding: 15px;
	font-size: 15px;
	cursor: pointer;
	bottom: 20px;
  right: 20px;
  background: #f5b652;
}

.box-full-content a{
  text-decoration: none;
}

</style>
