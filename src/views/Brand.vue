<template>
      <div class="content">
        <div class="card-brand zoom" v-for="item in $store.state.brands" :key="item.id">
            <router-link  :to="{ name: 'ProductsByBrand', params: { name: item.name } }">
              <img :src="item.logo" class="brand-img" /><br>
              <span class="product-name">
              {{ item.name }} 
              </span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Brand',
  created() {
      this.$store.dispatch('fetchBrandsData')
      this.$store.dispatch('fetchProductByBrand')
  }
}
</script>

<style>
.card-brand {
  border: 1px solid black;
  width: 250px;
  margin: 20px 40px 20px 25px;
  display: inline-block;
  box-shadow: #a09f9f 2px 3px 5px 1px ;
}

.card-brand:hover{
  border: 1px solid #f5b652;
  cursor: pointer;
}

.brand-img{
  width: 150px;
  height: 120px;
  margin: 15px;
  vertical-align: middle;
}

.card-brand a{
  text-decoration: none;
}
</style>