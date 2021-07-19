import Api from '@/services/Api.js'

export default{
    register (credentials) {
        return Api().post('register', credentials)
    }
}

// auth-service.register({
//     email: 'teste@email.com',
//     password: '123'
// })
