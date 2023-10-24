const express = require('express');
const router = express.Router();
const {getAllClients,postCreateClient,deleteClient,updateClient} = require('../controllers/clients.controller');
const validateClient = require('../request/client.request');

/** Get all clients */
router.get('/',getAllClients);
/** Create client */
router.post('/',validateClient,postCreateClient);
/** Delete client */
router.delete('/:id',deleteClient);

/** Update client */
router.put('/:id',validateClient,updateClient);


module.exports = router;