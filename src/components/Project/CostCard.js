import styles from "./CostCard.module.css";
import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

export default function CostCard({
  id,
  productId,
  name,
  grupo,
  cost,
  handleRemove,
}) {
  return (
    <div className={styles.costCard}>
      <h4>
        {productId} - {name}
      </h4>
      <p>
        <span>Custo: </span>R$ {cost}
      </p>
      <p>
        <span>Grupo: </span> {grupo}
      </p>
      <div className={styles.costCardActions}>
        <Link to="/">
          <BsPencil /> Editar
        </Link>
        <button>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}
