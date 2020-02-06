// Core
import React from "react";

// Utils
import styles from "./styles.module.scss";

// Components
import { Wrapper, Header, Main } from "../../components";

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <div className={styles.layout}>{children}</div>
      </Main>
    </Wrapper>
  );
};
