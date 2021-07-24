<template lang="">
    <!-- mid section wrapper -->
    <div class="login">
      <div class="form-wrapper">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Login</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="email"
            />
            <div id="emailHelp" class="form-text">email</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Senha</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              v-model="password"
            />
          </div>
          <button @click="login" type="submit" class="btn btn-primary">Entrar</button>
        </form>
      </div>
    </div>
</template>

<script>
import AuthenticationService from '@/services/auth-service'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
        try {
            const response = await AuthenticationService.login({
                email: this.email,
                password: this.password
            })
            this.$store.dispatch('setToken', response.data.token)
            this.$store.dispatch('setUser', response.data.user)
            this.$router.push('/')
        } catch (error) {
            this.error = error.response.data.error
        }
    }
  }
}
</script>

<style lang="">
</style>
