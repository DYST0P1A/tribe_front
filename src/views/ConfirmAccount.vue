<template>
  <div>
    <h1>Registro realizado con exito</h1>
    <h2>Por favor confirma tu cuenta mediante el enlace que se le ha enviado al correo</h2>
  </div>
</template>

<script>
export default {};
</script>

<style>
.categories {
  width: 80%;
  height: 1500px;
  margin: auto;
  position: relative;
}

#box-cta:hover,
#box-cta-dark:hover {
  color: #f5b652;
  border-bottom: 1px solid #f5b652;
}

.box-full-content {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

#box-cta {
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #ffffff;
  display: block;
  margin: 0 auto;
  padding-bottom: 5px;
  position: relative;
  width: max-content;
  font-weight: 500;
}

#box-title {
  font-size: 22px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 24px;
  font-weight: 600;
}

#box-title,
#box-cta {
  color: #ffffff;
  text-align: center;
  font-family: "hco gotham", "Montserrat", Helvetica, sans-serif;
  text-decoration: none;
}

.first,
.second,
.third {
  width: 100%;
  height: 30%;
}

.first img,
.second img,
.third img,
.fourth img {
  width: 100%;
  height: 100%;
}

.second-first,
.second-second {
  position: relative;
  width: 47%;
  height: 100%;
}

.box-left,
.second-first {
  float: left;
}

.box-right,
.second-second {
  float: right;
}

.fourth {
  width: 100%;
  height: 30%;
  text-align: center;
}

.fourth-first,
.fourth-second,
.fourth-third {
  position: relative;
  width: 30%;
  height: 100%;
  display: inline-block;
}

.zoom {
  transition: all 0.4s ease;
}

.zoom:hover {
  transform: scale(1.1);
}

.block {
  margin-top: 5%;
}

.box {
  overflow: hidden;
  position: relative;
}

.footer {
  color: #dcdcdc;
  background-color: #313131;
  z-index: 1;
}

.footer .footer_menu {
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0px 8%;
}

.footer .footer_menu .title {
  margin: 50px 0px;
  color: #f5b652;
  font-size: 20px;
}

.footer .footer_menu ul li a {
  display: block;
  margin-bottom: 6px;
  color: #dcdcdc;
  text-decoration: none;
}

.footer .footer_menu ul li a:hover {
  text-decoration: underline;
}

.footer .redes_sociales {
  text-align: center;
}

.footer .redes_sociales ul {
  display: flex;
  justify-content: center;
}

.footer .redes_sociales ul li a {
  display: block;
  margin: 0 5px;
  font-size: 24px;
  width: 35px;
  height: 35px;
  color: #3d3d3d;
  background: #dcdcdc;
  border-radius: 50px;
  line-height: 38px;
}

.footer .redes_sociales ul li a:hover {
  color: #f5b652;
}

.footer .copyright {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.footer .copyright a {
  color: #dcdcdc;
  text-decoration: none;
}

.footer .copyright p {
  margin-bottom: 20px;
}

.footer .copyright a:hover {
  text-decoration: underline;
}
</style>