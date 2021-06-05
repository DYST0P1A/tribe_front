<template>
      <div class="content">
        <div class="card-product" v-for="item in $store.state.brands" :key="item.id">
          <img :src="item.logo" class="product-img" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  created() {
      this.$store.dispatch('fetchBrandsData')
  }
}
</script>

<style>

.content{
  width: 80%;
  margin: auto;
}

.card-product {
  border: 1px solid black;
  width: 250px;
  margin: 20px 40px 20px 25px;
  display: inline-block;
  box-shadow: #a09f9f 2px 3px 5px 1px ;
}

.product-img{
  width: 150px;
  height: 120px;
  margin: 15px;
  vertical-align: middle;
}

.product-name{
  font-size: 18px;
  margin: 10px 20px;
}

.btn-product{
  margin-top: 10px;
}
</style>