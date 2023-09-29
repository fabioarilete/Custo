import LinkButton from "../layout/LinkButton";
import styles from "./Registers.module.css";

export default function Registers() {
  return (
    <>
      <div className={styles.registerContainer}>
        <div className={styles.title}>
          <h1>Cadastrar</h1>
        </div>

        <div className={styles.registers}>
          <div>
            <LinkButton to="/materials" text="Materiais" />
          </div>
          <div>
            <LinkButton to="/operations" text="Operações" />
          </div>
          <div>
            <LinkButton to="/markUps" text="Mark Up" />
          </div>
          <div>
            <LinkButton to="/units" text="Unidades" />
          </div>
          <div>
            <LinkButton to="/users" text="Usuários" />
          </div>
        </div>
      </div>

      <div className={styles.registerContainer2}>
        <div className={styles.title2}>
          <h1>Editar Cadastros</h1>
        </div>

        <div className={styles.registers2}>
          <div>
            <LinkButton to="/listmaterials" text="Materiais" />
          </div>
          <div>
            <LinkButton to="/listOperations" text="Operações" />
          </div>
          <div>
            <LinkButton to="/listMarkUps" text="Mark Up" />
          </div>
          <div>
            <LinkButton to="/listUnits" text="Unidades" />
          </div>
          <div>
            <LinkButton to="/users" text="Usuários" />
          </div>
        </div>
      </div>
    </>
  );
}
