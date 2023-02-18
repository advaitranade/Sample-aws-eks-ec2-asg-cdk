const express = require('express')

var path = require('path');

const PORT = process.env.PORT || 3000

const HOST = '0.0.0.0'

//Edit here for demos
const RELEASE_NO= 'PROD-140'

const api = express()

api.set('views', path.join(__dirname, 'views'));

api.set('view engine', 'pug');

api.use(express.static(path.join(__dirname, 'public')));

api.get('/', (req, res) => { 
  res.render('index', {
    release_no: RELEASE_NO
  })
})

api.listen(PORT, HOST)

console.log('Running on http://$(HOST):${PORT}')