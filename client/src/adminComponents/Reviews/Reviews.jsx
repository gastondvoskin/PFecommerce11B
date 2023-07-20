import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllReviewsAction } from '../../redux/adminSlice';
import styles from './Reviews.module.css';
import { setCurrentPageAction } from '../../redux/foodActions';
import Paginado from '../../clientComponents/Paginado/Paginado';

const Reviews = () => {
  const reviews = useSelector((state) => state.adminReducer.reviews);
  const dispatch = useDispatch();
  const filteredFoods = useSelector((state) => state.foodsReducer.filteredFoods);
  const currentPage = useSelector((state) => state.foodsReducer.currentPage);
  const activeFilteredFoods = useSelector((state) => state.foodsReducer.activeFilteredFoods);
  const foodsPerPage = 4;
  const indexOfLastFood = currentPage * foodsPerPage;
  const indexOfFirstFood = indexOfLastFood - foodsPerPage;
  const currentFoods = activeFilteredFoods
    ? filteredFoods.slice(indexOfFirstFood, indexOfLastFood)
    : reviews.slice(indexOfFirstFood, indexOfLastFood);

  const paginado = (pageNumber) => {
    dispatch(setCurrentPageAction(pageNumber));
  };

  useEffect(() => {
    dispatch(getAllReviewsAction());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Reseñas</h1>
      </div>
      <div className={styles.paginadoContainer}>
      <Paginado
        foodsPerPage={foodsPerPage}
        foods={reviews.length}
        filterFoods={filteredFoods.length}
        paginado={paginado}
        currentPage={currentPage}
      />
      </div>
      <div className={styles.reviewsContainer}>
        {currentFoods.map((review) => (
          <div key={review.id} className={styles.review}>
            <div className={styles.foodImage}>
              <img src={review.Food.image} alt="" />
              
            </div>
            <div className={styles.reviewInfo}>
              <p className={styles.foodName}>{review.Food.name}</p>
              <p className={styles.userComment}>"{review.comment}"</p>
              <p className={styles.userName}>Usuario: {review.User.name}</p>
              <div className={styles.userRating}>
                <p>Valoracion: </p>
                <div className={styles.starsList}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= review.rating ? styles.star_filled : styles.star}
                      aria-label={`${star} star`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
