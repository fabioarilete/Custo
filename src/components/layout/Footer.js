import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <p className={styles.copyRight}>
        <span>Custo - São Francisco</span> &copy; 2023
      </p>
    </footer>
  );
}
