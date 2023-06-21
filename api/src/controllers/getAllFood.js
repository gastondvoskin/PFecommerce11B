const {Food, Diet}=require('../db.js');

const getAllFood=async (req,res)=>{
    const allFood=await Food.findAll({
        include:{
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}

module.exports=getAllFood;