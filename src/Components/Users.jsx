import React, { useEffect, useState } from 'react'
import './Users.css'
import Navbar from '../pages/Navbar';

const Users = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        const fetchUsers = async()=>{
            try {
              const response = await fetch("https://jsonplaceholder.typicode.com/users");
              const data = await response.json();
              setUsers(data);  
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers();
    },[]);
  return (<div>
    <Navbar />
    <div className='user-card'>
      {users.length > 0 ? (
        <ul>
            {users.map((user,index)=>(
                <li key={index}>
                    <h5>Name:{user.name}</h5>
                    <h5>Username:{user.username}</h5>
                    <h5>E-mail:{user.email}</h5>
                    <h5>Phone :{user.phone}</h5>
                    <h5>Website:{user.website}</h5>
                    <h5>Company:{user.company.name}</h5>
                    <h5>Phone :{user.phone}</h5>
                </li>
            ))}
        </ul>
      ):(
        <p>No Users Found!</p>
      )}
    </div>
    </div>
  )
}

export default Users
