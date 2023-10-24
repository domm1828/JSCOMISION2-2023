const validateRequest = (req,resp,next,schema) =>{
    const options ={
        stripUnknown:true,
        abortEarly:false, 
        allowUnknown:true
    }
    const {error,value} = schema.validate(req.body,options);
    if(error){
        console.log(error.details)
        const message = error.details.map((elements)=>{
            let error = { label : elements.context.label,
                          message:elements.message}
            return error;
        });
        resp.status(400).json({error:true,message});
    }
    else{
        req.body = value;
        next();
    }

}
module.exports = validateRequest;