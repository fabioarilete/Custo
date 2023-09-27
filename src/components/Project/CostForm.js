import { useEffect, useState } from "react";

import Input from "../form/Input.js";
import InputRadio from "../form/InputRadio.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton.js";

import styles from "./CostForm.module.css";

export default function CostForm({ handleSubmit, btnText, productData }) {
  const [grupos, setGrupos] = useState([]);
  const [product, setProduct] = useState(productData || {});

  useEffect(() => {
    fetch("http://localhost:5000/grupos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setGrupos(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    // console.log(product);
    handleSubmit(product);
  };

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handleGroup(e) {
    setProduct({
      ...product,
      grupo: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Código do produto"
        name="productId"
        placeholder="Insira o código do produto"
        handleOnChange={handleChange}
      />

      <Input
        type="text"
        text="Descrição do produto"
        name="description"
        placeholder="Insira a descrição do produto"
        handleOnChange={handleChange}
      />

      <Input
        type="number"
        text="Quantidade na embalagem"
        name="quantity"
        placeholder="Insira a quantidade na embalagem Master"
        handleOnChange={handleChange}
      />

      <Input
        type="text"
        text="Código EAN-13"
        name="ean13"
        placeholder="Insira o código EAN-13"
        handleOnChange={handleChange}
        value={product.ean13 ? product.ean13 : ""}
      />

      <Input
        type="text"
        text="Código DUN-14"
        name="dun14"
        placeholder="Insira o código DUN-14"
        handleOnChange={handleChange}
        value={product.dun14 ? product.dun14 : ""}
      />

      <Input
        type="text"
        text="Código NCM"
        name="ncm"
        placeholder="Insira o código NCM"
        handleOnChange={handleChange}
        value={product.ncm ? product.ncm : ""}
      />

      <Select
        name="grupoId"
        text="Selecione o Grupo de Produto"
        options={grupos}
        handleOnChange={handleGroup}
        value={product.grupo ? product.grupo.id : ""}
      />

      <InputRadio
        text="Substituição Tributária: "
        name="st"
        firstLabel="Sim "
        secondLabel="Não "
      />
      <InputRadio
        text="Tipo: "
        name="tipo"
        firstLabel="Produzido "
        secondLabel="Comprado "
      />

      <InputRadio
        text="Sfco x StTe: "
        name="simples"
        firstLabel="Sim "
        secondLabel="Não "
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
