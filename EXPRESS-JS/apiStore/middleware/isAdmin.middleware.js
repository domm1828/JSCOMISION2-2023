const isAdmin = (req, res, next)=>{
    if(req.body.isAdmin){
        next();
    }
    else{
        res.status(401).send({error:'No tienes accesso'});
    }
}
module.exports = isAdmin;