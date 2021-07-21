//validating requests via joi
const Joi = require('joi')


module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })
        
        const {error, value} = schema.validate(req.body)

        if (error) {
            switch (error.details[0].key) {
                case 'email':
                    res.status(400).send({
                        error: 'Email Invalid'
                    })
                    break   
                case 'password':
                    res.status(400).send({
                        error: 'Password Invalid (needs only lower case, upper case and number digits) (length 8<32)'
                    })
                    break 
            }
        } else {
            next(value)
        }
    }
}