
<template>
  <b-container class="ProductUsedDetail">
    <b-row>
      <b-col></b-col>
      <b-col cols="6">
        <b-card>
          <b-carousel
            id="myCarousel"
            controls
            :interval="0"
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333"
          >
            <div v-for="item in $store.state.images" :key="item.image">
              <b-carousel-slide :img-src="item.image"></b-carousel-slide>
            </div>
          </b-carousel>

          <b-card-text class="font-weight-bold" align="right">
            <b-row class="mt-2">
              <b-col align="left">
                {{ $store.state.productUsed.name }}
              </b-col>
              <b-col align="right">
                {{ $store.state.productUsed.price }} €
              </b-col>
            </b-row>
          </b-card-text>

          <b-card-text bg-variant="dark" align="left">
            {{ $store.state.productUsed.description }}
          </b-card-text>
          <b-card-text bg-variant="dark" align="center">
            Talla: {{ $store.state.productUsed.size }}
          </b-card-text>
          <div class="controls">
            <b-button class="btn btn-tribe" to="/productos">Volver</b-button>
            <button
              class="btn btn-tribe"
              @click="$store.dispatch('addToCart', item.id)"
            >
              Añadir
            </button>
          </div>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>


<script>
import store from "../store/index.js";

export default {
  name: "ProductUsedDetail",
  components: {},
  created() {
    store.dispatch("fetchProductUsed", this.$route.params.id);
  },
};
</script>

<style>
.carousel-control-next,
.carousel-control-prev,
.carousel-indicators {
  filter: invert(100%);
}

.carousel-control-prev {
  margin-left: -100px;
}

.carousel-control-next {
  margin-right: -100px;
}
</style>