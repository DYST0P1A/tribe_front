<template>
<div class="content">
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
            <button class="btn btn-success">Iniciar Sesión</button>
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
            <button class="btn btn-success">Registrarme</button>
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
  margin: 50px 0 20px 0;
}

.content{
  display: inline-block;
  width: 50%;
}

.form-register{
  float: right;
  width: 50%;
}

.form-login{
  float: left;
  width: 50%;
}

</style>