<template>
  <div class="login">
    <div class="form-wrapper">
      <form>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">Nome</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            placehoolder="nome"
            v-model="name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputTelephone" class="form-label">Telefone</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputTelephone"
            placehoolder="telefone"
            v-model="phone"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputAdress" class="form-label">Endereço</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputAdress"
            placehoolder="endereço"
            v-model="address"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placehoolder="email"
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Senha</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placehoolder="senha"
            v-model="password"
          />
        </div>
        <button @click="register" type="submit" class="btn btn-primary">
          Cadastrar
        </button>
        <div class= "error" v-html = "error"/>
      </form>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/auth-service'
export default {
  data () {
    return {
      name: '',
      phone: '',
      address: '',
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
        try {
            const response = await AuthenticationService.register({
            name: this.name,
            phone: this.phone,
            address: this.address,
            email: this.email,
            password: this.password
            })
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.user)
        } catch (error) {
            this.error = error.response.data.error
        }
    }
  }
}
</script>

<style scoped>
.error{
    color: red;
}
</style>
