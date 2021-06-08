<template>
  <div class="forms">
    <div class="form-login">
      <form action class="form-horizontal" @submit.prevent="login">
        <fieldset>
          <div id="legend">
            <legend class="title">Ya tengo cuenta</legend>
          </div>

          <div class="control-group">
            <!-- E-mail -->
            <label class="control-label" for="login-email">E-mail</label>
            <div class="controls">
              <input
                v-model="email"
                class="form-input"
                type="email"
                id="email"
                required
                placeholder="Email"
              />
            </div>
          </div>

          <div class="control-group">
            <!-- Password-->
            <label class="control-label" for="login-password">Contraseña</label>
            <div class="controls">
              <input
                v-model="password"
                class="form-input"
                type="password"
                id="password"
                placeholder="Contraseña"
              />
              <p v-if="error" class="error">{{ errorMsg }}</p>
            </div>
          </div>

          <div class="control-group">
            <!-- Button -->
            <div class="controls">
              <button class="btn btn-tribe">Iniciar Sesión</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>

    <div class="form-register">
      <form action class="form-horizontal" @submit.prevent="register">
        <fieldset>
          <div id="legend">
            <legend class="title">Crear cuenta</legend>
          </div>
          <div class="control-group">
            <!-- Username -->
            <label class="control-label" for="name">Nombre</label>
            <div class="controls">
              <input
                v-model="name"
                class="form-input"
                type="text"
                id="name"
                required
                placeholder="Nombre"
              />
            </div>
          </div>
          <div class="control-group">
            <!-- Username -->
            <label class="control-label" for="lastname">Apellido</label>
            <div class="controls">
              <input
                v-model="lastname"
                class="form-input"
                type="text"
                id="lastname"
                required
                placeholder="Apellidos"
              />
            </div>
          </div>

          <div class="control-group">
            <!-- Phone Number -->
            <label class="control-label" for="phone">Número de teléfono</label>
            <div class="controls">
              <input
                v-model="phone"
                class="form-input"
                type="number"
                id="phone"
                required
                placeholder="Telefono"
              />
            </div>
          </div>

          <div class="control-group">
            <!-- E-mail -->
            <label class="control-label" for="register-email">E-mail</label>
            <div class="controls">
              <input
                v-model="emailRegister"
                class="form-input"
                type="text"
                id="email"
                required
                placeholder="Email"
              />
            </div>
          </div>

          <div class="control-group">
            <!-- Password-->
            <label class="control-label" for="register-password"
              >Contraseña</label
            >
            <div class="controls">
              <input
                v-model="passwordRegister"
                class="form-input"
                type="password"
                id="password"
                placeholder="Contraseña"
              />
              <p v-if="errorReg" class="error">{{ errorMsgReg }}</p>
            </div>
          </div>

          <div class="control-group">
            <!-- Button -->
            <div class="controls">
              <input class="btn btn-tribe" type="submit" value="Registrarme" />
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
  data: () => ({
    email: "",
    password: "",
    name: "",
    lastname: "",
    phone: "",
    emailRegister: "",
    passwordRegister: "",
    error: false,
    errorMsg: "",
    errorReg: false,
    errorMsgReg: "",
  }),
  methods: {
    async login() {
      try {
        const res = await auth.login(this.email, this.password);
        const token = res.data.token;
        const name = res.data.name;
        const email = res.data.email;
        const type = res.data.type;
        auth.setLogged(name, email, token, type);
        this.$router.go(this.$router.push("/"));
      } catch (error) {
        this.error = true;
        console.log(error);
        this.errorMsg = error.response.data.message;
      }
    },
    async register() {
      try {
        await auth.register(
          this.name,
          this.lastname,
          this.phone,
          this.emailRegister,
          this.passwordRegister
        );
        this.$router.push("/confirmAccount");
      } catch (error) {
        this.errorReg = true;
        this.errorMsgReg = error.response.data.message;
      }
    },
  },
};
</script>

<style>
.controls {
  margin: 5px 0 30px 0;
}

.title {
  margin: 50px 0 40px 0;
}

.forms {
  display: inline-block;
  width: 50%;
  margin-top: 40px;
}

.form-register {
  float: right;
  width: 50%;
  border-left: 2px solid #f5b652;
}

.form-login {
  float: left;
  width: 50%;
}

input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>