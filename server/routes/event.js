var express = require('express')
var router = express.Router()
const Event = require('../models/Event');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.get('/events', (req, res, next) => {
  let token = req.headers.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    
    Event.findAll({ where: { id_user: decoded.userId } })
    .then(events => 
    {
      res.send(events)
    })
    .catch(err => {
      res.send('error: ' + err)
    })

  })
})

router.get('/event/:id', (req, res, next) => {
    Event.findOne({ where: { id: req.params.id } })
    .then(event => 
    {
      res.send(event)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


router.put('/imgEvent', (req, res, next) => 
{
    Event.update(
      { img: req.body.img},
      { where: { id: req.body.id } })         
      return res.status(200).json({
        title: 'Данные обновлены!',
      })  
})


router.post('/createEvent', (req, res, next) => {
  
  if (!(req.body.event.title && req.body.event.sDate && req.body.event.c1Date && req.body.event.c_1Date && req.body.event.fDate)) {
    return res.status(401).json({
      title: 'invalid credentials',
      error: 'invalid credentials'
    })
  }


  let token = req.body.token; //token
  jwt.verify(token, 'secretkey', (err, decoded) => {
    const newEvent = new Event({
      title: req.body.event.title,
      id_user: decoded.userId,
      sDate: req.body.event.sDate,
      c1Date: req.body.event.c1Date,
      c_1Date: req.body.event.c_1Date,
      fDate: req.body.event.fDate,
      img: req.body.event.img,
      participants: '-',
    })
    newEvent.save();
  
    return res.status(200).json({
      title: 'new event'
    })
  })

})


router.put('/updateEvent', (req, res, next) => 
{
  Event.update(
    { title: req.body.event.title, sDate: req.body.event.sDate, c1Date: req.body.event.c1Date, c_1Date: req.body.event.c_1Date, fDate: req.body.event.fDate,  participants: req.body.event.participants},
    { where: { id: req.body.event.id } })   
    return res.status(200).json({
      title: 'Данные обновлены!',
    })
})


module.exports = router
