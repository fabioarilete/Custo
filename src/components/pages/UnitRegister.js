import { useNavigate } from "react-router-dom";
import styles from "./UnitRegister.module.css";
import UnitsForm from "../Project/UnitsForm";

export default function UnitRegister() {
  const navigate = useNavigate();
  function createPost(unit) {
    fetch("http://localhost:5000/unitsRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(unit),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/listUnits", {
          state: { message: "Unidade cadastrada com sucesso!" },
        });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className={styles.unitsContainer}>
        <h1>Cadastro de Unidades</h1>
        <UnitsForm handleSubmit={createPost} btnText="Cadastrar Unidade" />
      </div>
    </div>
  );
}
