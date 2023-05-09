import React from 'react'
import NavBar from '../comp/NavBar'
import AddUser from '../comp/AddUser'
import UpdateUser from './UpdateUser'

const ListWanted = () => {
  return (
    <div className='container-page'>
    <NavBar selected="listwanted" />
    <div>ListWanted</div>
    <AddUser />
    </div>
    
  )
}

export default ListWanted