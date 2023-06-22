const axios=require('axios');
const {Food}=require('../db.js')
//API information
const getApiInfo= async ()=>{
    const apiUrl=await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)
    const apiInfo= await apiUrl.data;
    const totalFood=100;
    const apiFood=apiInfo.results.map(re=>{
        return{
            name: re.title,
            image: re.image,
            summary: re.summary,
        }
    });
    const eachFood=[];
    for(let i;i<totalFood;i++){
        eachFood.push(apiFood[i]);
    }
    eachFood.forEach(food=>{
        Food.findOrCreate({
            where: {name: food.name}
        })
    })
}

module.exports= getApiInfo;