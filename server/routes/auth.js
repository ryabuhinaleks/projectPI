var express = require('express')
var router = express.Router()
const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/signup', (req, res, next) => {
  if (!(req.body.email && req.body.password)) {
    return res.status(401).json({
      title: 'invalid credentials',
      error: 'invalid credentials'
    })
  }

  User.findOne({ where: { email: req.body.email} })
  .then(user =>
  {
    if (user) {
      return res.status(400).json({
        title: 'E-mail registered',
        error: 'invalid credentials'
      })
    }

    const newUser = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      country: req.body.country,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      img: req.body.img,
      about: 'about myself',
      pin: '0000',
    })
    newUser.save();

    return res.status(200).json({
      title: 'The user is registered'
    })
  })
})

router.post('/login', (req, res, next) => {
  User.findOne({ where: { email: req.body.email} })
  .then(user => 
    {
      if (!user) {
        return res.status(401).json({
          title: 'invalid credentials',
          error: 'invalid credentials'
        })
      }
      
      var result = bcrypt.compareSync(req.body.password, user.password);
      if(!result)
      {
        return res.status(401).json({
          title: 'Login failed',
          error: 'invalid credentials'
        })
      }

      let token = jwt.sign({ userId: user.id}, 'secretkey');
      return res.status(200).json({
        title: 'Successful login',
        token: token
      })   

    })
})


router.get('/user', (req, res, next) => {
  let token = req.headers.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    
    User.findOne({ where: { id: decoded.userId } })
    .then(user => 
    {
      res.send(user)
    })
    .catch(err => {
      res.send('error: ' + err)
    })

  })
})

module.exports = router
