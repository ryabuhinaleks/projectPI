var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
const cors = require('cors');

var auth = require('./routes/auth')
var profile = require('./routes/profile')
var event = require('./routes/event')

var app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', auth)
app.use('/', profile)
app.use('/', event)

var port = 8000
app.listen(port, function() {
    console.log('Server started on port ' + port)
  })
  