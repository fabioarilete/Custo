import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layout/Message";
import styles from "./Costs.module.css";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import CostCard from "../Project/CostCard";

export default function Costs() {
  const [custos, setCustos] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [custoMessage, setCustoMessage] = useState("");

  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCustos(data);
          setRemoveLoading(true);
        })
        .catch((err) => console.log(err));
    }, 300);
  }, []);

  function removeCusto(id) {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setCustos(custos.filter((custo) => custo.id !== id));
        setCustoMessage("Custo removido com sucesso!");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.costContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus Custos</h1>
        <LinkButton to="/newCost" text="Criar Novo Custo" />
      </div>
      {message && <Message type="success" msg={message} />}
      {custoMessage && <Message type="success" msg={custoMessage} />}

      <Container customClass="start">
        {custos.length > 0 &&
          custos.map((custo) => (
            <CostCard
              id={custo.id}
              productId={custo.productId}
              name={custo.description}
              cost={custo.cost}
              grupo={custo.grupo.name}
              key={custo.id}
              handleRemove={removeCusto}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && custos.length === 0 && (
          <p>Não há custos cadastrados!</p>
        )}
      </Container>
    </div>
  );
}
