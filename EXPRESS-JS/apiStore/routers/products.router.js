const express = require('express');
const { getAll, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controller');
const uploadStorage = require('../middleware/upload.middleware');
const veryToken = require('../middleware/validateJwt.middleware');
const router = express.Router();



router.get('/',getAll);
router.post('/',veryToken,uploadStorage.single('photo'),createProduct);
router.put('/:id',veryToken,uploadStorage.single('photo'),updateProduct);
router.delete('/:id',veryToken,deleteProduct);


module.exports = router;