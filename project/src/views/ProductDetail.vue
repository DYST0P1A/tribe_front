<template>
  <b-container class="ProductDetail">
    <b-row>
      <b-col></b-col>
      <b-col cols="6">
        <b-card>
          <b-carousel
            id="myCarousel"
            controls
            :interval="0"
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333;"
          >
            <div v-for="image in $store.state.images" :key="image.id">
              <b-carousel-slide :img-src="image.url"></b-carousel-slide>
            </div>
            
          </b-carousel>
          
          <b-card-text class="font-weight-bold" align="right">
            <b-row class="mt-2">
              <b-col align="left">
                {{ $store.state.product.name }}
              </b-col>
              <b-col align="right">
                {{ $store.state.product.price }} €
              </b-col>
            </b-row>
          </b-card-text>

          <b-card-text bg-variant="dark" align="left">
            {{ $store.state.product.description }}
          </b-card-text>

          <b-button class="mr-4" variant="primary" to="/">Back</b-button>
                  
          <b-button
            variant="primary"
            @click="$store.dispatch('addToCart', $store.state.product)"
            >Add</b-button
          >
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>


<script>
import store from "../store/index.js";

export default {
  name: "ProductDetail",
  components: {},
  created() {
    store.dispatch("fetchProduct", this.$route.params.id);
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