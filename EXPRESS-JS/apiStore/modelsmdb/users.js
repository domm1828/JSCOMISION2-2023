const mongodb = require('mongoose');
const Schema = mongodb.Schema;


const usersSchema =  new Schema({
    email:{
        type:String,
        select: true 
    },
    password:{
        type:String
    },
    active:{
        type:Boolean,
        default:true,
        select: true 
    },
    type_user:{
        type:Number
    },
    numbers:{
        type:Number
    },
    client:{
        type: mongodb.Schema.Types.ObjectId,
        ref:'clients'
    }
});

const User = mongodb.model('users',usersSchema);

module.exports = User;