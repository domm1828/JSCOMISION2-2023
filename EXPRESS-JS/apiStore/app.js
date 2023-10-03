const express = require('express');
const app = express();
const port = 3500;

const userRouter = require('./routers/users.router')

//https://localhost:3500

//ROUTER POST - GET - DELETE - PUT - PATCH - HEADER - OPTIONS
// app.METHOD(PATH,HANDLER);
app.get('/',(req,res)=>{
    res.json({'message':'WELCOME API REST.'});
    //send envia datos de cualquier tipo
    //json evia una respuesta en json
    //end finaliza el proceso de repuesta
});

app.get('/hello',(req,res)=>{
    res.json({data:'hello'});
});

app.use('/users',userRouter);


//MVC
//MODEL(STRUCTURE DATA) VIEW (UI) CONTROLLER (LOGIC)


app.listen(port,()=>{
    console.log("Welcome https://localhost:"+port)
});
