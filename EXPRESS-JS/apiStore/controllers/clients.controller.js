const db = require("../models");
const { Op } = require("sequelize");
const Clients = require("../modelsmdb/clients");


const getAllClients = async (req, resp) => {
    try {
        let filter = {};

        if(req.query.q){
            filter ={
                where: {
                    [Op.or]: [
                        {
                            name: {
                                [Op.like]: `%${req.query.q}%`
                            }
                        }, {
                            last_name: {
                                [Op.like]: `%${req.query.q}%`
                            }
                        }, {
                            email: {
                                [Op.like]: `%${req.query.q}%`
                            }
                        }, {
                            dni: {
                                [Op.like]: `%${req.query.q}%`
                            }
                        }
                    ] 
                }
            };
        }
        
        let clients = await db.client.findAll(filter);
        resp.status(200).json({ error: false, message: 'Listado Clientes', data: clients });
    }
    catch (e) {
        resp.status(400).json({ error: true, message: e });
    }

}

const postCreateClient = async (req, resp) => {

    try {
        let client = await db.client.create(req.body);
        let clientMongo = new Clients(req.body);
        await clientMongo.save();
        resp.status(200).json({ error: false, message: 'Cliente Creado exitosamente', data: client });
    }
    catch (e) {
        resp.status(400).json({ error: true, message: e });
    }

}

const deleteClient = async (req, resp) => {

    try {
        let id = req.params.id;
        await db.client.findAll({ where: { id: id } }).then(async (result) => {
            if (result.length > 0) {
                await db.client.destroy({ where: { id: id } });
                resp.status(200).json({ error: false, message: 'Cliente eliminado exitosamente', data: null });
            }
            else {
                resp.status(404).json({ error: true, message: 'ID clientes no se encuentra', data: null });
            }

        })


    }
    catch (e) {
        resp.status(400).json({ error: true, message: e });
    }

}

const updateClient = async (req, resp) => {
    try {
        let id = req.params.id;
        await db.client.update(req.body, { where: { id: id } });
        resp.status(200).json({ error: false, message: 'Cliente Modificado exitosamente', data: null });
    }
    catch (e) {
        resp.status(400).json({ error: true, message: e });
    }

}

module.exports = { getAllClients, postCreateClient, deleteClient, updateClient }