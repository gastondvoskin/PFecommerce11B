import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getUserOrderDetailAction,
  postUserReviewAction,
  getUserDetailAction,
} from "../../redux/userSlice";
import styles from "./UserOrderDetail.module.css";
import SidebarUser from "../../clientComponents/SidebarUser/SidebarUser";

const UserOrderDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userOrderDetail = useSelector(
    (state) => state.usersReducer.userOrderDetail
  );
  const userDetail = useSelector((state) => state.usersReducer.userDetail);
  const [ratings, setRatings] = useState({});
  const [comments, setComments] = useState({});
  const [isHovered, setIsHovered] = useState({});

  const userIdRaw = userDetail.map((user) => user.id);
  const userId = userIdRaw[0];

  const handleStarClick = (itemId, selectedRating) => {
    if (selectedRating === ratings[itemId]) {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [itemId]: 0,
      }));
    } else {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [itemId]: selectedRating,
      }));
    }
  };

  const handleStarHover = (itemId, selectedRating) => {
    setIsHovered((prevIsHovered) => ({
      ...prevIsHovered,
      [itemId]: selectedRating,
    }));
  };

  const handleStarHoverLeave = (itemId) => {
    setIsHovered((prevIsHovered) => ({
      ...prevIsHovered,
      [itemId]: 0,
    }));
  };

  const handleCommentChange = (itemId, event) => {
    const value = event.target.value;
    setComments((prevComments) => ({
      ...prevComments,
      [itemId]: value,
    }));
  };

  const handleSubmitReview = (itemId) => {
    const item = userOrderDetail.Items.find((item) => item.id === itemId);
    if (item) {
      const foodId = item.FoodId;
      let rating = ratings[itemId];
      if (!rating) {
        rating = 0;
      }
      const comment = comments[itemId];

      dispatch(postUserReviewAction(foodId, userId, comment, rating, itemId));

      setRatings((prevRatings) => ({
        ...prevRatings,
        [itemId]: rating,
      }));
      setComments((prevComments) => ({
        ...prevComments,
        [itemId]: comment,
      }));
      dispatch(getUserOrderDetailAction(id));
    }
  };

  useEffect(() => {
    dispatch(getUserOrderDetailAction(id));
  }, [dispatch]);

  return (
    <main className={styles.mainContainer}>
      <SidebarUser />
      <div className={styles.orderdiv}>
        <h3>{userOrderDetail?.User.name}</h3>
        <table className={styles.destable}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Vianda</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Total</th>
              <th>Puntuación</th>
              <th>Comentario</th>
            </tr>
          </thead>
          <tbody>
            {userOrderDetail?.Items.map((i) => (
              <tr key={i.id}>
                <td>{i.id}</td>
                <td>{i.Food.name}</td>
                <td>{i.quantity}</td>
                <td>{i.final_price}</td>
                <td>{i.amount}</td>
                <td>
                  {i.Review ? (
                    <div className={styles.starsList}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={
                            star <= i.Review.rating
                              ? styles.star_filled
                              : styles.star
                          }
                          aria-label={`${star} star`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className={styles.starsList}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={
                            star <= (ratings[i.id] || 0) ||
                            star <= (isHovered[i.id] || 0)
                              ? styles.star_filled
                              : styles.star
                          }
                          onClick={() => handleStarClick(i.id, star)}
                          onMouseEnter={() => handleStarHover(i.id, star)}
                          onMouseLeave={() => handleStarHoverLeave(i.id)}
                          role="button"
                          aria-label={`${star} star`}
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  )}
                </td>
                <td>
                  {i.Review ? (
                    <div>{i.Review.comment || "No hay comentario"}</div>
                  ) : (
                    <div>
                      <input
                        type="text"
                        value={comments[i.id] || ""}
                        onChange={(e) => handleCommentChange(i.id, e)}
                        disabled={i.Review}
                      />
                      <button
                        onClick={() => handleSubmitReview(i.id)}
                        disabled={i.Review}
                      >
                        Enviar
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default UserOrderDetail;
