import styles from "./Footer.module.css"

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.text}>
        Vianda express | Copyright @ 2023 | Todos los derechos reservados
      </span>
    </footer>
  );
}

export default Footer;