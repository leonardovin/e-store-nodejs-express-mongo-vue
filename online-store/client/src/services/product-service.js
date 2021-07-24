import Api from '@/services/Api'

export default {
    index(limit) {
        return Api().get('products', limit)
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
    }
}
