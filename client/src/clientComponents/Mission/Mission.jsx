import foodImage from "../../assets/carousel/original2.jpeg";
import styles from "./Mission.module.css";

export default function Mission() {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h2>Comer saludable es una elección!</h2>
        <p className={styles.description}>
          Nos dedicamos a promover una alimentación saludable tanto en el
          trabajo como en el hogar. Nuestra misión es brindarte opciones
          nutritivas y sabrosas que se adapten a tu estilo de vida.
        </p>
        <ol>
          <li>1. Elegí tu vianda.</li>
          <li>2. Encargala online.</li>
          <li>3. Disfrutala donde y cuando quieras!</li>
        </ol>
      </div>
      <div className={styles.foodImage}>
        <img src={foodImage} alt="food" />
      </div>
    </div>
  );
}
