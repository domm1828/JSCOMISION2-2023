const express = require('express');
const { createUserMongo,getAllMongo,deleteUserMongo } = require('../../controllers/mongo/users.controller');
const router = express.Router();
 
 

router.get('/',getAllMongo);

router.post('/',createUserMongo);
router.delete('/:id',deleteUserMongo);
 


module.exports = router;