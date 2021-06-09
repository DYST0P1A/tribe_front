<template>
  <form action class="col-4" @submit.prevent="addBrand">
      <b-row class="pb-4">
        <legend class="title">Añadir marca</legend>
      </b-row>

      <b-row class="pb-4">
        <b-col>
          <label class="control-label" for="brandname">Nombre</label>
        </b-col>
        <b-col>
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
          <label class="control-label" for="brandlogo">Logo</label>
        </b-col>
        <b-col>
          <input
            v-model="logo"
            type="textarea"
            id="brandlogo"
            name="brandlogo"
            placeholder=""
            class="input-xlarge"
            required
          />
        </b-col>
      </b-row>

      <b-row class="pb-4">
        <b-col>
          <label class="control-label" for="brandphone">Teléfono</label>
        </b-col>
        <b-col>
          <input
            v-model="telephone"
            type="number"
            id="brandphone"
            name="brandphone"
            placeholder=""
            class="input-xlarge"
            required
          />
        </b-col>
      </b-row>

      <b-row class="pb-4">
        <b-col>
          <label class="control-label" for="brandemail">E-mail</label>
        </b-col>
        <b-col>
          <input
            v-model="email"
            type="text"
            id="brandemail"
            name="brandemail"
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
    logo: "",
    telephone: "",
    email: "",
    error: false
  }),
  methods: {
    async addBrand() {
      try {
        await auth.addBrand(this.name, this.logo, this.telephone, this.email)
        this.$router.push("/addbrandproduct");
      } catch (error) {
        this.error = true;
      }
    }
  }
};
</script>

<style>
</style>