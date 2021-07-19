module.exports = (app) =>{
    app.get('/status', (req,res) =>{
        res.send({
            message: 'hello world'
        })
    })
    
    app.post('/register', (req,res) =>{
        res.send({
            message: `user registered: ${req.body.email}`
        })
    })
    
    app.post('/login', (req,res) =>{
        res.send({
            message: `logging in : ${req.body.email}`
        })
    })
    
}