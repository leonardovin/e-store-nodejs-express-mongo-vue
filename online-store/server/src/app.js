const express = require('express')
const cors = require ('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
app.use(morgan('combine'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

//conecta ao banco de dados
mongoose.connect('mongodb+srv://admin:123@cluster0.vuut3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{useNewUrlParser: true , 
useUnifiedTopology: true
})

//carrega rotas
require('./routes')(app)

app.listen(process.env.PORT || 8081)

