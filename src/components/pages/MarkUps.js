import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import styles from "./MarkUps.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

export default function MarkUps() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.markUpContainer}>
      <div className={styles.titleContainer}>
        <h1>Mark Ups</h1>
        <LinkButton to="/markUps" text="Cadastrar novo Mark Up" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Mark Ups.....</p>
      </Container>
    </div>
  );
}
