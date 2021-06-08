<template>
  <div>
    <h1>Registro realizado con exito</h1>
    <h2>
      Por favor confirma tu cuenta mediante el enlace que se le ha enviado al
      correo
    </h2>
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
</style>