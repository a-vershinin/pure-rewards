// Core
import React from "react";

// Utils
import styles from "./styles.module.scss";

const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
