const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async(req,res)=>{

    try {
       
        await User.findOne({where:{ email:req.body.email}}).then( (user)=>{

            if(!user){
               return  res.status(401).json({ error: true, message: 'usuario y contraseña no existen' });   
            }

            let passwordIsValid = bcrypt.compareSync(req.body.password,user.password);

            if(!passwordIsValid){
                return  res.status(401).json({ error: true, message: 'contraseña y usuario no existen' });   
            }

            let token = jwt.sign({id:user.id},"ABCDEFGHIJKLMNOPQRSTUVWXYZ",{
                expiresIn:20
            });

            let data ={ user,token}
            res.status(200).json({ error: false, message: 'Usuario logueado', data: data });

        }) 

    }
    catch (e) {
        res.status(400).json({ error: true, message: e });
    }


}

module.exports = login