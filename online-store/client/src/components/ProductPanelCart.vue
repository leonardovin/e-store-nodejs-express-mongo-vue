<template lang="">
  <div>
    <div class="container product-area">
      <div class="row justify-content-around">
        <div
          v-for="product in products"
          :key="product.title"
          class="col-6 col-md-2 product-frame"
        >
          <div class="imgbox">
            <img :src="product.image" width="200" alt="productimg" />
          </div>
          <div class="contentbox">
            <h3>{{ product.title }}</h3>
            <h2 class="price">{{ product.price }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProdService from '@/services/product-service'

export default {
  data() {
    return {
      products: null,
      item: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted() {
    const cart = this.$store.state.user.cart
    var product = null
    for (product in  cart) {
        const product = await ProdService.show(cart._id)        
        this.products.push(product)
    }
    console.log(product)
    }
}
</script>
<style scoped>
.buybtn {
  cursor: pointer;
}
</style>
