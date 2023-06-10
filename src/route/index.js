const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index', {
    layout: 'default',
    title: 'Home page',
    text: 'Click me',
  })
})

router.get('/1', function (req, res) {
  res.render('product', {
    layout: 'default',
    title: 'userinfo',
    product: {
      name: 'Корм для риб',
      cost: 72.5,
      img: 'fish.png',
      isAvailable: true,
    },
  })
})

module.exports = router
