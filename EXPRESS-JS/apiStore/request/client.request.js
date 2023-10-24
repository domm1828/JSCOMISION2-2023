const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest');


const validateClient = (req,res,next)=>{

    const schema = Joi.object({
        dni:Joi.number().integer().required(),
        name:Joi.string().required().max(45),
        last_name:Joi.string().required().max(45),
        email:Joi.string().email().required().max(45),
        phone:Joi.string().max(15)
    });

    validateRequest(req,res,next,schema);
}

module.exports = validateClient;