const multer = require('multer');
const uploadSingle = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/products/');
    },
    filename:(req,file,cb)=>{
        console.log(file);
        let nameFile=Date.now()+"_"+file.originalname
        cb(null,nameFile)
    }
});

const filterValidateFile = (req, file, cb) =>{
    let mimeType = file.mimetype;
    if(mimeType.includes('image/png') || mimeType.includes('image/jpeg') ){
        cb(null,true);
    }
    else{
        cb(null, false);
        cb(new Error("No se puede subir archivos con esa extension "+mimeType)) 
    }
}

const uploadStorage = multer({storage:uploadSingle,fileFilter:filterValidateFile});

 

module.exports = uploadStorage;