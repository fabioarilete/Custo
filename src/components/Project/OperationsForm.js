import { useEffect, useState } from "react";

import Input from "../form/Input.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton.js";

import styles from "./OperationsForm.module.css";

export default function OperationsForm({
  handleSubmit,
  btnText,
  operationData,
}) {
  const [units, setUnits] = useState([]);
  const [operation, setOperation] = useState(operationData || {});

  useEffect(() => {
    fetch("http://localhost:5000/unitsRegister", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUnits(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(operation);
  };

  function handleChange(e) {
    setOperation({ ...operation, [e.target.name]: e.target.value });
  }

  function handleGroup(e) {
    setOperation({
      ...operation,
      unit: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Descrição da Operação"
        name="description"
        placeholder="Descreva a operação"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Valor da Hora"
        name="value"
        placeholder="Informe o valor da hora"
        handleOnChange={handleChange}
      />

      <Select
        name="unitId"
        text="Selecione a unidade"
        options={units}
        handleOnChange={handleGroup}
        value={operation.unit ? operation.unit.id : ""}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
