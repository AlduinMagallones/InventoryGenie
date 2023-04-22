import React from 'react'
import logoo from '../pics/logoo.png'
import '../styles/signInStyle.css'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate()
  return (
    <div className='container'>
        <div className='second'>
            <img src = {logoo} className='logo'/>

            <input 
            type = "text"
            className = 'inputs' 
            // onChange={checkUser}
            required = 'required'
            />
            <span className='em'>User Name</span>
            {/* <p className='msgcolor errorposition'>{error}</p> */}

            <input  
            type = "password" 
            className = 'inpu'
            // onChange={checkPass}
            required = 'required'
            />
            <span className='pas'>Password</span>
            {/* <p className='msgcolor error1position'>{error1}</p> */}

            <button className='btn' type='button' onClick={ () => navigate('/dashboard') }>
                <text className='txt'>
                    Sign In
                </text>
            </button>
            {/* <p className='msgcolor msgposition'>{msg}</p> */}

            
            
        </div>
    </div>
  )
}

export default Signin