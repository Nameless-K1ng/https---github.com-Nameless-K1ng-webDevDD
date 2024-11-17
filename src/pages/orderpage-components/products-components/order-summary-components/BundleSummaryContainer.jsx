import styles from "./bundlesummarycontainer.module.css";
import BundleItemImg from "./BundleItemImg";
import { useState } from "react";

export default function BundleSummaryContainer({
  summaryBundles,
  addBundle,
  items,
  name,
  img,
  price,
  bundle,
  setIsBundle,
  bundleClassic,
  bundlePremium,
  setCurrentBundle,
  currentBundle,
}) {
  function handleDelete() {
    console.log("item deleted: " + items.name);
    addBundle(summaryBundles.filter((i) => i !== items));
    setIsBundle(false);
    setCurrentBundle((index) => index - 1);
  }

  if (bundle.premiumFull && bundle.classicFull) {
    console.log("Rendering the bundle object");
    return (
      <div className={styles.bundleSummaryItemContainer}>
        <div className={styles.bundleDiv}>
          <div>
            <img src={img} alt="" className={styles.bundleImage} />
          </div>
          <div>
            <div>{name}</div>
            <div className={styles.priceDiv}>P {price}.00</div>
          </div>
          <div className={styles.deleteBtnDiv}>
            <button className={styles.deleteBtn} onClick={() => handleDelete()}>
              x
            </button>
          </div>
        </div>
        <div className={styles.classicDiv}>
          <div>Classic</div>
          <div className={styles.itemsDiv}>
            {bundle.bundleClassic.map((item) => (
              <BundleItemImg img={item.img} />
            ))}
          </div>
        </div>
        <div className={styles.premiumDiv}>
          <div>Premium</div>
          <div className={styles.itemsDiv}>
            {bundle.bundlePremium.map((item) => (
              <BundleItemImg img={item.img} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    console.log("Rendering the bundle Arrays");
    return (
      <div className={styles.bundleSummaryItemContainer}>
        <div className={styles.bundleDiv}>
          <div>
            <img src={img} alt="" className={styles.bundleImage} />
          </div>
          <div>
            <div>{name}</div>
            <div className={styles.priceDiv}>P {price}.00</div>
          </div>
          <div className={styles.deleteBtnDiv}>
            <button className={styles.deleteBtn} onClick={() => handleDelete()}>
              x
            </button>
          </div>
        </div>
        <div className={styles.classicDiv}>
          <div>Classic</div>
          <div className={styles.itemsDiv}>
            {bundleClassic.map((item) => (
              <BundleItemImg img={item.img} />
            ))}
          </div>
        </div>
        <div className={styles.premiumDiv}>
          <div>Premium</div>
          <div className={styles.itemsDiv}>
            {bundlePremium.map((item) => (
              <BundleItemImg img={item.img} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
