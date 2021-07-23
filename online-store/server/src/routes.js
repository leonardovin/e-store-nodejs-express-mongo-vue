const authController = require("./controllers/auth-controller")
//const authControllerPolicy = require('./policies/authControllerPolicy')
const prodController = require("./controllers/products-controller")

module.exports = (app) =>{
    //register
    app.post('/register',
        //authControllerPolicy.register,  TODO
        authController.register)
    //login
    app.post('/login',
        authController.login)
   
    //post products
    app.post('/products',
        prodController.post)
    //get products
    app.get('/products',
        prodController.index)
}
