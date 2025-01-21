const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(express.static('./public'))
app.set('views', './views')
app.set('view engine', 'ejs')

app.listen(PORT, function(){ console.log('server started on port',PORT)})