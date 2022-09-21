import {useEffect, useState} from 'react';
import getUsers from '../server/apiGet.js';
import { Link } from 'react-router-dom';
import deleteUser from '../server/deleteUser.js';


const AllUsers = () => {
  let [users, setUsers] = useState([])

  useEffect(()=>{
    getAllUsers()
  },[]);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
}

  const getAllUsers = async () => {
    let response = await getUsers()
    setUsers(response.data) 
  }
  

  return (
    <div className="container" >
      <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col"></th>
          
        </tr>
      </thead>
      <tbody>
        {
          users.map((user) =>(
          <tr key={user._id}>
            <th scope="row" >{user._id}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <Link className='btn btn-primary' to={`/edit/${user._id}`} >Edit</Link>
              <Link className='btn btn-danger ms-3' onClick={() => deleteUserData(user._id)} >Delete</Link>
            </td>            
          </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  )
}

export default AllUsers
