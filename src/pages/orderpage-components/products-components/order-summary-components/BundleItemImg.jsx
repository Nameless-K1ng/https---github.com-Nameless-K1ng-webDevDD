import styles from "./bundleitemimg.module.css";

export default function BundleItemImg({ img }) {
  return (
    <div>
      <img className={styles.itemImages} src={img} alt="0" />
    </div>
  );
}
