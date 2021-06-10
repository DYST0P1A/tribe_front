<template>
  <div class="content">
    <b-row class="mt-5">
      <b-col cols="8">
        <b-row>
          <b-card-group>
            <b-col
              cols="4"
              v-for="item in $store.state.products.slice(init, end)"
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
        <b-row class="pt-4">
          
          <b-col>
            <div class="controls">
              <b-button href="#Up" class="mr-3 btn-tribe" @click="prev">Anterior</b-button>
            </div>
          </b-col>
          <b-col>
            <label>{{numberPage}}</label>
          </b-col>
          <b-col>
            <div class="controls">
            <b-button href="#Up" class="mr-3 btn-tribe" @click="next">Siguiente</b-button>
            </div>
          </b-col>
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
                max="10000"
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
                max="10000"
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
          </b-row>
          <b-row>
            <b-col>
              <div class="controls">
                <b-button v-on:click="clean">Limpiar</b-button>
              </div>
            </b-col>
            <b-col>
              <div class="controls">
                <b-button class="mr-3 btn-tribe input-group-text border-0" id="search-addon">
                    <i class="fas fa-search" @click.prevent="search2"></i>
                </b-button>
              </div>
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
    max: 10000,
    selected: "none",
    init: 0,
    end: 9,
    numberElements: 9,
    numberPage : 1
  }),
  components: {
    CartProduct,
  },
  async beforeCreate() {
    await this.$store.dispatch("fetchProductsData");
  },
  methods: {
    clean() {
      this.$store.dispatch("fetchProductsData");
      this.min = 0;
      this.max = 10000;
      this.querySearch = "";
      this.selected = "none";
      this.init = 0;
      this.end = this.numberElements;
    },
    async search2() {
      if (this.selected != "none") {
        var v = ["Men", "Women", "Unisex"];
        this.selected = v[this.selected - 1];
      }
      const params = {
        key1: this.min,
        key2: this.max,
        key3: this.querySearch,
        key4: this.selected,
      };
      await this.$store.dispatch("fetchProductsSearch2", params);
      this.init = 0
      this.end = this.numberElements
      this.numberPage = 1
    },
    addToCart(id) {
      this.$store.dispatch("addToCart", id);
    },
    decrement(id) {
      this.$store.dispatch("decrement", id);
    },
    next() {
      if (
        this.init + this.numberElements <=
        this.$store.state.products.length
      ) {
        this.init = this.init + this.numberElements;
        this.end = this.end + this.numberElements;
        this.numberPage = this.end/this.numberElements
      }
    },
    prev() {
      if (this.init - this.numberElements >= 0) {
        this.init = this.init - this.numberElements;
        this.end = this.end - this.numberElements;
        this.numberPage = this.end/this.numberElements
      }
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
.btn-primary,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited {
  background-color: #f5b652 !important;
}
</style>