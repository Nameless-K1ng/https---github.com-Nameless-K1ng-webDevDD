import BundleItem from "./BundleItem";
import styles from "./bundle.module.css";

export default function ({ handleBundleClick }) {
  return (
    <div className={styles.prodContainer}>
      <BundleItem
        bundleName="DELIGHTS"
        handleBundleClick={handleBundleClick}
        bundlePrice={379}
        numOfClassic={3}
        numOfPremium={9}
      />
      <BundleItem
        bundleName="FAMOUS"
        handleBundleClick={handleBundleClick}
        bundlePrice={399}
        numOfClassic={6}
        numOfPremium={6}
      />
      <BundleItem
        bundleName="AWESOME"
        handleBundleClick={handleBundleClick}
        bundlePrice={549}
        numOfClassic={8}
        numOfPremium={8}
      />
      <BundleItem
        bundleName="SUPREME"
        handleBundleClick={handleBundleClick}
        bundlePrice={559}
        numOfClassic={3}
        numOfPremium={15}
      />
    </div>
  );
}
