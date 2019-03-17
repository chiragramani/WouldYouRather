import React from "react";
export default function SelectUser(props) {
  const { selectedUser, didSelectUser, users } = props;
  return (
    <div className="select-wrapper">
      <select
        value={selectedUser === null ? "" : selectedUser.id}
        onChange={didSelectUser}
      >
        <option value="" disabled>
          Select User
        </option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
