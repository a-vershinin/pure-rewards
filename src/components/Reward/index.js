// Core
import React, { useState } from "react";
import cx from "classnames";
import moment from "moment";

// Utils
import styles from "./styles.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Reward = props => {
  const {
    reward,
    users = [],
    statuses = [],
    onSave = () => {},
    onCancel = () => {}
  } = props;
  const propDate = moment(reward && reward.date, "MM/DD/YYYY");
  const initialDate = reward && reward.date ? propDate.toDate() : "";
  const [user, setUser] = useState((reward && reward.user.name) || "");
  const [experience, setExp] = useState((reward && reward.experience) || "");
  const [status, setStatus] = useState((reward && reward.status) || "");
  const [date, setDate] = useState(initialDate);

  const handleChangeUser = evt => {
    const value = evt.target.value;
    value && setUser(value);
  };
  const handleChangeExp = evt => {
    const value = evt.target.value;
    value && setExp(value);
  };
  const handleChangeStatus = evt => {
    const value = evt.target.value;
    value && setStatus(value);
  };
  const handleChangeDate = value => setDate(value);
  const handleSave = evt => {
    const getUserByName = name =>
      users.length && users.find(u => u.name === name);

    const data = {
      id: reward.id,
      user: getUserByName(user),
      experience,
      status,
      date: moment(date).format("MM/DD/YYYY")
    };
    onSave(data);
  };
  const handleCancel = evt => onCancel();
  const dateStyles = cx(["form-control", styles.picker]);

  return (
    <section className={styles.reward}>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={6}>
            <h1 className={styles.title}>Edit Reward #{reward && reward.id}</h1>
            <Form>
              <Form.Group as={Col} controlId="userID">
                <Form.Label>User</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={user}
                  onChange={handleChangeUser}
                >
                  {users.length ? (
                    users.map((item, idx) => (
                      <option key={item.id}>{item.name}</option>
                    ))
                  ) : (
                    <option>No users</option>
                  )}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="exp">
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  placeholder="Enter experience"
                  value={experience}
                  onChange={handleChangeExp}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="date">
                <Form.Label>Date</Form.Label>
                <DatePicker
                  className={dateStyles}
                  placeholderText="Select a date"
                  selected={date}
                  onChange={handleChangeDate}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={status}
                  onChange={handleChangeStatus}
                >
                  {statuses.length ? (
                    statuses.map((s, idx) => {
                      return <option key={idx}>{s}</option>;
                    })
                  ) : (
                    <option>No any statuses</option>
                  )}
                </Form.Control>
              </Form.Group>

              <Col>
                <Button
                  variant="primary"
                  className={styles.btnSave}
                  onClick={handleSave}
                >
                  Save
                </Button>

                <Button variant="secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reward;
