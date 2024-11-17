import { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import styles from "./usersandaccounts.module.css";
import Profile from "./Profile";

export default function UsersAndAccounts() {
  const [usernames, addUsernames] = useState([]);
  const [users, addUsers] = useState([]);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  //whenever users change value, execute this code
  useEffect(() => {
    console.log(users);
    console.log("");
    console.log(users.includes(userName));
  }, [users]);

  function createAccount() {
    users.map((user) => addUsernames([...usernames, user.userName]));
    let exist = usernames.includes(userName);
    if (exist) {
      console.log("Denied");
      addUsernames([]);
    } else {
      console.log("admitted");
      addUsers([
        ...users,
        { name: name, userName: userName, password: password },
      ]);
    }
  }

  return (
    <div className={styles.unaContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profileLogo}>Users</div>{" "}
        <div className={styles.profiles}>
          {users.map((user) => (
            <Profile name={user.name} key={user.userName} />
          ))}
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.spaceDiv}></div>
        <div className={styles.infoDiv}>
          <InfoBox type={"Name"} info={name} setter={setName} />
          <InfoBox type={"Username"} info={userName} setter={setUserName} />
          <InfoBox type={"Password"} info={password} setter={setPassword} />
        </div>
        <div className={styles.btnDiv}>
          <button className={styles.createBtn} onClick={createAccount}>
            CREATE ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
}
