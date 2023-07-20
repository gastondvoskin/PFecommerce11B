import CardsContainer from "../../clientComponents/CardsContainer/CardsContainer";
import styles from "./MyFavorites.module.css";
import { useSelector } from "react-redux";
import SidebarUser from "../../clientComponents/SidebarUser/SidebarUser";

export default function MyFavorites() {
  const favorites = useSelector((state) => state.usersReducer.userFavorites);
  const allItems = useSelector((state) => state.shopingCartReducer.itemsOrder);
  const orderUser = useSelector(
    (state) => state.shopingCartReducer.pendingOrder
  );

  return (
    <main className={styles.mainContainer}>
      <SidebarUser />
      {!favorites.length ? (
        ""
      ) : (
        <section className={styles.sectionContainer}>
          <h1 className={styles.sectionTitle}>Mis favoritos</h1>
          <CardsContainer
            currentFoods={favorites}
            allItems={allItems}
            orderId={orderUser?.id}
          />
        </section>
      )}
    </main>
  );
}
