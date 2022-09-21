import react, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import addUser from '../server/apiAdd'
const defaultValue = {
  name:"",
  username:"",
  email:"",
  phone:""
}
const AddUsers = () => {  
  
  
  const [user, setUser] = useState(defaultValue)
  const { name, username, email, phone } = user;
  const navigate = useNavigate()


  const onChangeValue = (e) => {    
    setUser ({...user,[e.target.name]: e.target.value})
  }
  
  const addUserDetails = async () => {
    await addUser(user)
    navigate('/all')
  }
  return (
    <>
      <div className="container">
        <h1 className='text-center my-3'>Add User</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" onChange={(e)=>onChangeValue(e)} name="name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">Username</label>
            <input type="text" className="form-control" id="exampleInputUsername" onChange={(e)=>onChangeValue(e)} name="username"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail" onChange={(e)=>onChangeValue(e)} name="email"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">Phone</label>
            <input type="number" className="form-control" id="exampleInputPhone" onChange={(e)=>onChangeValue(e)} name="phone"/>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="button" onClick={()=> addUserDetails()}>Button</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddUsers;
