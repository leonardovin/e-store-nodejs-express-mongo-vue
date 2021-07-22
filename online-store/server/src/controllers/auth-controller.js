//importa modelo de usuario
const User = require('../models/user')

module.exports = {
    //register
    async register (req, res) {
        var user =  new User(req.body)
        try{
            await user.save() 
        } catch (err) {
            res.status(400).send({
                error: 'Esse email ja está em uso'
            })
        }
    },
    //login
    async login (req,res) {
        const {email, password} = req.body
        // console.log(req.body.email)
        try{
            var user = await User.findOne ({
                email: email
            })
            
            if (!user) {
                return res.status(403).send ({
                    error: 'login info incorrect'
                })
            }    
            const isPasswordValid = password === user.password
            console.log('password: ', user.password)
            if (!isPasswordValid) {
                return res.status(403).send ({
                    error: 'password incorrect'
                })
            }
            const userJson = user.toJSON()
            res.send({
                user: userJson
            })
        }  catch (err){
            res.status(403).send({
                error: 'login info incorrect'
            })
        }

    }
}
