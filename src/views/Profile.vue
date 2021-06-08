<template>
  <div class="container">
    <div class="row pt-5 pb-5">
      <div class="col col-md-3">
        <img
          src="https://png.pngtree.com/png-vector/20191023/ourlarge/pngtree-user-vector-icon-with-white-background-png-image_1849343.jpg"
          class="img-thumbnail"
          alt="..."
        />
      </div>
      <div class="col col-md-3"></div>
      <div class="col col-md-6">
        <b-card class="mb-4" align="left">
          <b-card-body align="left">
            <b-card-title>Perfil</b-card-title>
            <b-card-text>Nombre: {{ user.data.name }}</b-card-text>
            <b-card-text>Apellidos: {{ user.data.lastname }}</b-card-text>
            <b-card-text>Teléfono: {{ user.data.telephone }}</b-card-text>
            <b-card-text>Correo electrónico: {{ user.data.email }}</b-card-text>
          </b-card-body>
        </b-card>

        <b-card class="mb-4" align="left">
          <b-card-body align="left">
            <b-card-title>Favoritos</b-card-title>
          </b-card-body>
        </b-card>

        <b-card class="mb-4" align="left">
          <b-card-body align="left">
            <b-card-title>Wish List</b-card-title>
          </b-card-body>
        </b-card>
      </div>
    </div>
    <div class="row pt-5 pb-5">
      <form action class="form-horizontal" @submit.prevent="changePass">
        <fieldset>
          <div id="legend">
            <legend class="title">Cambiar contraseña</legend>
          </div>
          <div class="row pt-1 pb-1">
            <div class="col"></div>
            <div class="col">
              <label class="control-label">Contraseña</label>
            </div>
            <div class="col">
              <input
                v-model="password"
                class="form-input"
                type="password"
                id="password"
                placeholder="Contraseña"
              />
            </div>
            <div class="col"></div>
          </div>
          <div class="row pt-1 pb-1">
            <div class="col"></div>
            <div class="col">
              <label class="control-label">Nueva contraseña</label>
            </div>
            <div class="col">
              <input
                v-model="newPass"
                class="form-input"
                type="password"
                id="password"
                placeholder="Nueva contraseña"
              />
            </div>
            <div class="col"></div>
          </div>
          <div class="row pt-1 pb-1">
            <div class="col"></div>
            <div class="col">
              <label class="control-label">Confirma nueva contraseña</label>
            </div>
            <div class="col">
              <input
                v-model="newPassConf"
                class="form-input"
                type="password"
                id="password"
                placeholder="Nueva contraseña"
              />
            </div>
            <div class="col"></div>
          </div>
          <p v-if="error" class="error">{{ errorMsg }}</p>
          <p v-if="success" class="error">Contraseña cambiada con éxito</p>
          <div class="control-group">
            <div class="controls">
              <button class="btn btn-tribe">Aceptar</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import auth from "@/logic/auth";
export default {
  name: "Profile",
  data: () => ({
    password: "",
    newPass: "",
    newPassConf: "",
    error: false,
    errorMsg: "",
    success: false,
    user: {},
  }),
  async beforeCreate() {
    this.user = await auth.infoUser();
  },
  methods: {
    async changePass() {
      if (this.newPass !== this.newPassConf) {
        this.error = true;
        this.errorMsg = "Los campos de la nueva contraseña no coinciden";
      } else {
        try {
          await auth.fecthChangePass(this.password, this.newPass);
          this.success = true;
          this.error = false;
        } catch (error) {
          this.error = true;
          this.errorMsg = error.response.data.message;
        }
      }
    },
  },
};
</script>

<style>
.control-label {
  text-align: left;
  float: left;
}
</style>