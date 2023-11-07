const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt");



const getAll = async (req, res) => {
    try {
        let user = await User.findAll({include:['clientsUser']});
        res.status(200).json({ error: false, message: 'Listado Usuarios', data: user });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }

}

const createUser = async (req, res) => {

    try {
        let body = req.body;
        if (body.password) {
            body.password = bcrypt.hashSync(body.password, 10);
        }
        let user = await User.create(body);
        res.status(200).json({ error: false, message: 'Listado Usuarios', data: user });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }

}

const deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        let user = await User.findByPk(id);
        if (user) {
            await User.destroy({ where: { id: id } });
            res.status(200).json({ error: false, message: 'Usuario ELIMINADO', data: null });
        }
        else {
            resp.status(404).json({ error: true, message: 'ID USER no se encuentra', data: null });
        }
    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }

}

const updateUser = async (req, res) => {
    try {
        let id = req.params.id;
        let user = await User.findByPk(id);
        if (user) {
            let body = req.body;
            if (body.password) {
                body.password = bcrypt.hashSync(body.password, 10);
            }
            await User.update(body,{ where: { id: id } });
            res.status(200).json({ error: false, message: 'USURIO MODIFICADO', data: null });
        }
        else {
            resp.status(404).json({ error: true, message: 'ID USER no se encuentra', data: null });
        }
    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }


}

module.exports = { getAll, createUser, deleteUser, updateUser }