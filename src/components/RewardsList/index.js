// Core
import React, { useState } from "react";
import cx from "classnames";

// Utils
import styles from "./styles.module.scss";
import { Container, Row, Col, Table } from "react-bootstrap";

const tHead = ["Id", "User", "Experience", "Date", "Status", "Action"];

const RewardsList = props => {
  const [tdIdx, setTdIdx] = useState(null);
  const { rewards = [], onClickColType, onSelect } = props;

  const handleClickColType = (type, idx) => {
    if (type === "action") {
      return;
    }
    setTdIdx(idx);
    onClickColType(type);
  };
  const handleRowClick = value => onSelect(value);

  const RowItem = props => {
    const { onClick, ...rest } = props;
    const cols = Object.values(rest);

    return (
      <tr>
        {cols.map((name, idx) => {
          const isAction = cols.length === idx + 1;
          const handleClick = isAction ? onClick : null;
          return (
            <td key={idx} className={styles.td} onClick={handleClick}>
              {name}
            </td>
          );
        })}
      </tr>
    );
  };

  const theadJSX = tHead.map((item, idx) => {
    const thStyles = cx(styles.th, {
      [styles.col1]: item === "Id",
      [styles.col2]: item === "Action",
      [styles.active]: tdIdx === idx
    });
    return (
      <th
        key={idx}
        className={thStyles}
        onClick={() => handleClickColType(item.toLowerCase(), idx)}
      >
        {item}
      </th>
    );
  });

  const tBodyJSX = rewards.map((item, idx) => {
    return (
      <RowItem
        key={item.id}
        id={item.id}
        name={item.user.name}
        experience={item.experience}
        date={item.date}
        status={item.status}
        acton="Edit"
        onClick={() => handleRowClick(item.id)}
      />
    );
  });

  return (
    <section className={styles.rewards}>
      <Container>
        <Row>
          <Col sm={12}>
            <Table hover size="md" className={styles.table}>
              <thead>
                <tr>{theadJSX}</tr>
              </thead>
              <tbody>{tBodyJSX}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RewardsList;
