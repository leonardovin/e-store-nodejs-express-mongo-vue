<template lang="">
  <div>
    <div class="container product-area">
      <a class="buybtn-inanimate">Limpar</a>
      <div class="row justify-content-around">
        <div
          v-for="(product, i) in products"
          :key="product.title"
          class="col-6 col-md-2 product-frame"
        >
          <div class="imgbox">
            <img :src="product.image" width="200" alt="productimg" />
          </div>
          <div class="contentbox">
            <h3>{{ product.title }}</h3>
            <h2 class="price">{{ product.price }} X {{ quantity[i] }}</h2>
            <h3>Total: {{ format(product.price * quantity[i]) }} </h3>
          </div>
        </div>
      </div>
      <h3>TOTAL: {{ total }}</h3>
      <a class="buybtn-inanimate">Checkout</a>
    </div>
  </div>
</template>
<script>
import ProdService from '@/services/product-service'

export default {
  data() {
    return {
      products: [],
      quantity: [],
      total: 0,
      index: 0
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    format(number) {
      return number.toFixed(2)
    }
  },
  async mounted() {
    for (var product in this.$store.state.user.cart) {
      var res = (
        await ProdService.show(this.$store.state.user.cart[product]._id)
      ).data
      var quantity = this.$store.state.user.cart[product].quantity
      this.quantity.push(quantity)
      this.products.push(res)
      this.total = this.total + res.price * quantity
    }
  }
}
</script>
<style scoped>
.buybtn {
  cursor: pointer;
}
</style>
