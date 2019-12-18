import React from "react";
import UserCard from "./UserCard";

class UsersList extends React.Component {
  render() {
    const { users } = this.props;

    return <div>{users && users.map(u => <UserCard user={u} />)}</div>;
  }
}

export default UsersList;
