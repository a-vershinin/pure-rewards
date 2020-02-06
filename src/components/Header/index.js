// Core
import React from "react";

// Utils
import st from "./styles.module.scss";

// Components
import { Container, Row, Col } from "react-bootstrap";
import { Logo } from "../index";

const Header = props => {
  return (
    <header className={st.header}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <div className={st.top}>
              <Logo />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
