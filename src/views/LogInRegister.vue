<template>
<div class="forms">
  <div class="form-login">
    <form class="form-horizontal" action='' method="POST">
      <fieldset>
        <div id="legend">
          <legend class="title">Ya tengo cuenta</legend>
        </div>
    
        <div class="control-group">
          <!-- E-mail -->
          <label class="control-label" for="email">E-mail</label>
          <div class="controls">
            <input type="text" id="email" name="email" placeholder="" class="input-xlarge">
          </div>
        </div>
    
        <div class="control-group">
          <!-- Password-->
          <label class="control-label" for="password">Contraseña</label>
          <div class="controls">
            <input type="password" id="password" name="password" placeholder="" class="input-xlarge">
          </div>
        </div>
    
        <div class="control-group">
          <!-- Button -->
          <div class="controls">
            <button class="btn btn-login">Iniciar Sesión</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  
  <div class="form-register">
    <form class="form-horizontal" action='' method="POST">
      <fieldset>
        <div id="legend">
          <legend class="title">Crear cuenta</legend>
        </div>
        <div class="control-group">
          <!-- Username -->
          <label class="control-label"  for="name">Nombre</label>
          <div class="controls">
            <input type="text" id="name" name="name" placeholder="" class="input-xlarge">
          </div>
        </div>
            <div class="control-group">
          <!-- Username -->
          <label class="control-label"  for="lastname">Apellido</label>
          <div class="controls">
            <input type="text" id="lastname" name="lastname" placeholder="" class="input-xlarge">
          </div>
        </div>

           <div class="control-group">
          <!-- Phone Number -->
          <label class="control-label" for="phone">Número de teléfono</label>
          <div class="controls">
            <input type="text" id="phone" name="phone" placeholder="" class="input-xlarge">
          </div>
        </div>
    
        <div class="control-group">
          <!-- E-mail -->
          <label class="control-label" for="email">E-mail</label>
          <div class="controls">
            <input type="text" id="email" name="email" placeholder="" class="input-xlarge">
          </div>
        </div>
    
        <div class="control-group">
          <!-- Password-->
          <label class="control-label" for="password">Contraseña</label>
          <div class="controls">
            <input type="password" id="password" name="password" placeholder="" class="input-xlarge">
          </div>
        </div>
    
        <div class="control-group">
          <!-- Button -->
          <div class="controls">
            <button class="btn btn-register">Registrarme</button>
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