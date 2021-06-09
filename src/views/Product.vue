<template>
  <div class="content">
    <b-row class="mt-5">
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
                      :to="{ name: 'ProductDetail', params: { id: item._id } }"
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
      <b-col>
        <b-card>
          <b-row class="pb-3">
            <form v-on:submit.prevent="search2">
              <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Buscar"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  v-model="querySearch"
                />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search" @click.prevent="search2"></i>
                </span>
              </div>
            </form>
          </b-row>
          <b-row class="pb-3">
            <label for="customRange" class="form-label">Precio minimo</label>
            <b-col class="col-9">
              <input
                type="range"
                class="form-range"
                min="0"
                max="1000"
                step="10"
                id="customRange"
                v-model="min"
              />
            </b-col>
            <b-col>
              <b>{{ min }}</b>
            </b-col>
          </b-row>
          <b-row class="pb-3">
            <label for="customRange2" class="form-label">Precio maximo</label>
            <b-col class="col-9">
              <input
                type="range"
                class="form-range"
                min="0"
                max="1000"
                step="10"
                id="customRange2"
                v-model="max"
              />
            </b-col>
            <b-col>
              <b>{{ max }}</b>
            </b-col>
          </b-row>
          <b-row class="pb-3">
            <b-col>
              <div class="form-check form-group">
                <input
                  v-model="selected"
                  class="form-check-input"
                  type="radio"
                  :value="1"
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1"
                  >Hombre</label
                >
              </div>
            </b-col>
            <b-col>
              <div class="form-check form-group">
                <input
                  v-model="selected"
                  class="form-check-input"
                  type="radio"
                  :value="2"
                  id="scheduleCheck"
                />
                <label class="form-check-label" for="scheduleCheck"
                  >Mujer</label
                >
              </div>
            </b-col>
            <b-col>
              <div class="form-check form-group">
                <input
                  v-model="selected"
                  class="form-check-input"
                  type="radio"
                  :value="3"
                  id="scheduleCheck"
                />
                <label class="form-check-label" for="scheduleCheck"
                  >Unisex</label
                >
              </div>
            </b-col>
            <b-col>
              <div class="form-check form-group">
                <input
                  v-model="selected"
                  class="form-check-input"
                  type="radio"
                  :value="4"
                  id="scheduleCheck"
                />
                <label class="form-check-label" for="scheduleCheck">Bebé</label>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button v-on:click="clean">Limpiar</b-button>
            </b-col>
          </b-row>
        </b-card>
        <b-row class="pt-5">
          <CartProduct />
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CartProduct from "../components/CartProduct.vue";

export default {
  name: "Product",
  data: () => ({
    querySearch: "",
    min: 0,
    max: 1000,
    selected: "none",
  }),
  components: {
    CartProduct,
  },
  beforeCreate() {
    this.$store.dispatch("fetchProductsData");
  },
  methods: {
    clean() {
      this.$store.dispatch("fetchProductsData");
      this.min = 0;
      this.max = 1000;
      this.querySearch = "";
      this.selected = "none";
    },
    async search2() {
      if (this.selected != "none") {
        var v = ["Man", "Women", "Unisex", "Baby"];
        this.selected = v[this.selected - 1];
      }
      const params = {
        key1: this.min,
        key2: this.max,
        key3: this.querySearch,
        key4: this.selected,
      };
      await this.$store.dispatch("fetchProductsSearch2", params);
    },
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    },
    decrement(id) {
      this.$store.dispatch("decrement", id);
    },
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

input[type="range"]::-webkit-slider-thumb {
  background: #3e3e3f;
}
</style>