// Core
import React from "react";

// Utils
import st from "./styles.module.scss";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className={st.loader}>
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
