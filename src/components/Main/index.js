// Core
import React from "react";

// Utils
import styles from "./styles.module.scss";

const Main = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;
