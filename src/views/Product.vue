<template>
      <div>
          <h1>PRODUCTOS</h1>
        <div class="card-product" v-for="item in $store.state.products" :key="item.id">
          <img :src="item.image" class="product-img" />
          <span class="product-name">
            {{ item.name }} 
          </span>
          <span class="product-price">
            {{ item.price }}€
          </span>
        <div class="controls">
            <button class="btn btn-tribe">View</button>
            <button class="btn btn-tribe" @click="$store.dispatch('addToCart', item.id)">Add to cart</button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  created() {
      this.$store.dispatch('fetchProductsData')
  }
}
</script>

<style>

.product-name{
    font-size: 15px;
}

.product-price{
    font-size: 20px;
}

</style>