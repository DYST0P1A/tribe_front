<template>
  <form action class="col-4" @submit.prevent="addBrand">
    <b-row class="pb-4">
      <legend class="title">Añadir marca</legend>
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
        <label class="control-label" for="brandname">Tallas</label>
      </b-col>
      <b-col align="left">
        <b-form-group v-for="(size, index) in this.sizes" :key="index">
          <b-row class="pb-2">
            <b-col>
              <input  type="text"
                id="brandname"
                name="brandname"
                placeholder=""
                class="input-xlarge"
                required v-model="size.size" 
              />
            </b-col>
            <b-col>
              <b-button  
                class="btn-dark"
                size="sm"
                @click="removeSize(index)"
                v-show="index || (!index && sizes.length > 1)"
                > -
              </b-button>
            </b-col>
            <b-col>
             <b-button  
               class="btn-primary"
                size="sm"
                @click="addSize(index)"
                v-show="index == sizes.length - 1"
                > +
              </b-button>
            </b-col>
          </b-row>
        </b-form-group>
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
              <input  type="text"
                id="brandname"
                name="brandname"
                placeholder=""
                class="input-xlarge"
                required v-model="image.image" 
              />
            </b-col>
            <b-col>
              <b-button  
                class="btn-dark"
                size="sm"
                @click="removeImage(index)"
                v-show="index || (!index && images.length > 1)"
                > -
              </b-button>
            </b-col>
            <b-col>
             <b-button  
                class="btn-primary"
                size="sm"
                @click="addImage(index)"
                v-show="index == images.length - 1"
                > +
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
      <b-col>
        <div class="form-check form-group">
          <input
            v-model="gender"
            class="form-check-input"
            type="radio"
            :value="4"
            id="scheduleCheck"
          />
          <label class="form-check-label" for="scheduleCheck">Bebé</label>
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
        <button class="btn btn-login">Añadir marca</button>
      </div>
    </div>
  </form>
</template>

<script>
import auth from "@/logic/auth";
export default {
  data: () => ({
    name: "",
    description: "",
    price: "",
    color: "",
    error: false,
    category: "",
    brand: '',
    options: [],
    optionsBrands: [],
    gender: null,
    sizes: [
      {
        size: ""
      },
    ],
    images: [
      {
        image: ""
      }
    ],
  }),
  async beforeCreate() {
    await this.$store.dispatch("fetchCategoriesData");
    await this.$store.dispatch("fetchBrandsData");
    this.options = this.$store.state.categoriesNames;
    this.optionsBrands = this.$store.state.brandsNames
  },
  methods: {
    addSize() {
      this.sizes.push({
        size: "",
      });
    },
    removeSize(index) {
      this.sizes.splice(index, 1)
    },
    addImage() {
      this.images.push({
        image: "",
      });
    },
    removeImage(index) {
      this.images.splice(index, 1)
    },
    async addBrand() {
      try {
        const brand_id = await this.$store.state.brands.find(element => element.name == this.brand);
        var v = ['Man','Women','Unisex','Baby']
        var gender = v[this.gender-1]
        const data = {
          "name": this.name,
          "description": this.description,
          "price": this.price,
          "category": this.category,
          "sizes": this.sizes,
          "images": this.images,
          "brand_id": brand_id._id,
          "brand_name": this.brand,
          "gender": gender,
          "color": this.color
        }
        await auth.addProduct(data)
        this.$router.push("/addbrandproduct");
      } catch (error) {
        this.error = true;
      }
    }
  },
};
</script>

<style>

.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
    background-color: #f5b652 !important;
}

input[type='radio']:checked {
  background-color: #f5b652;
}
</style>