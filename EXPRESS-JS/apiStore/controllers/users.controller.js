
const getAll = async(req,res)=>{
    res.json({data:'GET ALL'})
}

const createUser = async (req,res)=>{
    res.json({data:'METHOD POST'})
}

const deleteUser =  async (req,res)=>{
    res.json({data:'METHOD DELETE'})
}

module.exports = {getAll,createUser,deleteUser}