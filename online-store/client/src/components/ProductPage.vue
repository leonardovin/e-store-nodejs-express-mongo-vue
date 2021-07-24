<template lang="">
  <div class="mid-section-wrapperflex">
    <div class="check-block">
      <div  v-if="product != null" class="product-frame">
        <div class="imgbox">
          <img  :src="product.image" width="200" alt="productimg" />
        </div>
        <div class="contentbox">
          <h3>{{ product.title }}</h3>
          <h2 class="price">{{ product.price }}</h2>
        </div>
      </div>
      <div class="infobox">
        <h3></h3>
        <div class="quantity-input">
          Quantidade:
          <input  type="number" />
        </div>
        <h2></h2>
        <a @click="cartRoute()" class="buybtn-inanimate">Adicionar ao carrinho</a>
      </div>
    </div>
  </div>
</template>
<script>
import ProdService from '@/services/product-service'

export default {
  data() {
    return {
      product: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    cartRoute() {
      if (!this.$store.state.isUserLoggedIn) {
        this.$router.push('/login')
      } else {
        this.$router.push('/cart')
      }
    }
  },
  async mounted() {
    const productId = this.$store.state.route.params.productId
    this.product = (await ProdService.show(productId)).data
  }
}
</script>
<style scoped>
.buybtn-inanimate {
  cursor: pointer;
}
</style>
