import React from "react";

const UserRow = ({ name, gender, role, maritalStatus, id }) => {
  return <>
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{gender}</td>
          <td>{role}</td>
          <td>{maritalStatus?"married":"unmarried"}</td>
        </tr>
      </tbody>
  </>;
};
export { UserRow };
