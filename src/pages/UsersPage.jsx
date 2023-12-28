import React from 'react'
import { useNavigate } from 'react-router-dom'

const UsersPage = () => {

  const navigate = useNavigate()

  const handleClick= ()=>{
    navigate('/register')

  
  }

  return (
    <>
    <h1>Users page</h1>
    <button className='btn btn-primary' onClick={handleClick}>
       Volver al register
    </button>
    </>
  )
}

export default UsersPage