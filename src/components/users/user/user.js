import "./user.css";
const User = (props) => {
  const user = props.userDetails;
  const bgTheme = props.bgTheme;
  const wrapperClass = ['shadow-lg', 'rounded', 'p-4', 'm-3', 'display-card', ...bgTheme].join(' ');
  const itemClass = ['border-bottom', 'pt-2', 'pb-2',  ...bgTheme].join(' ');
  return (
    <div key={user.id} className={wrapperClass}>
      <div className={itemClass}>User: {user.name}</div>
      <div className={itemClass}>Email id: {user.email}</div>
      <div className={itemClass}>Phone no: {user.phone}</div>
      <div className={itemClass}>Website: {user.website}</div>
      <div className={itemClass}>Company: {user.company.name}</div>
    </div>
  );
};

export default User;
