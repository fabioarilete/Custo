import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import styles from "./Units.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

export default function Units() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.unitsContainer}>
      <div className={styles.titleContainer}>
        <h1>Unidades</h1>
        <LinkButton to="/units" text="Cadastrar unidades" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Unidades.....</p>
      </Container>
    </div>
  );
}
