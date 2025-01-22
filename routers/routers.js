const routers = require('express').Router()

routers.get('/', function(_, res){
  return res.render('index', {page: 'homepage', title: 'Marshall Enterprise', style: 'homepage-style'})
})

module.exports = routers