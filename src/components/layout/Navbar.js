import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/logo São Francisco.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Custo" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/registers">Cadastros</Link>
          </li>
          <li className={styles.item}>
            <Link to="/costs">Custos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/management">Gestão</Link>
          </li>
          <li className={styles.item}>
            <Link to="/reports">Relatórios</Link>
          </li>
          <li className={styles.item}>
            <Link to="/settings">Configuração</Link>
          </li>
          <li className={styles.item}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
