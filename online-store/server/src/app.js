const express = require('express')
const cors = require ('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


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

app.listen(process.env.PORT || 8081)

