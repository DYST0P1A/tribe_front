<template>
<div class="forms">
  <div class="form">
    <form class="form-horizontal" action='' method="POST">
      <fieldset>
        <div id="legend">
          <legend class="title">Añadir marca</legend>
        </div>
    
        <div class="control-group">
          <label class="control-label" for="brandname">Nombre</label>
          <div class="controls">
            <input type="text" id="brandname" name="brandname" placeholder="" class="input-xlarge">
          </div>
        </div>
    
        <div class="control-group">
          <label class="control-label" for="brandlogo">Logo</label>
          <div class="controls">
            <input type="textarea" id="brandlogo" name="brandlogo" placeholder="" class="input-xlarge">
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" for="brandphone">Teléfono</label>
          <div class="controls">
            <input type="text" id="brandphone" name="brandphone" placeholder="" class="input-xlarge">
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" for="brandemail">E-mail</label>
          <div class="controls">
            <input type="text" id="brandemail" name="brandemail" placeholder="" class="input-xlarge">
          </div>
        </div>

        <div class="control-group">
          <div class="controls">
            <button class="btn btn-login">Añadir marca</button>
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

</style>