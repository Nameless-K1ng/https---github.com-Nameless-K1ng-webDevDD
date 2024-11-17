import styles from "./infobox.module.css";

export default function InfoBox({ type, info, setter }) {
  return (
    <div className={styles.infoboxContainer}>
      <div className={styles.typeDiv}>{type}</div>
      <div className={styles.infoDiv}>
        <input
          type="text"
          onChange={(e) => setter(e.target.value)}
          className={styles.textBox}
          placeholder={"Enter " + type}
          value={info}
        />
      </div>
    </div>
  );
}
