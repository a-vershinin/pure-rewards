// Core
import React from "react";
import { NavLink } from "react-router-dom";

// Utils
import styles from "./styles.module.scss";
import { Container, Row, Col, Nav } from "react-bootstrap";

const navs = [
  {
    id: "1",
    name: "all"
  },
  {
    id: "2",
    name: "new"
  },
  {
    id: "3",
    name: "redeemed"
  },
  {
    id: "4",
    name: "completed"
  },
  {
    id: "5",
    name: "scheduled"
  }
];

const Filter = props => {
  const navsJSX = navs.map((n, idx) => {
    const title = n.name.charAt(0).toUpperCase() + n.name.substring(1);
    const link = "/rewards/" + n.name;

    return (
      <Nav.Item key={n.id}>
        <NavLink to={link} className="nav-link">
          {title}
        </NavLink>
      </Nav.Item>
    );
  });

  return (
    <section className={styles.filter}>
      <Container>
        <Row>
          <Col sm={12}>
            <Nav className="justify-content-center" fill variant="tabs">
              {navsJSX}
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Filter;
