<template>
  <div class="content">
    <b-row>
      <b-col cols="8">
        <b-row>
          <b-card-group>
            <b-col
              cols="4"
              v-for="item in $store.state.products"
              :key="item._id"
            >
              <b-card
                bg-variant="light"
                border-variant="dark"
                :header="item.name"
                :img-src="item.images[0].image"
                class="mb-md-2 card-product"
              >
                <b-row>
                  <b-col>
                    <b-card-text align="center">
                      {{ item.price }} €
                    </b-card-text>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col>
                    <div class="controls">
                      <router-link
                        :to="{
                          name: 'ProductDetail',
                          params: { id: item._id },
                        }"
                      >
                        <b-button class="mr-3 btn-tribe">Ver</b-button>
                      </router-link>
                    </div>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-card-group>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "ProductsByBrand",
  beforeCreate() {
    this.$store.dispatch("fetchProductsByBrand", this.$route.params.name);
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

.card-product {
  position: relative;
  border: 1px solid black;
  width: 225px;
  height: 460px;
  margin: 20px 40px 20px 25px;
  display: inline-block;
  box-shadow: #a09f9f 2px 3px 5px 1px;
  vertical-align: middle;
}

.card-content {
  position: absolute;
  bottom: 0px;
}

.product-name {
  font-size: 15px;
  color: black;
  text-decoration: none;
}

.product-price {
  font-size: 20px;
}

.btn-product {
  margin-top: 10px;
}
</style>