import { useNavigate } from "react-router-dom";
import styles from "./MarkUpRegister.module.css";
import MarkUpsForm from "../Project/MarkUpsForm";

export default function OperationRegister() {
  const navigate = useNavigate();
  function createPost(markUp) {
    fetch("http://localhost:5000/markUpsRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(markUp),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/listMarkUps", {
          state: { message: "Mark Up cadastrado com sucesso!" },
        });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className={styles.operationContainer}>
        <h1>Cadastro de Mark Ups</h1>
        <MarkUpsForm handleSubmit={createPost} btnText="Cadastrar Mark Up" />
      </div>
    </div>
  );
}
