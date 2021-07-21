const authController = require("./controllers/auth-controller")
//const authControllerPolicy = require('./policies/authControllerPolicy')

module.exports = (app) =>{
    //register
    app.post('/register',
    //authControllerPolicy.register,  TODO
    authController.register),

    app.post('login',
    authController.login)
}
