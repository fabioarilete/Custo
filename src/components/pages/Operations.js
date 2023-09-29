import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import styles from "./Operations.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

export default function Operations() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.operationContainer}>
      <div className={styles.titleContainer}>
        <h1>Operações</h1>
        <LinkButton to="/operations" text="Cadastrar nova operação" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Operações.....</p>
      </Container>
    </div>
  );
}
