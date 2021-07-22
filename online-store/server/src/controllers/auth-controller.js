//importa modelo de usuario
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const md5 = require('md5')

function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    //register
    async register (req, res) {
        var user =  new User(req.body)
        try{
            //encrypt password
            user.password = md5(user.password + global.SALT_KEY)
            //create in the db
            await user.save() 
            //responds with user + jwtken 
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
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
            const isPasswordValid = md5(password + global.SALT_KEY) === user.password
            console.log('password: ', user.password)
            if (!isPasswordValid) {
                return res.status(403).send ({
                    error: 'password incorrect'
                })
            }
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        }  catch (err){
            res.status(403).send({
                error: 'login info incorrect'
            })
        }

    }
}
