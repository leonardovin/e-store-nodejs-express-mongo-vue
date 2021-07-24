<template lang="">
  <div class="mid-section-wrapperflex">
    <div class="check-block">
      <div v-if="product != null" class="product-frame">
        <div class="imgbox">
          <img :src="product.image" width="200" alt="productimg" />
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
          <input v-model="item.quantity" type="number" />
        </div>
        <h2></h2>
        <br />
        <div class="danger-alert" v-html="error" />
        <br />
        <a @click="cartRoute()" class="buybtn-inanimate"
          >Adicionar ao carrinho</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import ProdService from '@/services/product-service'

export default {
  data() {
    return {
      product: null,
      item: {
        quantity: '',
        productId: ''
      },
      error: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    async cartRoute() {
      if (!this.$store.state.isUserLoggedIn) {
        this.$router.push('/login')
      } else if (!this.$store.state.isUserAdmin) {
        const user = this.$store.state.user
        const item = this.item
        item.productId = this.$store.state.route.params.productId
        await ProdService.putCart(user, item)
        this.$router.push('/cart')
      } else {
        alert('ADMINS CANT MAKE PURCHASES')
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
