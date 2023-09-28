import { useEffect, useState } from "react";

import Input from "../form/Input.js";
import Select from "../form/Select.js";
import SubmitButton from "../form/SubmitButton.js";

import styles from "./CostForm.module.css";
import RadioButtons from "../form/RadioButtons.js";

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

      <RadioButtons
        text="Substituição Tributária: "
        value={product.st}
        name="st"
        label1="Sim"
        label2="Não"
        handleOnChange={handleChange}
      />

      <RadioButtons
        text="Tipo do Produto: "
        value={product.tipo}
        name="tipo"
        label1="Produzido"
        label2="Comprado"
        handleOnChange={handleChange}
      />

      <RadioButtons
        text="SFCO x STTE: "
        value={product.simples}
        name="simples"
        label1="Sim"
        label2="Não"
        handleOnChange={handleChange}
      />

      <Select
        name="grupoId"
        text="Selecione o Grupo de Produto"
        options={grupos}
        handleOnChange={handleGroup}
        value={product.grupo ? product.grupo.id : ""}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}
