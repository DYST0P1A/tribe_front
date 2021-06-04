<template>
<div class="forms">
  <div class="form-login">
    <form class="form-horizontal">
      <fieldset>
        <div id="legend">
          <legend class="title">Añadir marca</legend>
        </div>
    
        <div class="control-group">
          <!-- Button -->
          <div class="controls">
            <router-link :to="{name: 'AddBrand'}">
              <button class="btn btn-login">Añadir marca</button>
            </router-link>
          </div>
        </div>
      </fieldset>
    </form>
  </div>


<div class="form-register">
    <form class="form-horizontal">
      <fieldset>
        <div id="legend">
          <legend class="title">Añadir producto</legend>
        </div>
    
        <div class="control-group">
          <!-- Button -->
          <div class="controls">
            <router-link :to="{name: 'AddProduct'}">
            <button class="btn btn-register">Añadir producto</button>
            </router-link>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.controls{
  margin: 5px 0 30px 0;
}

.title{
  margin: 50px 0 40px 0;
}

.forms{
  display: inline-block;
  width: 50%;
  margin-top: 40px;
}

.form-register{
  float: right;
  width: 50%;
  border-left: 2px solid #f5b652;
}

.form-login{
  float: left;
  width: 50%;
}

.controls .btn-register, .controls .btn-login{
  background-color: #f5b652;
  border-color: #f5b652;
  color: white;
}

.controls .btn-register:hover, .controls .btn-login:hover{
  color: black;
}
</style>