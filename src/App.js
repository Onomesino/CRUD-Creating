import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./CrudComponent/Users";
import AddUserForm from "./CrudComponent/AddUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Grace",
          email: "grace@gmail.com",
          gen: 21,
          id: "nlhyuo-670-898",
        },
        {
          name: "Blessing",
          email: "blessing@gmail.com",
          gen: 1,
          id: "mlouhigj097864",
        },
        {
          name: "Esther",
          email: "esther@gmail.com",
          gen: 2,
          id: "68096976vmhgcxngtd",
        },
        {
          name: "Confidence",
          email: "confi@gmail.com",
          gen: 20,
          id: "-0-65875vb,jhvxktd",
        },
      ],
    };
  }

  addNewUser = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };
  deleteUser = (id) => {
    var undeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUsers,
    });
  };
  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updatedUser : user
      ),
    });
  };
  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4 ">
              <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col>
              <Users
                usersData={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
