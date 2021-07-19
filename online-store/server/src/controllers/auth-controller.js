//importa modelo de usuario
const User = require('../models/user')

//registrar usuario
module.exports = {
    async register (req, res) {
        var user =  new User(req.body)
        try{
            await user.save() 
        } catch (err) {
            res.status(400).send({
                error: 'Esse email ja está em uso'
            })
        }
    }
}
