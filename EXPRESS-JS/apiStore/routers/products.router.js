const express = require('express');
const { getAll, createProduct, updateProduct, deleteProduct } = require('../controllers/products.controller');
const uploadStorage = require('../middleware/upload.middleware');
const router = express.Router();



router.get('/',getAll);
router.post('/',uploadStorage.single('photo'),createProduct);
router.put('/:id',uploadStorage.single('photo'),updateProduct);
router.delete('/:id',deleteProduct);


module.exports = router;