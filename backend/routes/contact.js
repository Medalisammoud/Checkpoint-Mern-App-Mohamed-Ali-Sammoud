//require express
const express = require('express')

//routes
const router = express.Router()

//require contact model
const Contact = require('../models/Contact')

//require Controllers
const controllers = require('../controllers/contact.controllers')


//**************** Routes *****************/

/**
 * @desc : test route
 * @path : 'http://localhost:7000/contact/test'
 * @method : GET
 * @data : no data
 */
router.get('/test', (req, res) =>{
    res.send('hello test')
})

/**
 * @desc : add contact route
 * @path : 'http://localhost:7000/contact/'
 * @method : POST
 * @data : req.body
 */
router.post('/', controllers.addContact)

/**
 * @desc : Get All contacts
 * @path : 'http://localhost:7000/contact/'
 * @method : Get
 * @data : req.body
 */
router.get('/', controllers.getAllContacts)

/**
 * @desc : Get One contact
 * @path : 'http://localhost:7000/contact/:id'
 * @method : Get
 * @data : req.body
 */
router.get('/:id', controllers.getOneContact)

/**
 * @desc : Delete contact
 * @path : 'http://localhost:7000/contact/:id'
 * @method : Delete
 * @data : req.body
 */
router.delete('/:id', controllers.deleteContact)

/**
 * @desc : Update contact
 * @path : 'http://localhost:7000/contact/:id'
 * @method : Put
 * @data :req.params & req.body
 */
router.put('/:id', controllers.updateContact)

module.exports = router;