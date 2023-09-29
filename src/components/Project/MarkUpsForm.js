import { useState } from "react";

import Input from "../form/Input.js";
import SubmitButton from "../form/SubmitButton.js";

import styles from "./MarkUpsForm.module.css";

export default function OperationsForm({ handleSubmit, btnText, markUpData }) {
  const [markUp, setMarkUp] = useState(markUpData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(markUp);
  };

  function handleChange(e) {
    setMarkUp({ ...markUp, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Descrição do Mark Up"
        name="description"
        placeholder="Descreva o Mark Up"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Impostos"
        name="impostos"
        placeholder="Informe o percentual de Impostos"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Comissão"
        name="commissao"
        placeholder="Informe o percentual de Comissão"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Administração"
        name="administracao"
        placeholder="Informe o percentual de Administração"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Frete"
        name="frete"
        placeholder="Informe o percentual de Frete"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Financeiro"
        name="financeiro"
        placeholder="Informe o percentual de Financeiro"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Promotores"
        name="promotores"
        placeholder="Informe o percentual de Promotores"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Marketing"
        name="marketing"
        placeholder="Informe o percentual de Marketing"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Bonificações"
        name="bonificacoes"
        placeholder="Informe o percentual de Bonificações"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Lucro"
        name="lucro"
        placeholder="Informe o percentual de Lucro"
        handleOnChange={handleChange}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
