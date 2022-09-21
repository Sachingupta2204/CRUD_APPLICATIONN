import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import editUser  from '../server/apiAdd'
import getUsers from '../server/apiGet';


const defaultValue = {name: '',username:'',email:'',phone: ''}

const EditUsers = () => {  
  const [user, setUser] = useState(defaultValue)  
  const { name, username, email, phone } = user;
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    loadUserDetails();
    // eslint-disable-next-line
  },[])

  const loadUserDetails = async () => {
    const response = await getUsers(id)
    setUser(response.data)
  }
  const editUserDetails  = async() => {
    const response = await editUser(id, user);
    navigate('/all');
  }
  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  
  return (
    <>
      <div className="container">
        <h1 className='text-center my-3'>Edit User</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" 
            onChange={(e) => onChangeValue(e)} name="name" value={name || ''} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">Username</label>
            <input type="text" className="form-control"  id="exampleInputUsername"
            onChange={(e) => onChangeValue(e)} name="username" value={username || ''}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail"
            onChange={(e) => onChangeValue(e)} name="email" value={email || ''}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
            <input type="number" className="form-control" id="exampleInputPhone"
            onChange={(e) => onChangeValue(e)} name="phone" value={phone || ''}/>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="button"  onClick={() => editUserDetails()}>Edit User</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditUsers;
