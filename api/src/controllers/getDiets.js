const {Diet}=require('../db.js');

const getDiets= async (req,res)=>{
    const allDiets=await Diet.findAll();
    res.status(200).json(allDiets);
}

module.exports=getDiets;