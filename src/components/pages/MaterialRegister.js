import { useNavigate } from "react-router-dom";
import MaterialsForm from "../Project/MaterialsForm";
import styles from "./MaterialRegister.module.css";

export default function MaterialRegister() {
  const navigate = useNavigate();
  function createPost(material) {
    fetch("http://localhost:5000/rawMaterialRegister", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(material),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/listMaterials", {
          state: { message: "Material cadastrado com sucesso!" },
        });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      <div className={styles.materialContainer}>
        <h1>Cadastro de Matéria Prima</h1>
        <MaterialsForm handleSubmit={createPost} btnText="Cadastrar Material" />
      </div>
    </div>
  );
}
