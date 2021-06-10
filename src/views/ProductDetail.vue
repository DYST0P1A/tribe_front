
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
            style="text-shadow: 1px 1px 2px #333"
          >
            <div v-for="item in $store.state.images" :key="item.image">
              <b-carousel-slide :img-src="item.image"></b-carousel-slide>
            </div>
          </b-carousel>

          <b-card-text >
            <b-row class="mt-2">
              <b-col class="col-10" align="left">
                {{ $store.state.product.name }}
              </b-col>
              <b-col  class="col-2" align="right"> {{ $store.state.product.price }} € </b-col>
            </b-row>
          </b-card-text>

          <b-card-text bg-variant="dark" align="left">
            {{ $store.state.product.description }}
          </b-card-text>

          <b-row class="pb-4">
            <b-col>
              <label class="control-label" for="brandname">Tallas</label>
            </b-col>
            <b-col align="left">
              <b-form-select v-model="sizeSelected" :options="$store.state.onlySizes">
                <template #first>
                  <b-form-select-option :value="null" disabled
                    >-- Escoge talla --</b-form-select-option
                  >
                </template>
              </b-form-select>
            </b-col>
          </b-row>
          <p v-if="error" class="error">Escoge la talla</p>
          <p v-if="success" class="error">¡Añadido al carrito!</p>
          <div class="controls">
            <b-button class="btn btn-tribe m-5" to="/productos">Volver</b-button>
            <button
              class="btn btn-tribe m-5"
              @click="addToCart()"
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
import auth from "@/logic/auth";
export default {
  name: "ProductDetail",
  components: {},
  data:() => ({
    sizeSelected: "",
    error: false,
    success: false
  }),
  created() {
    store.dispatch("fetchProduct", this.$route.params.id);
  },
  methods: {
    addToCart() {
      if(this.sizeSelected === "") {
        this.error = true
      }
      else {
        this.error = false
        const data = {"key1": store.state.product._id, "key2": this.sizeSelected, "key3": store.state.product.brand_id}
        this.$store.dispatch('addToCart', data)
        auth.operationCart(data, "insert")
        this.success=true
      }
    }
  }
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