import { useNavigate } from "react-router-dom";
import styles from "./OperationRegister.module.css";
import OperationsForm from "../Project/OperationsForm";

export default function OperationRegister() {
  const navigate = useNavigate();
  function createPost(operation) {
    fetch("http://localhost:5000/operationsRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(operation),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/listOperations", {
          state: { message: "Operação cadastrada com sucesso!" },
        });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className={styles.operationContainer}>
        <h1>Cadastro de Operações</h1>
        <OperationsForm
          handleSubmit={createPost}
          btnText="Cadastrar Operação"
        />
      </div>
    </div>
  );
}
