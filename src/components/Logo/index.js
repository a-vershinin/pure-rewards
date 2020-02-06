// Core
import React from "react";
import { Link } from "react-router-dom";

// Utils
import styles from "./styles.module.scss";

const logoImage =
  "https://uploads-ssl.webflow.com/5db9df17e73c7a3b875b2302/5deac1b8e942e7a1dc370e93_logo-bb-blue.svg";

const Logo = ({ route = "/" }) => {
  return (
    <div className={styles.logo}>
      <Link className={styles.link} to={route}>
        <picture>
          <img
            className={styles.image}
            src={logoImage}
            srcSet={logoImage}
            alt="logo"
            title="Bluebord"
          />
        </picture>
      </Link>
    </div>
  );
};

export default Logo;
