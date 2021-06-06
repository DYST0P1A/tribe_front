<template>
<div class="content">
  <b-row>
    <b-col cols="8">
      <b-row>
        <b-card-group>
          <b-col
            cols="4"
            v-for="item in $store.state.productsUsed"
            :key="item._id"
          >
            <b-card
              bg-variant="light"
              border-variant="dark"
              :header="item.name"
              :img-src="item.images[0].image"
              class="mb-md-2  card-producto"
            >
             <div class="card-content">
              <b-card-text class="font-weight-bold" align="center">
                VENDEDOR: {{ item.nameSeller }} 
              </b-card-text>

              <b-card-text class="font-weight-bold" align="right">
                {{ item.price }} €
              </b-card-text>

              <div class="controls">
                <router-link
                  :to="{ name: 'ProductDetail', params: { id: item._id } }"
                >
                  <b-button class="mr-3 btn-tribe" variant="primary">Ver</b-button>
                </router-link>

                <b-button
                  class="btn-tribe"
                  variant="primary"
                  @click="$store.dispatch('addToCart', item)"
                  >Añadir</b-button
                >

                <b-button
                  class="ml-2"
                  variant="danger"
                  @click="$store.dispatch('decrementProduct', item.id)"
                  >-</b-button
                >
                </div>
              </div>
            </b-card>
          </b-col>
        </b-card-group>
      </b-row>
    </b-col>
    <b-col>
      <CartProduct />
    </b-col>
  </b-row>
</div>
</template>

<script>
import store from "../store/index.js";
import CartProduct from "../components/CartProduct.vue";

export default {
  name: "Product",
  components: {
    CartProduct,
  },
  beforeCreate() {
    store.dispatch("fetchProductsUsedData");
  },
};
</script>

<style>
.card-producto{
  position: relative;
  border: 1px solid black;
  width: 225px;
  height: 510px;
  margin: 20px 40px 20px 25px;
  display: inline-block;
  box-shadow: #a09f9f 2px 3px 5px 1px ;
  vertical-align: middle;
}
</style>