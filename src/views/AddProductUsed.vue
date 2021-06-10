<template>
  <form action class="col-4" @submit.prevent="addProductUsed">
    <b-row class="pb-4">
      <legend class="title">Añadir producto</legend>
    </b-row>

    <b-row class="pb-4">
      <b-col>
        <label class="control-label" for="brandname">Nombre</label>
      </b-col>
      <b-col align="left">
        <input
          v-model="name"
          type="text"
          id="brandname"
          name="brandname"
          placeholder=""
          class="input-xlarge"
          required
        />
      </b-col>
    </b-row>

    <b-row class="pb-4">
      <b-col>
        <label class="control-label" for="brandname">Descripción</label>
      </b-col>
      <b-col align="left">
        <input
          v-model="description"
          type="text"
          id="brandname"
          name="brandname"
          placeholder=""
          class="input-xlarge"
          required
        />
      </b-col>
    </b-row>

    <b-row class="pb-4">
      <b-col>
        <label class="control-label" for="brandname">Precio</label>
      </b-col>
      <b-col align="left">
        <input
          v-model="price"
          type="text"
          id="brandname"
          name="brandname"
          placeholder=""
          class="input-xlarge"
          required
        />
      </b-col>
    </b-row>

    <b-row class="pb-4">
      <b-col>
        <label class="control-label" for="brandname">Categoría</label>
      </b-col>
      <b-col align="left">
        <b-form-select v-model="category" :options="options">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Escoge categoría --</b-form-select-option
            >
          </template>
        </b-form-select>
      </b-col>
    </b-row>

    <b-row class="pb-4">
      <b-col>
        <label class="control-label" for="brandname">Talla</label>
      </b-col>
      <b-col align="left">
        <input
          v-model="size"
          type="text"
          id="brandname"
          name="brandname"
          placeholder=""
          class="input-xlarge"
          required
        />
      </b-col>
    </b-row>

    <b-row class="pb-4">
      <b-col>
        <label class="control-label" for="brandname">Imagenes</label>
      </b-col>
      <b-col align="left">
        <b-form-group v-for="(image, index) in this.images" :key="index">
          <b-row class="pb-2">
            <b-col>
              <input
                type="text"
                id="brandname"
                name="brandname"
                placeholder=""
                class="input-xlarge"
                required
                v-model="image.image"
              />
            </b-col>
            <b-col>
              <b-button
                class="btn-dark"
                size="sm"
                @click="removeImage(index)"
                v-show="index || (!index && images.length > 1)"
              >
                -
              </b-button>
            </b-col>
            <b-col>
              <b-button
                class="btn-primary"
                size="sm"
                @click="addImage(index)"
                v-show="index == images.length - 1"
              >
                +
              </b-button>
            </b-col>
          </b-row>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row class="pb-4">
      <b-col>
        <label class="control-label" for="brandname">Marca</label>
      </b-col>
      <b-col align="left">
        <b-form-select v-model="brand" :options="optionsBrands">
          <template #first>
            <b-form-select-option :value="null" disabled
              >-- Escoge marca --</b-form-select-option
            >
          </template>
        </b-form-select>
      </b-col>
    </b-row>

    <b-row class="pb-4">
      <b-col>
        <label class="control-label" for="brandname">Género</label>
      </b-col>
      <b-col></b-col>
      <b-col></b-col>
      <b-col>
        <div class="form-check form-group">
          <input
            v-model="gender"
            class="form-check-input"
            type="radio"
            :value="1"
            id="defaultCheck1"
          />
          <label class="form-check-label" for="defaultCheck1">Hombre</label>
        </div>
      </b-col>
      <b-col>
        <div class="form-check form-group">
          <input
            v-model="gender"
            class="form-check-input"
            type="radio"
            :value="2"
            id="scheduleCheck"
          />
          <label class="form-check-label" for="scheduleCheck">Mujer</label>
        </div>
      </b-col>
      <b-col>
        <div class="form-check form-group">
          <input
            v-model="gender"
            class="form-check-input"
            type="radio"
            :value="3"
            id="scheduleCheck"
          />
          <label class="form-check-label" for="scheduleCheck">Unisex</label>
        </div>
      </b-col>
    </b-row>

    <b-row class="pb-4">
      <b-col>
        <label class="control-label" for="brandlogo">Color</label>
      </b-col>
      <b-col align="left">
        <input
          v-model="color"
          type="textarea"
          id="brandlogo"
          name="brandlogo"
          placeholder=""
          class="input-xlarge"
          required
        />
      </b-col>
    </b-row>
    <p v-if="error" class="error">Algo fue mal, vuelva a intentarlo</p>
    <div class="control-group">
      <div class="controls">
        <button class="btn btn-login">Añadir producto</button>
      </div>
    </div>
  </form>
</template>

<script>
import auth from "@/logic/auth";
export default {
  name: "AddProductUsed",
  data: () => ({
    name: "",
    description: "",
    price: "",
    color: "",
    error: false,
    category: "",
    brand: "",
    options: [],
    optionsBrands: [],
    gender: null,
    size: "",
    images: [
      {
        image: "",
      },
    ],
  }),
  async beforeCreate() {
    await this.$store.dispatch("fetchCategoriesData");
    await this.$store.dispatch("fetchBrandsData");
    this.options = this.$store.state.categoriesNames;
    this.optionsBrands = this.$store.state.brandsNames;
  },
  methods: {
    addSize() {
      this.sizes.push({
        size: "",
      });
    },
    removeSize(index) {
      this.sizes.splice(index, 1);
    },
    addImage() {
      this.images.push({
        image: "",
      });
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    async addProductUsed() {
      try {
        var v = ["Men", "Women", "Unisex"];
        var gender = v[this.gender - 1];
        const data = {
          name: this.name,
          description: this.description,
          price: this.price,
          category: this.category,
          size: this.size,
          nameSeller: auth.getNameLogged(),
          emailSeller: auth.getEmailLogged(),
          images: this.images,
          brand_name: this.brand,
          gender: gender,
          color: this.color,
        };
        await auth.addProductUsed(data);
        this.$router.push("/compraventa");
      } catch (error) {
        this.error = true;
      }
    },
  },
};
</script>

<style>
.btn-primary,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited {
  background-color: #f5b652 !important;
}

input[type="radio"]:checked {
  background-color: #f5b652;
}
</style>