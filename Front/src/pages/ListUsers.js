import React from 'react'
import NavBar from '../comp/NavBar'
import AddUser from './AddUser'

const ListUsers = () => {
  return (
    <>
    <NavBar selected="listusers" />
    <div>ListUsers</div>

    <AddUser />
    </>
  )
}

export default ListUsers