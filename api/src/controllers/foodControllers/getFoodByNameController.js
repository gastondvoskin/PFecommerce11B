
const getFoodByNameController = async (name) => {
    
    const allFood = await Food.findAll();
    let results = await allFood.filter((food)=>food.name.toLowerCase().includes(name.toLowerCase()));
    return results.length !== 0
        ? results
        // : new Error ('No se encontraron resultados')
        : 'No se encontraron resultados'

}

module.exports = {getFoodByNameController};