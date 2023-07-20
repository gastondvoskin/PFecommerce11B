import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserOrderDetailAction } from "../../redux/userSlice";
import { getUserDetailAction } from "../../redux/userSlice";
import styles from "./UserOrderDetail.module.css";
import { useState } from "react";
import { postUserReviewAction } from "../../redux/userSlice";

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
    console.log(`Clicked star: ${selectedRating}`);
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

      console.log("id de la food ", foodId);
      console.log("id del usuario ", userId);

      // Send the rating and comment data to make a review for the item with the given itemId
      console.log(
        `Submitting review for item ${itemId}: rating=${rating}, comment=${comment}`
      );
      dispatch(postUserReviewAction(foodId, userId, comment, rating));

      // Reset the rating and comment for the item after submitting the review
      setRatings((prevRatings) => ({
        ...prevRatings,
        [itemId]: 0,
      }));
      setComments((prevComments) => ({
        ...prevComments,
        [itemId]: "",
      }));
    }
  };

  useEffect(() => {
    dispatch(getUserOrderDetailAction(id));
  }, [dispatch]);

  return (
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
              </td>
              <td>
                <input
                  type="text"
                  value={comments[i.id] || ""}
                  onChange={(e) => handleCommentChange(i.id, e)}
                />
                <button onClick={() => handleSubmitReview(i.id)}>Enviar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrderDetail;
