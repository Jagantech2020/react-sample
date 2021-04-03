import { useEffect, useState } from "react";
import User from './user/user';
import UserTable from './usertable/usertable';

const Users = (props) => {
    
    const [usersDetails, setUsersDetails] = useState({users: [], isLoading: true});
    useEffect( () => {
        handleApiRequest().then( users => {
            setUsersDetails({
                users: users,
                isLoading: false
            })
        });
       
    }, []);
    const handleApiRequest = async () => {
        const api = await fetch("https://jsonplaceholder.typicode.com/users");
        const parsedJson = await api.json();
        return parsedJson;
      }
    
      const loadUserTable = () => {
       return usersDetails.users.map( (user, index)=> {
            
         return  <UserTable key={user.id} userDetails={user}></UserTable>
        })
      }
      const displayContent = (usersDetails) => {
        if (!usersDetails.isLoading ) {
            if(props.isCard){
                return  usersDetails.users.map( (user, index)=> {
                    let bgTheme = ['bg-white', 'border-dark']
                  let ind = index+2;
                    if(ind%2 === 0){
                     bgTheme = ['bg-info', 'text-white', 'border-white']
                 }
                 if(ind%3 === 0){
                     bgTheme = ['bg-warning', 'border-dark']
                 }
                 if(ind%4 === 0){
                     bgTheme = ['bg-success', 'text-white', 'border-white']
                 }
                 if(ind%5 === 0){
                     bgTheme = ['bg-secondary', 'text-white', 'border-white']
                 }
                 return  <User key={user.id} userDetails={user} bgTheme={bgTheme}></User>
                })
            } else {
                return (
                    <div className="table-responsive">
                    <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">User name</th>
                        <th scope="col">Email id:</th>
                        <th scope="col">Phone no:</th>
                        <th scope="col">Website:</th>
                        <th scope="col">Company:</th>
                      </tr>
                    </thead>
                    <tbody>
                   {loadUserTable()}
                       
                    </tbody>
                    </table>
                    </div>
                  )
            }
          
        }  else {
          return <div>No data found</div>;
        }
      };


    return (
      
         displayContent(usersDetails)
    );
}

export default Users;