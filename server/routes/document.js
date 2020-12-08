var express = require('express')
var router = express.Router()
const Document = require('../models/Document');
const User = require('../models/User');
const Event = require('../models/Event');
Event.belongsTo(User, { as: 'data_user', foreignKey: 'id_user'})


router.get('/eventAll', (req, res, next) => {

  Event.findAll({
    include: [{
      model: User, as: 'data_user'
    }]
  })
    .then(doc => 
    {
      res.send(doc)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


router.get('/documentsAll/:id', (req, res, next) => {
  Document.findAll({ where: { id_user: req.params.id } })
    .then(doc => 
    {
      res.send(doc)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


router.get('/documents/:id', (req, res, next) => {
  Document.findAll({ where: { id_event: req.params.id } })
    .then(doc => 
    {
      res.send(doc)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.get('/document/:id', (req, res, next) => {
  Document.findOne({ where: { id: req.params.id } })
    .then(doc => 
    {
      res.send(doc)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.put('/UpdateState/:id', (req, res, next) => 
{
  Document.update(
    { state: 'true'},
    { where: { id: req.params.id } })   
    return res.status(200).json({
      title: 'Data updated',
    })  
})

router.delete('/document/:id', (req, res, next) => {
  Document.destroy({
    where: {
      id: req.params.id
    }
  })
  res.send("Document is deleted");
})

module.exports = router
