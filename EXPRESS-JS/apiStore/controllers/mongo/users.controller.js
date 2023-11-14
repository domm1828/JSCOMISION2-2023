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
        res.status(200).json({ error: false, message: 'Usuario creado', data: user });
    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }

}

const getAllMongo = async (req, res) => {
    try {
        let filter ={}
        if(req.query.email){
            let regex = new RegExp(req.query.email)
            filter ={email: regex} 
        }
        /**
         *  contenga o donde encuentre /cadena/
         *  donde comienze  /cadena$/
         *  donde finalize  /^cadena/
         * 
         */ 
        const user = await User.find(filter).populate('client')
        //await User.find(filter,{'email':1,'active':1}).limit(1);
        //.select(['email','active']);
        res.status(200).json({ error: false, message: 'Listado Usuarios', data: user });
    }
    catch (e) {
        console.log(e)
        res.status(400).json({ error: true, message: e });
    }
}

const deleteUserMongo = async (req, res) => {
    try {
        let id = req.params.id; 
        let user = await User.findById(id);
        if(user){
            await User.deleteOne({_id:id});
            res.status(200).json({ error: false, message: 'Usuarios Eliminado', data: null });
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

const updateUserMongo = async (req, res)=>{

    let id = req.params.id; 
    let user = await User.findById(id);
    if(user){
        let body = req.body;
        if (body.password) {
            body.password = bcrypt.hashSync(body.password, 10);
        }
        await User.updateOne({_id:id},body)
        res.status(200).json({ error: false, message: 'Usuario Modificado', data: null });
    }
    else{
        res.status(404).json({ error: true, message: 'ID USER no se encuentra', data: null });
    }
}


module.exports = { createUserMongo, getAllMongo,deleteUserMongo,updateUserMongo } 