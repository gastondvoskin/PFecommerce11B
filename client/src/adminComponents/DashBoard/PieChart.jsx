import React, { useEffect } from 'react'
import { ResponsivePie } from '@nivo/pie';
import { useDispatch, useSelector } from 'react-redux';
import { getBestSellersAction, setQuantityCase } from '../../redux/adminSlice';
import styles from './PieChart.module.css';
const PieChart = () => {
    // const data = [
    //     { id: 'Pasta de camarones y vino blanco', label: 'Pasta de camarones y vino blanco', value: 35 },
    //     { id: 'Costillas de cerdo BBQ', label: 'HamCostillas de cerdo BBQ', value: 45 },
    //     { id: 'Asado de tira al chimichurri', label: 'Asado de tira al chimichurri', value: 20 },
    //   ];
    const dispatch = useDispatch()
    const quantityOfBestSellers = useSelector((state)=> state.adminReducer.quantityOfBestSellers)
    const bestSellers = useSelector((state)=> state.adminReducer.bestSellers)
    console.log(bestSellers.message);
    useEffect(()=>{
        dispatch(getBestSellersAction(quantityOfBestSellers))
    },[quantityOfBestSellers])

    const handleChange = async (event) =>{
        const {value} = event.target 
        dispatch(setQuantityCase(value))
    }
    return (
        <div className={styles.container}>
            <div style={{ height: '400px'}}>
                <div>
                    <h2>Productos mas vendidos</h2>
                    <div className={styles.select}>
                        <h3>Cantidad de productos:</h3>
                        <select onChange={handleChange} value = {quantityOfBestSellers} name="" id="">
                            <option value="3">3</option>
                            <option value="6">6</option>
                            <option value="9">9</option>
                        </select> 
                    </div>
                    
                </div>
                <div className={styles.chartContainer}>
                    {!bestSellers.message
                    ? <ResponsivePie
                    data={bestSellers && bestSellers}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'category10' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    enableRadialLabels={false}
                    enableSliceLabels={true}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkColor={{ from: 'color' }}
                    sliceLabelsSkipAngle={10}
                    sliceLabelsTextColor="#333333"
                    />
                    : <h4>{bestSellers.message}</h4>}
                </div>
                
            </div>
        </div>
            
    
    )
}

export default PieChart