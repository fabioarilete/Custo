import { useNavigate } from "react-router-dom";
import CostForm from "../Project/CostForm";
import styles from "./NewCost.module.css";

export default function NewCost() {
  const navigate = useNavigate();
  function createPost(product) {
    product.materials = [];
    product.services = [];

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate("/costs", {
          state: { message: "Produto criado com sucesso!" },
        });
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className={styles.newCostContainer}>
      <h1>Criar Custo do Produto</h1>
      <p>Crie seu produto para depois adicionar seus componentes.</p>
      <CostForm handleSubmit={createPost} btnText="Criar Custo" />
    </div>
  );
}
