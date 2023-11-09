const User = require("../../modelsmdb/users");
const bcrypt = require("bcrypt");

const createUserMongo = async (req, res) => {
    try {
        let body = req.body;
        if (body.password) {
            body.password = bcrypt.hashSync(body.password, 10);
        }
        let user = new User(body);
        user.save();
        res.status(200).json({ error: false, message: 'Listado Usuarios', data: user });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }

}

const getAllMongo = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json({ error: false, message: 'Listado Usuarios', data: user });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }
}

const deleteUserMongo = async (req, res) => {
    try {
        let id = req.params.id;
        console.log(id)
        let user = await User.findById(id);
        if(user){
            await User.deleteOne({_id:id});
            res.status(200).json({ error: false, message: 'Listado Usuarios', data: null });
        }
        else{
            res.status(404).json({ error: true, message: 'ID USER no se encuentra', data: null });
        }
         
       
    }
    catch (e) {
        console.log(e)
        res.status(400).json({ error: true, message: e });
    }
}


module.exports = { createUserMongo, getAllMongo,deleteUserMongo } 