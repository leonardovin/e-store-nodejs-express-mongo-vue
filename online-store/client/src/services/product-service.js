import Api from '@/services/Api'

export default {
    index(limit) {
        return Api().get('products', limit)
    },
    indexByCat(productCategory) {
        return Api().get('products', productCategory)
    },
    show(productId) {
        return Api().get(`products/${productId}`)
    },
    post(product) {
        return Api().post('products', product)
    },
    put(product) {
        return Api().put(`products/${product.id}`, product)
    }
}
