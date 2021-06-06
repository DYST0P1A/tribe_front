<template>
  <b-row>
    <b-col cols="8">
      <b-row>
        <b-card-group>
          <b-col cols="4" v-for="item in $store.state.products" :key="item._id">
            <b-card
              bg-variant="light"
              border-variant="dark"
              :header="item.name"
              :img-src="item.images[0].image"
              class="mb-md-2"
            >
              <b-card-text class="font-weight-bold" align="right">
                {{ item.price }} €
              </b-card-text>

              <router-link
                :to="{ name: 'ProductDetail', params: { id: item._id } }"
              >
                <b-button class="mr-3" variant="primary">View</b-button>
              </router-link>

              <b-button
                variant="primary"
                @click="$store.dispatch('addToCart', item)"
                >Add</b-button
              >

              <b-button
                class="ml-2"
                variant="danger"
                @click="$store.dispatch('decrementProduct', item.id)"
                >-</b-button
              >
            </b-card>
          </b-col>
        </b-card-group>
      </b-row>
    </b-col>
    <b-col>
      <CartProduct />
    </b-col>
  </b-row>
</template>

<script>
import store from "../store/index.js";
import CartProduct from "../components/CartProduct.vue";

export default {
  name: "Product",
  components: {
    CartProduct
  },
  beforeCreate() {
    store.dispatch("fetchProductsData");
  },
};
</script>

<style>
.product-name {
  font-size: 15px;
}

.product-price {
  font-size: 20px;
}
</style>