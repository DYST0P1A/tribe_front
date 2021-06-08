<template>
      <div class="content">
        <div class="card-product" v-for="item in $store.state.products" :key="item.id">
          <div class="class">
            <img :src="item.images[0].image" class="product-img" /><br>
            <span class="product-name">
              {{ item.name }} 
            </span>
            <span class="product-price"><br>
              {{ item.price }}€
            </span>
            <div class="controls">
                <router-link to="/detalleProducto/:id"><button class="btn btn-tribe">Ver</button></router-link>
                <button class="btn btn-tribe" @click="$store.dispatch('addToCart', item.id)">Añadir</button>
            </div>
          </div>
        </div>
      </div>
</template>


<script>

export default {
  name: "ProductDetail",
  components: {},
  created() {
    this.$store.dispatch('fetchProductsData')
  },
};
</script>

<style>
.carousel-control-next,
.carousel-control-prev , .carousel-indicators  {
    filter: invert(100%);
} 

.carousel-control-prev {
  margin-left: -100px;
}

.carousel-control-next {
  margin-right: -100px;
}

</style>