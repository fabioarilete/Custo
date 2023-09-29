import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import styles from "./Materials.module.css";

export default function Materials() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.materialsContainer}>
      <div className={styles.titleContainer}>
        <h1>Matéria Prima</h1>
        <LinkButton to="/materials" text="Cadastrar novo material" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Materiais.....</p>
      </Container>
    </div>
  );
}
