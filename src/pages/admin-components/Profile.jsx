import styles from "./profile.module.css";

export default function Profile({ name }) {
  return (
    <div className={styles.container}>
      <button className={styles.profileBtn}>{name}</button>
    </div>
  );
}
