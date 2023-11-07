const express = require('express');
const router = express.Router();
const {getAll,createUser,deleteUser,updateUser} = require('../controllers/users.controller')
const validateUser = require('../request/user.request');

router.get('/',getAll);

router.post('/',validateUser,createUser);

router.delete('/:id',deleteUser); 

router.put('/:id',updateUser)


module.exports = router;