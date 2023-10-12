const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest')

const validateUser = (req,resp,next) =>{

    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            "string.empty": "Ingrese su email",
            "string.email": "Ingrese un correo valido",
        })
    });

    validateRequest(req,resp,next,schema)
}

module.exports = validateUser;