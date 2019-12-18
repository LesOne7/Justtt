import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import UsersList from "./UsersList";
import Preloader from "./Preloader";
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false
    };
  }

  async GetUsers() {
    this.setState({ loading: true });
    const response = await fetch("https://randomuser.me/api/?results=10");
    const usersJSON = await response.json();

    if (usersJSON && usersJSON.results) {
      this.setState({ users: usersJSON.results, loading: false });
    }
  }

  // ComponentDidMount() {
  //   this.GetUsers();
  // }

  render() {
    const { users, loading } = this.state;
    if (loading) return <Preloader />;

    return (
      <div>
        <Button
          handleClick={() => this.GetUsers()}
          label={"Показать информацию о 10 пользователях"}
        />
        <div> {users && <UsersList users={users} />}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
