<template>
  <div class="content">
    <div
      class="card-category"
      v-for="item in $store.state.categories"
      :key="item.id"
    >
      <img :src="item.image" class="category-img" />
      <span class="category-name">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  created() {
    this.$store.dispatch("fetchCategoriesData");
  },
};
</script>

<style>
.content {
  width: 80%;
  margin: auto;
}

.card-category {
  border: 1px solid black;
  width: 250px;
  margin: 20px 40px 20px 25px;
  display: inline-block;
  box-shadow: #a09f9f 2px 3px 5px 1px;
}

.category-img {
  width: 150px;
  height: 120px;
  margin: 15px;
  vertical-align: middle;
}

.category-name {
  font-size: 18px;
  margin: 10px 20px;
}

.btn-category {
  margin-top: 10px;
}
</style>