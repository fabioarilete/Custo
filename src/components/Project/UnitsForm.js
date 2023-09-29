import { useState } from "react";

import Input from "../form/Input.js";
import SubmitButton from "../form/SubmitButton.js";

import styles from "./UnitsForm.module.css";

export default function OperationsForm({ handleSubmit, btnText, unitData }) {
  const [unit, setUnit] = useState(unitData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(unit);
  };

  function handleChange(e) {
    setUnit({ ...unit, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Descrição da Unidade"
        name="name"
        placeholder="Descreva a unidade"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Quantidade"
        name="qt"
        placeholder="Informe a qt da Unidade"
        handleOnChange={handleChange}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
