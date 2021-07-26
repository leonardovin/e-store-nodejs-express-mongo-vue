import Api from '@/services/Api'

export default {
    index(limit) {
        return Api().get('products', limit)
    },
    indexCart(user) {
        return Api().get(`cart/${user._id}`, user)
    },
    indexMP(limit) {
        return Api().get('/', limit)
    },
    indexByCat(productCategory) {
        console.log(productCategory)
        return Api().get(`products/category/${productCategory}`)
    },
    show(productId) {
        return Api().get(`products/${productId}`)
    },
    post(product) {
        return Api().post('products', product)
    },
    put(product) {
        return Api().put(`products/${product.id}`, product)
    },
    putCart(user, item) {
        return Api().put(`cart/${user._id}`, item)
    },
    putProd(user, item) {
        return Api().put(`cart/product/${user._id}`, item)
    }
}
