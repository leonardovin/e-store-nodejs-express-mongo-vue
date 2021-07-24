const Product = require('../models/product')

module.exports = {
    //add product
    async post (req, res) {
        const product = new Product(req.body)
        try {
          await product.save()
          console.log(product)
          res.send(product)
        } catch (err) {
          res.status(400).send({
            error: 'an error has occured trying to create the product'
          })
        }
    },
    //show a product
    async show (req, res) {
        try {
          const product = await Product.findById(req.params.productId)
          res.send(product)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to show the products'
          })
        }
    },
    //show a list of products
    async index (req, res) {
        try{
            const products = await Product.find({
                active: true
            },null, {limit: 3} );
            res.send(products);
        } catch (err) {
            res.status(500).send({
              error: 'an error has occured trying to get all the products'
            })
        }
    }
}