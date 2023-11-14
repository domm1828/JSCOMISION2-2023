const mongodb = require('mongoose');
const Schema = mongodb.Schema;

const clientSchema = new Schema({
    dni: {
        type:Number,
        unique:true,
        require:true
      },
      name: {
        type:String, 
        require:true
      },
      last_name: {
        type:String, 
        require:true
      },
      email: {
        type:String, 
        require:true
      },
      phone: {
        type:String, 
        require:true
      }
});

const Clients = mongodb.model('clients',clientSchema);

module.exports = Clients