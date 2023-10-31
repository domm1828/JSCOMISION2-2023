
const db = require("../models")
const { Op } = require("sequelize");

const Products = db.product;


const getAll = async (req, res) => {

    try {
        let products = await Products.findAll();
        res.status(200).json({ error: false, message: 'Listado de Productos', data: products });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }

}

const createProduct = async (req, res) => {

    try{

        if(req.uploadError){
            res.status(500).json({ error: true, message: req.uploadError }); 
        }
        

        let body = req.body;
        if(req.file){
            body.photo = req.file.filename;
        }
        let products = await Products.create(body);
        res.status(200).json({ error: false, message: 'Producto Añadido Exitosamente', data: products });  


    } 
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }
}

const updateProduct = async (req, res) => {



}

const deleteProduct = async (req, res) => {

    try {
        let id = req.params.id;

        await Products.findAll({where:{id:id}}).then( async(result)=>{

            if(result.length > 0){

                await Products.destroy({where:{id:id}});
                res.status(200).json({ error: false, message: 'Producto Eliminado Exitosamente', data: null });
            }
            else{
                res.status(404).json({ error: true, message: 'El id de producto no existe.!' });
            }
        })
    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    } 

}

module.exports = { getAll, createProduct, updateProduct, deleteProduct }