import styles from "./InputRadio.module.css";

export default function InputRadio({
  firstLabel,
  secondLabel,
  text,
  name,
  handleChange,
}) {
  return (
    <div className={styles.radioControl}>
      <p>{text}</p>
      <label>
        {firstLabel}
        <input type="radio" value={"Sim"} name={name} onChange={handleChange} />
      </label>
      <label>
        {secondLabel}
        <input type="radio" value={"Não"} name={name} onChange={handleChange} />
      </label>
    </div>
  );
}
