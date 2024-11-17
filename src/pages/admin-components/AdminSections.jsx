import styles from "./adminsections.module.css";
import UsersAndAccounts from "./UsersAndAccounts";
import Inventory from "./Inventory";
import Sales from "./Sales";

export default function AdminSections({ section }) {
  if (section === "Users And Accounts") {
    return (
      <div className={styles.sectionContainer}>
        <UsersAndAccounts />
      </div>
    );
  } else if (section === "Inventory") {
    return (
      <div className={styles.sectionContainer}>
        <Inventory />
      </div>
    );
  } else if (section === "Sales") {
    return (
      <div className={styles.sectionContainer}>
        <Sales />
      </div>
    );
  } else {
    return <div>Page not found</div>;
  }
}
