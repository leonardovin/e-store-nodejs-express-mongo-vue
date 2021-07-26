const Product = require('../models/product')
const User = require('../models/user')

module.exports = {
    //add product
    async post(req, res) {
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
    async show(req, res) {
        try {
            const product = await Product.findById(req.params.id)
            res.send(product)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to show the products'
            })
        }
    },
    //show a list of products
    async index(req, res) {
        try {
            const products = await Product.find({
                active: true
            }, null);
            res.send(products);
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to get all the products'
            })
        }
    },
    //show a list of products
    async indexMP(req, res) {
        try {
            const products = await Product.find({
                active: true
            }, null, { limit: 8 });
            res.send(products);
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to get all the products'
            })
        }
    },
    //list by category
    async indexByCat(req, res) {
        console.log(req.params.category)
        try {
            const products = await Product.find({
                active: true,
                category: req.params.category
            }, null);
            res.send(products);
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to get all the products by category'
            })
        }
    },
    //put in cart
    async putInCart(req, res) {
        console.log("1", req.body)
        console.log("2", req.params)
        try {
            const user = await User.findById(req.params.id)
            user.cart.push(req.body)
            console.log('here')
            user.save().then(savedUser => {
                savedUser === user; // true
            });
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to add to the cartt'
            })
        }
    },
    //put in cart
    async updateProduct(req, res) {
        console.log("1", req.body)
        console.log("2", req.params)
        try {
            const product = await Product.findById(req.body.productId)
            product.quantity = product.quantity - req.body.quantity
            product.save().then(savedProd => {
                savedProd === product; // true
            });
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to add to the cart'
            })
        }
    },
    async getCart(req, res) {
        try {
            const user = await User.findById(req.params.id)
            res.send(user.cart);
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to get all the products'
            })
        }
    },
    async clearCart(req, res) {
        console.log(req.params)
        try {
            const user = await User.findById(req.params.id)
            console.log(req.params)

            user.cart.forEach(function(o) {
                o._id = {}
                o.quantity = {}
            });
            user.save().then(savedUser => {
                savedUser === user; // true
            });
            console.log('here')
            res.send(user.cart)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to get all the products'
            })
        }
    }

}