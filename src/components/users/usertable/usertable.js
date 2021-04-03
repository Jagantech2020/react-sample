const UserTable = (props) => {
  const user = props.userDetails;
    return (
       
    <tr key={user.id}>
      <td> {user.name}</td>
      <td> {user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td>{user.company.name}</td>
      
    </tr>
    )
}

export default UserTable