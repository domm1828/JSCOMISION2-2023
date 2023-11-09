const mongodb = require('mongoose');
const dbUrl = require('./configurl');


mongodb.connect(dbUrl.urlProd).then(() => {
    console.log("CONNECT MONGO")
}).catch((error) => {
    console.log(error)
})