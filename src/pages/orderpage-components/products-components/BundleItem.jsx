import bundleImg from "./assets/bundle.png";
import styles from "./bundleitem.module.css";
export default function BundleItem({
  bundleName,
  handleBundleClick,
  bundlePrice,
  numOfPremium,
  numOfClassic,
}) {
  return (
    <div>
      <button
        className={styles.bundleBtn}
        onClick={() =>
          handleBundleClick({
            name: bundleName,
            img: bundleImg,
            price: bundlePrice,
          })
        }
      >
        <div className={styles.bundleLabel}>{bundleName}</div>
        <img
          src={bundleImg}
          alt="bundle donut image"
          className={styles.bundleItemImg}
        />
        <div className={styles.numOfItemDiv}>
          {numOfClassic} Classic | {numOfPremium} Premium
        </div>
        <div className={styles.bundleLabel}>P{bundlePrice}</div>
      </button>
    </div>
  );
}
