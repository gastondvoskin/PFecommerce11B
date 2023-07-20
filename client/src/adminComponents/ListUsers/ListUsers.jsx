import React from "react";
import styles from "./ListUsers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const handleDelete = () => {
  console.log("borrando");
};

const ListUsers = ({ name, email, type }) => {
  return (
    <tr className={styles.tds}>
      <td className={styles.tbodys}>{name}</td>
      <td className={styles.tbodys}>{email}</td>
      <td className={styles.tbodys}>{type}</td>
      <td className={styles.tbodys}>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </td>
    </tr>
  );
};

export default ListUsers;
