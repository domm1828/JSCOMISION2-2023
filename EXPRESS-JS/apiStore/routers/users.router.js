const express = require('express');
const router = express.Router();
const {getAll,createUser,deleteUser,findFilter} = require('../controllers/users.controller')
const validateUser = require('../request/user.request');

router.get('/',getAll);

router.post('/',validateUser,createUser);

router.delete('/',deleteUser);

//ROUTER DYNAMIC
router.get('/:id',findFilter)


module.exports = router;