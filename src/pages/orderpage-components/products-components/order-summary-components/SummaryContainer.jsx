import { useEffect, useState } from "react";
import BillsPayment from "./BillsPayment";
import OrderSummary from "./OrderSummary";
import styles from "./summarycontainer.module.css";
import BundleItem from "../BundleItem";
export default function SummaryComponent({
  summaryItems,
  addItem,
  summaryBundles,
  addBundle,
  numOfClassic,
  numOfPremium,
  isBundle,
  setIsBundle,
  bundleClassic,
  bundlePremium,
  setCurrentBundle,
  currentBundle,
  reset,
}) {
  let total = 0;
  const [payment, setPayment] = useState(0);
  const [change, setChange] = useState(0);
  const [recorded, setRecorded] = useState(false);
  //test 1
  let sold = [];
  let transactionSummary;
  //end test

  useEffect(() => {
    if (recorded) {
      setRecorded(false);
      setPayment(0);
    }
  }, [recorded]);

  summaryItems.map((items) => (total += items.price * items.qty));
  summaryBundles.map((items) => (total += items.price));

  //PROCESS PAYMENT
  function processPayment() {
    if (payment > total && total != 0) {
      //create the transaction summary object
      summaryItems.map((item) => (sold = [...sold, item]));
      summaryBundles.map((bundle) =>
        bundle.bundleClassic.map((item) => (sold = [...sold, item]))
      );
      summaryBundles.map((bundle) =>
        bundle.bundlePremium.map((item) => (sold = [...sold, item]))
      );
      transactionSummary = { total: total, payment: payment, sales: sold };
      //transaction summary ends here

      console.log("Payment processed");
      console.log(transactionSummary);

      setRecorded(() => true);
      setChange(payment - total);
    }
  } //end of processPayment()

  function cancel() {
    reset();
    setPayment(0);
    setChange(0);
  }

  return (
    <div className={styles.summaryComponent}>
      <div className={styles.titleDiv}>
        <h1>ORDER SUMMARY</h1>
        <OrderSummary
          summaryItems={summaryItems}
          addItem={addItem}
          summaryBundles={summaryBundles}
          addBundle={addBundle}
          numOfClassic={numOfClassic}
          numOfPremium={numOfPremium}
          isBundle={isBundle}
          setIsBundle={setIsBundle}
          bundleClassic={bundleClassic}
          bundlePremium={bundlePremium}
          setCurrentBundle={setCurrentBundle}
          currentBundle={currentBundle}
        />
        <BillsPayment
          total={total}
          setPayment={setPayment}
          payment={payment}
          change={change}
        />
        <div className={styles.processBtnDiv}>
          <button className={styles.cancelBtn} onClick={() => cancel()}>
            X
          </button>
          <button
            className={styles.processBtn}
            onClick={() => processPayment()}
          >
            PROCESS
          </button>
        </div>
      </div>
    </div>
  );
}
