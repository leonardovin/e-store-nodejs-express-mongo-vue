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
            <a
              @click="
                navigateTo({
                  name: 'product-page',
                  params: {productId: product._id}
                })
              "
              class="buybtn"
              >Comprar</a
            >
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
      products: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
      console.log(this.params)
    }
  },
  async mounted() {
    const productCategory = this.$store.state.route.params.productCategory
    this.products = (await ProdService.indexByCat(productCategory)).data
  }
}
</script>
<style scoped>
.buybtn {
  cursor: pointer;
}
</style>
