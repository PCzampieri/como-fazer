const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())
app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

const port = process.env.PORT || 3000

app.get('/', (request, response)=> {        
    response.render('index')
})

app.listen(port, (err) => {
    if(err){
        console.log(err)
    } else {
        console.log('como fazer sever is running on port:', port)
    }
})