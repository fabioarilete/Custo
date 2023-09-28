import LinkButton from "../layout/LinkButton";
import styles from "./Registers.module.css";

export default function Registers() {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.title}>
        <h1>Cadastros</h1>
      </div>

      <div className={styles.registers}>
        <div>
          <LinkButton to="/materials" text="Matéria Prima" />
        </div>
        <div>
          <LinkButton to="/operations" text="Mão de Obra" />
        </div>
        <div>
          <LinkButton to="/markUp" text="Mark Up" />
        </div>
        <div>
          <LinkButton to="/unit" text="Unidades" />
        </div>
      </div>
    </div>
  );
}
