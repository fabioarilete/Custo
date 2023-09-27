import styles from "./Home.module.css";
import imagem from "../../img/produtos-sfco.jpg";
import LinkButton from "../layout/LinkButton";

export default function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>
        Bem-vindo ao <span>Custos</span>
      </h1>
      <p>Comece agora a gerenciar os custos dos seus Produtos.</p>
      <LinkButton to="/newCost" text="Criar Novo Custo" />
      <img src={imagem} alt="Custos" />
    </section>
  );
}
