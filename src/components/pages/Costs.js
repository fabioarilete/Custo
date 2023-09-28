import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import styles from "./Costs.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

export default function Costs() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.costContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus Custos</h1>
        <LinkButton to="/newCost" text="Criar Novo Custo" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Custos.....</p>
      </Container>
    </div>
  );
}
