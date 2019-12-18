import React from "react";
import UserAvatar from "./UserAvatar";

class UserCard extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div>
        <UserAvatar image={user.picture.large} />
        <div>
          {`${user.name.first} ${user.name.last},${user.gender};  
        city:
        ${user.location.city}; 
         email:
        ${user.email}
        phone:
        ${user.phone};
        date:
        ${user.dob.date}
        age:
        ${user.dob.age}`}
        </div>
      </div>
    );
  }
}

export default UserCard;
