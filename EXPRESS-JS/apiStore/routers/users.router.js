const express = require('express');
const router = express.Router();
const {getAll,createUser,deleteUser} = require('../controllers/users.controller')

router.get('/',getAll);

router.post('/',createUser);

router.delete('/',deleteUser);


module.exports = router;