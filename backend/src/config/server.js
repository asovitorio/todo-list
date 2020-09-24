const port = 3003
const { json } = require('body-parser')
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const router = require('./routes')
const allowCors = require('./cors')
// middleware de configuração
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json());
server.use(allowCors)
//End Point padrão da API
server.use('/api',router)

server.listen(port,()=>console.table({port,status:"ON"}))

module.exports = server