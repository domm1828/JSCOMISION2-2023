const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const isAdmin = require('./middleware/isAdmin.middleware')
const port = 4500;

const userRouter = require('./routers/users.router')
const clientRouter = require('./routers/clients.router')
const productRouter = require('./routers/products.router')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


/**ERROR HANDLER */
const errorHandler=(error,req,resp,next)=>{
    const status = error.status || 400;
    resp.status(status).json({ error: true, message: error.message });

}
/**ERROR PATH */
const invalidPathHandler = (req,resp,next) =>{
    resp.status(400)
    resp.json({ error: true, message: 'INVALIDA LA RUTA'});
}

//https://localhost:3500

//ROUTER POST - GET - DELETE - PUT - PATCH - HEADER - OPTIONS
// app.METHOD(PATH,HANDLER);
/*app.get('/',(req,res)=>{
    res.json({'message':'WELCOME API REST.'});
    //send envia datos de cualquier tipo
    //json evia una respuesta en json
    //end finaliza el proceso de repuesta
});*/

//app.use(isAdmin);
/*app.get('/hello',(req,res)=>{
    res.json({data:'hello'});
});*/

app.use('/users',userRouter);
app.use('/clients',clientRouter);
app.use('/products',productRouter);

app.use(errorHandler);
app.use(invalidPathHandler);


//MVC
//MODEL(STRUCTURE DATA) VIEW (UI) CONTROLLER (LOGIC)


app.listen(port,()=>{
    console.log("Welcome https://localhost:"+port)
});
