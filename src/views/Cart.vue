<template>
  <b-container class="cart">
     <h1>CART</h1>
          <b-card  class="font-weight-bold">
            <div v-for="(item, index) in $store.state.cart" :key="item.id">
              <b-row class="mt-4">
                <b-col cols="3">
                  <b-button size="sm" variant="outline-danger" @click="$store.commit('removeProduct', item.id)">
                    <b-icon-trash></b-icon-trash>
                  </b-button>
                </b-col>
                <b-col cols="3">
                  <b-card-text>
                    {{ item.name }} x {{ item.amount }}
                  </b-card-text>
                </b-col>
                <b-col cols="3" class="pr-0">
                  <b-button class="mr-2" variant="primary" @click="$store.commit('increment', item.id)">
                    +
                  </b-button>
                  <b-button variant="primary" @click="$store.commit('decrement', item.id)">
                    - 
                  </b-button>
                </b-col>
                <b-col>  
                  <b-card-text align="right">
                    {{ $store.getters.totalByRow[index] }} €
                  </b-card-text>
                </b-col>
              </b-row>
            </div>
            <hr/>
            <b-card-text align="left">
              <b-row>
                <b-col>
                  TOTAL: 
                </b-col>
                <b-col>
                  <b-card-text align="right">
                    {{ $store.getters.totalCart }} €
                  </b-card-text>
                </b-col>
              </b-row>
            </b-card-text>
              <div class="controls">
                <router-link to="/checkout"><button class="btn btn-tribe" v-on:click="checkout">Checkout</button></router-link>
              </div>
          </b-card>
  </b-container>
</template>

<script>
import store from "../store/index.js";

export default {
  name: "cart",
  components: {},
  methods: {
    checkout() {
      store.dispatch('createOrders');
      store.dispatch('deleteCart');
    }
  }
};
</script>

<style>

.font-weight-bold {
  width: 50%;
  margin: auto;
}

</style>
