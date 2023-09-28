import { useEffect, useState } from "react";

import Input from "../form/Input.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton.js";

import styles from "./MaterialsForm.module.css";
import RadioButtons from "../form/RadioButtons.js";

export default function MaterialsForm({ handleSubmit, btnText, materialData }) {
  const [units, setUnits] = useState([]);
  const [material, setMaterial] = useState(materialData || {});

  useEffect(() => {
    fetch("http://localhost:5000/units", {
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
    handleSubmit(material);
  };

  function handleChange(e) {
    setMaterial({ ...material, [e.target.name]: e.target.value });
  }

  function handleGroup(e) {
    setMaterial({
      ...material,
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
        text="Descrição do Material"
        name="description"
        placeholder="Descreva o material"
        handleOnChange={handleChange}
      />

      <Input
        step={0.001}
        inputMode="decimal"
        type="number"
        text="Valor"
        name="value"
        placeholder="Informe o valor do material"
        handleOnChange={handleChange}
      />

      <Select
        name="unitId"
        text="Selecione a unidade"
        options={units}
        handleOnChange={handleGroup}
        value={material.unit ? material.unit.id : ""}
      />

      <RadioButtons
        text="Tipo de Empresa: "
        value={material.typeCompany}
        name="typeCompany"
        label1="Presumido"
        label2="Simples"
        handleOnChange={handleChange}
      />

      <Input
        type="number"
        text="Frete"
        name="frete"
        placeholder="Informe o % de Frete"
        handleOnChange={handleChange}
      />

      <Input
        type="number"
        text="NF"
        name="nf"
        placeholder="Informe o % de nf"
        handleOnChange={handleChange}
      />

      <Input
        type="number"
        text="Aliquota de ICMS"
        name="icms"
        placeholder="Informe o % de ICMS"
        handleOnChange={handleChange}
      />

      <Input
        type="number"
        text="Aliquota de IPI"
        name="ipi"
        placeholder="Informe o % de IPI"
        handleOnChange={handleChange}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
