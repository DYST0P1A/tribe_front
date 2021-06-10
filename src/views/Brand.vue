<template>
  <div class="content">
    <b-row class="pt-5 pb-5 justify-content-md-center">
      <b-col class="col-6">
        <div class="controls">
          <form v-on:submit.prevent="search">
            <div class="input-group rounded">
              <input
                type="search"
                class="form-control rounded"
                placeholder="Buscar"
                aria-label="Search"
                aria-describedby="search-addon"
                v-model="query"
              />
              <b-button class="btn-tribe input-group-text" id="search-addon">
                <i class="fas fa-search" @click.prevent="search"></i>
              </b-button>
            </div>
          </form>
        </div>
      </b-col>
    </b-row>
    <div
      class="card-brand zoom"
      v-for="item in $store.state.brands"
      :key="item.id"
    >
      <router-link
        :to="{ name: 'ProductsByBrand', params: { name: item.name } }"
      >
        <img :src="item.logo" class="brand-img" /><br />
        <span class="product-name">
          {{ item.name }}
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brand",
  data: () => ({
    query: ""
  }),
  created() {
    this.$store.dispatch("fetchBrandsData");
    this.$store.dispatch("fetchProductsByBrand");
  },
  methods: {
    async search() {
      if(this.query === "") {
        await this.$store.dispatch("fetchBrandsData");
      }
      else {
        await this.$store.dispatch('searchBrand', this.query)
      }
    }
  }
};
</script>

<style>
.card-brand {
  border: 1px solid black;
  width: 250px;
  margin: 20px 40px 20px 25px;
  display: inline-block;
  box-shadow: #a09f9f 2px 3px 5px 1px;
}

.card-brand:hover {
  border: 1px solid #f5b652;
  cursor: pointer;
}

.brand-img {
  width: 150px;
  height: 120px;
  margin: 15px;
  vertical-align: middle;
}

.card-brand a {
  text-decoration: none;
}
</style>