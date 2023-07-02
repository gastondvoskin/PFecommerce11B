// This file is created to show how to access the global state using redux toolkit. 

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFoods } from '../redux/foodActions.js';

const ReduxExperiment = () => {
    const allFoods = useSelector((state) => state.foodsReducer.allFoods);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFoods());
    }, []);

    // console.log(allFoods.length)
    // console.log('reduxeperiment')
    // console.log(allFoods);

    return (
        <div>
            <h1>
                Redux Experiment Component
            </h1>
            {
                allFoods.map(food => {
                    return (
                        <div>
                            <h1>{food.name}</h1>
                            <p>{food.description}</p>
                            <img src={food.image} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ReduxExperiment;