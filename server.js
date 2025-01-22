const express = require('express')
const routers = require('./routers/routers')
const { dotenv, ping } = require('./essentials')
const PORT = dotenv.PORT || 4000

const app = express()

app.use(express.json())
app.use(express.static('./public'))
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(routers)
ping()
app.listen(PORT, function(){ console.log('server started on port',PORT)})