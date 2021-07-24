<template lang="">
  <div class="container product-block">
    <prod-panel></prod-panel>
    <button v-if = "$store.state.isUserLoggedIn"
      type="button"
      class="btn btn-primary"
      @click="navigateTo({name: 'create-product'})"
      >+</button
    >
  </div>
</template>

<script>
import ProdPanel from '@/components/ProductPanel'
import ProdPanelCat from '@/components/ProductsCat'

export default {
  components: {
    ProdPanel,
    ProdPanelCat
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang=""></style>
