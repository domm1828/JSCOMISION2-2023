const mongodb = require('mongoose');
const Schema = mongodb.Schema;


const usersSchema =  new Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    active:{
        type:Boolean,
        default:true
    },
    type_user:{
        type:Number
    },
    numbers:{
        type:Number
    }
});

const User = mongodb.model('users',usersSchema);

module.exports = User;