import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='nav'>
      <h3 onClick={()=>navigate('/')}>Home</h3>
      <h3 onClick={()=>navigate('/product')}>Product</h3>
      <h3 onClick={()=>navigate('/about')}>About Us</h3>
      <h3 onClick={()=>navigate('/contact')}>Contact Us</h3>
      <h3 onClick={()=>navigate('/users')}>Users</h3>
      <h3 onClick={()=>{navigate('/signup')}}><FontAwesomeIcon icon={faUser} /></h3>
      <h3 onClick={()=>navigate('/cart')}>Cart</h3>
    </div>
  )
}

export default Navbar
