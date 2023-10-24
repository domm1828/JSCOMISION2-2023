const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest');
const { EmailEmpty, EmailError } = require('./validate_constant'); 
const validateUser = (req,resp,next) =>{

    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            "string.empty": EmailEmpty,
            "string.email":  EmailError,
        }),
        password:Joi.string().required().min(6).messages({
            "any.required" :"El password es requerido",
            'string.min':"Ingrese como minimo 6 caracteres en tu contraseña"
        }),
        type_user:Joi.number().integer().required(),
        clients_id:Joi.number().integer().required()
    });

    validateRequest(req,resp,next,schema)
}

module.exports = validateUser;