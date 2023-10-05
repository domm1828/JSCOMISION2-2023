const express = require('express');
const router = express.Router();
const {getAll,createUser,deleteUser,findFilter} = require('../controllers/users.controller')

router.get('/',getAll);

router.post('/',createUser);

router.delete('/',deleteUser);

//ROUTER DYNAMIC
router.get('/:id',findFilter)


module.exports = router;