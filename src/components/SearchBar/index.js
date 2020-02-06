// Core
import React, { useState } from "react";

// Utils
import styles from "./styles.module.scss";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

const SearchBar = props => {
  const [search, setSearch] = useState("");
  const { onClickSearch = () => {} } = props;

  const handleChange = evt => {
    const value = evt.target.value;
    value && setSearch(value);
  };
  const handleClick = () => {
    onClickSearch(search);
    setSearch("");
  };

  return (
    <section className={styles.search}>
      <Container>
        <Row>
          <Col sm={12}>
            <Form inline onSubmit={evt => evt.preventDefault()}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={search}
                onChange={handleChange}
              />
              <Button variant="outline-primary" onClick={handleClick}>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SearchBar;
