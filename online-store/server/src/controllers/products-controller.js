const Product = require('../models/product')

module.exports = {
    //register
    async post (req, res) {
        const product = new Product(req.body)
        try {
          await product.save()
          res.send(product)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to create the product'
          })
        }
    }
}