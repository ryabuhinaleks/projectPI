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


router.post('/createDocument', (req, res, next) => {
  
  if (!(req.body.document.id_event!="n1" && req.body.document.title && req.body.document.day!="n1" && req.body.document.role && req.body.document.content)) {
    return res.status(401).json({
      title: 'invalid credentials',
      error: 'invalid credentials'
    })
  }

    const newDocument = new Document({
      title: req.body.document.title,
      id_event: req.body.document.id_event,
      id_user: req.body.document.id_user,
      day: req.body.document.day,
      role: req.body.document.role,
      content: req.body.document.content,
      state: req.body.document.state,
    })
    
    newDocument.save();

    Event.update(
      { role: req.body.document.role},
      { where: { id: req.body.document.id_event } })   

    return res.status(200).json({
      title: 'new document'
    })


})

router.put('/UpdateDoc/:id', (req, res, next) => 
{
  Document.update(
    { id_event: req.body.document.id_event, title: req.body.document.title, day: req.body.document.day, role: req.body.document.role, content: req.body.document.content},
    { where: { id: req.params.id } }) 

    Event.update(
      { role: req.body.document.role},
      { where: { id: req.body.document.id_event } }) 
    
    return res.status(200).json({
      title: 'Data updated',
    })  
})


module.exports = router
