import React, { useState } from 'react'
import Navbar from '../pages/Navbar'

const Signup = () => {
const [userData,setUserData] = useState({
  fname: '' , lname: '' , email: '' , phone: '' , password: ''
});

const handleSubmit = (e)=>{
    e.preventDefault();
    if(!userData.fname || !userData.lname || !userData.email || !userData.phone || !userData.password){
      console.log("Please fill all the details")
      alert("Please fill all the details");
      return;
    }
    console.log(userData);
}
const handleChange = (e)=>{
  e.preventDefault();
  const {name, value} = e.target;
  setUserData((prev)=>({
    ...prev,
    [name] : value,
  }))
}
  return (
    <div>
    <Navbar />
    <form onSubmit={handleSubmit}>
      <label >First Name:</label>
      <input type='text' placeholder='Enter Your First Name' name='fname' value={userData.fname} onChange={handleChange}/>
      <label >Last Name:</label>
      <input type='text' placeholder='Enter Your Last Name' name='lname' value={userData.lname} onChange={handleChange}/>
      <label >E-mail:</label>
      <input type='email' placeholder='Enter Your E-mail' name='email' value={userData.email} onChange={handleChange}/>
      <label>Phone:</label>
      <input type='number' placeholder='Enter Your Number' name='phone' value={userData.phone} onChange={handleChange}/>
      <label >Password:</label>
      <input type='password' placeholder='Enter Password' name='password' value={userData.password} onChange={handleChange}/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Signup
