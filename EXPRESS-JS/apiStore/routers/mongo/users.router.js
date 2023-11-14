const express = require('express');
const { createUserMongo, getAllMongo, deleteUserMongo, updateUserMongo } = require('../../controllers/mongo/users.controller');
const router = express.Router();



router.get('/', getAllMongo);
router.put('/:id', updateUserMongo);
router.post('/', createUserMongo);
router.delete('/:id', deleteUserMongo);

module.exports = router;