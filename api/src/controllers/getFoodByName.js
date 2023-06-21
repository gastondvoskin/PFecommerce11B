const getAllFood=require('./getAllFood.js');

const getFoodByName= async (req, res)=>{
    const name=req.query.name;
    let allFood= await getAllFood();
    if(name){
        let foodByName= await allFood.filter(fo=>fo.name.toLowerCase().includes(name.toLowerCase()));
        foodByName.length?
        res.status(200).json(foodByName):
        res.status(404).json({message:"Plato no encontrado."});
    }else{
        res.status(200).json(allFood)
    }
};

module.exports=getFoodByName;