const jwt = require('jsonwebtoken');


const veryToken = (req,res,next)=>{

 
    let token = req.headers["x-access-token"];

    if(!token){
        return  res.status(403).json({ error: true, message: 'Error en Token de Acceso' });   
    }

    jwt.verify(token,"ABCDEFGHIJKLMNOPQRSTUVWXYZ",(error,decode)=>{
        if(error){
            return  res.status(403).json({ error: true, message: 'Error en Token de Acceso' });    
        }
        req.userId= decode.id;
        next()
    })

}

module.exports = veryToken