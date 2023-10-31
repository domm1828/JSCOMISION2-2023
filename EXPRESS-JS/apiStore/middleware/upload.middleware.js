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
        cb(new Error('No acceptamos este tipo de archivo '+mimeType),false)
    }
}

const uploadStorage = multer({storage:uploadSingle,fileFilter:filterValidateFile});

const uploadFile = (req,res,next) =>{
   const upload = uploadStorage.single('photo');
   upload(req,res,(error)=>{
 
        if(error){
           res.status(404).send({error});
        }
        next()
   })
}

module.exports = uploadStorage;