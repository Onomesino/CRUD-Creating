import React from "react";
import { Container, Row } from "react-bootstrap";
import User from "./User";
import Crud from "./Crud.css"

const Users = (props) => {
  return (
    <Container>
      <Row>
        {props.usersData.map((user) => {
          return (
            <User
              userInfo={user}
              key={user.id}
              deleteUser={props.deleteUser}
              editUser={props.editUser}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Users;
