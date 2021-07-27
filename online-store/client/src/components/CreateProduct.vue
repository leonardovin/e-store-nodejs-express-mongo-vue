<template lang="">
  <div class="admin-cadastro">
    <div class="admin">
      <dl>
        <dt>Admin:<span class="nome"></span></dt>
        <br />
        <dt><span class="email"></span></dt>
        <br />
      </dl>
    </div>
    <div class="cadastro">
      <div class="form">
        <form>
          <div class="titulo1">
            <label>Título:</label><br />
            <input
              type="text"
              v-model="product.title"
              placeholder="Titulo"
              required
            />
          </div>
          <br />
          <div class="description">
            <label>Descrição:</label><br />
            <input
              type="text"
              v-model="product.description"
              placeholder="Descrição"
              required
            />
          </div>
          <br/>
          <div class="preco">
            <label>Preço:</label><br />
            <input
              type="text"
              v-model="product.price"
              placeholder="Preço"
              required
            />
          </div>
          <br />
          <div class="quantidade">
            <label>Imagem:</label><br />
            <input
              type="text"
              v-model="product.image"
              id="imagem"
              placeholder="URL - PNG"
            /><br />
          </div>
          <br />
          <div class="quantidade">
            <label>Quantidade:</label><br />
            <input
              type="number"
              v-model="product.quantity"
              id="quantidade"
              required
            />
          </div>
          <div class="quantidade">
            <label>Tags:</label><br />
            <input class = "input" type="text" v-model="product.tags" id="tags" required placeholder = "tag1, tag2, tag3"/>
          </div>
          <br />
          <div class="tipos">
            <label>Tipo:</label><br />
            <select v-model="product.category" id="tipos">
              <option id="aviador">Gral</option>
              <option id="redondo">Sol</option>
            </select>
          </div>
          <br />

          <button
            type="submit"
            class="btn btn-primary"
            @click="create"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
    <!--PRODUCT SHOWCASE END-->
  </div>
</template>
<script>
import ProdService from '@/services/product-service'

export default {
  data () {
    return {
      product: {
        title: null,
        description: null,
        price: null,
        active: null,
        tags: null,
        image: null,
        quantity: null,
        category: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      this.product.active = true
      const areAllFieldsFilledIn = Object.keys(this.product).every(
        (key) => !!this.product[key]
      )
      if (!areAllFieldsFilledIn) {
        this.error = 'Preencha todos os campos'
        return
      }
      try {
        console.log(this.product)
        await ProdService.post(this.product)
        this.$router.push({
          name: 'products'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped >
.input{
    border-color: royalblue;
}
</style>
