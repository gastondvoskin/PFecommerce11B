cosnt {Food,Diet}=require('../db.js')

const postFood= async (req,res)=>{
    let{
        name,
        image,
        summary,
        diet,
    }=req.body;
    let foodCreate=await Food.create({
        name,
        image,
        summary,
    })
    let dietDb= await Diet.findAll({
        where: {name:diet}
    });
    foodCreate.addDiets(dietDb);
    res.status(201).json({message:'Plato creado con éxito.'})
};

module.exports=postFood;