var express = require('express')
var router = express.Router()
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.put('/updateImg', (req, res, next) => 
{
  let token = req.body.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    User.update(
    { img: req.body.img},
    { where: { id: decoded.userId } })   
    return res.status(200).json({
      title: 'Данные обновлены!',
    })  
  })
})

router.put('/updateProfile', (req, res, next) => 
{
  let token = req.body.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    User.update(
    { fname: req.body.fname, lname: req.body.lname ,country:req.body.country, about:req.body.about, pin:req.body.pin},
    { where: { id: decoded.userId } })   
    return res.status(200).json({
      title: 'Данные обновлены!',
    })  
  })
})

router.put('/updatePassword', (req, res, next) => 
{
  if (!(req.body.c_password && req.body.n_password  )) {
    return res.status(401).json({
      title: 'invalid credentials',
      error: 'invalid credentials'
    })
  }
  let token = req.body.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {

    User.findOne({ where: { id: decoded.userId} })
    .then(user => 
    {
      bcrypt.compare(req.body.c_password, user.password, function(err, result) {
        if(result)
        {
          User.update(
            { password: bcrypt.hashSync(req.body.n_password, 10)},
            { where: { id: decoded.userId } })   
            return res.status(200).json({
              title: 'Данные обновлены!',
            })  
        }
        else{
          res.send("Current password doesn't match")
        }
      });

    })
  })
})


module.exports = router
