<template>
<div class="forms">
  <div class="form">
    <form class="form-horizontal" action='' method="POST">
      <fieldset>
        <div id="legend">
          <legend class="title">Añadir producto</legend>
        </div>
    
        <div class="control-group">
          <label class="control-label" for="productname">Nombre</label>
          <div class="controls">
            <input type="text" id="productname" name="productname" placeholder="" class="input-xlarge">
          </div>
        </div>
    
        <div class="control-group">
          <label class="control-label" for="productdescription">Descripción</label>
          <div class="controls">
            <input type="textarea" id="productdescription" name="productdescription" placeholder="" class="input-xlarge">
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" for="productprice">Precio</label>
          <div class="controls">
            <input type="text" id="productprice" name="productprice" placeholder="" class="input-xlarge">
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" for="productcategory">Categoría</label>
          <div class="controls">
            <input type="text" id="productcategory" name="productcategory" placeholder="" class="input-xlarge">
          </div>
        </div>
    
        <div class="control-group">
          <label class="control-label" for="productsize">Talla</label>
          <div class="controls">
            <input type="text" id="productsize" name="productsize" placeholder="" class="input-xlarge">
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" for="productimage">Imagen</label>
          <div class="controls">
            <input type="file" id="productimage" name="productimage" placeholder="" class="input-xlarge">
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" for="productbrandid">Id marca</label>
          <div class="controls">
            <input type="text" id="productbrandid" name="productbrandid" placeholder="" class="input-xlarge">
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" for="productbrandname">Nombre marca</label>
          <div class="controls">
            <input type="text" id="productbrandname" name="productbrandname" placeholder="" class="input-xlarge">
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" for="productgender">Género</label>
          <div class="controls">
            <input type="text" id="productgender" name="productgender" placeholder="" class="input-xlarge">
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" for="productcolor">Color</label>
          <div class="controls">
            <input type="text" id="productcolor" name="productcolor" placeholder="" class="input-xlarge">
          </div>
        </div>

        <div class="control-group">
          <!-- Button -->
          <div class="controls">
            <button class="btn btn-login">Añadir producto</button>
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