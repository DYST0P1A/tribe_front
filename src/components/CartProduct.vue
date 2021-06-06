<template>
   <b-container class="CartHome">
        <b-card  class="font-weight-bold">
            <div v-for="(item, index) in $store.state.cart" :key="item.id">
              <b-row>
                <b-col>
                  <b-card-text align="left">
                    {{ item.name }} x {{ item.amount }}
                  </b-card-text>
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
              <b-button variant="primary btn-tribe" to="/cart">Checkout</b-button>
            </div>
          </b-card>
    </b-container>
</template>

<script>
export default {
  name: 'CartHome'
}
</script>

<style>

.CartHome{
  margin-top: 10%;
}
</style>