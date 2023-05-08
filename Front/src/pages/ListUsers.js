import React from 'react'
import NavBar from '../comp/NavBar'
import AddUser from './AddUser'

const ListUsers = () => {
  return (
    <div className='container-page'>
      <NavBar selected="listusers" />
      <div>ListUsers</div>
    </div>
  )
}

export default ListUsers