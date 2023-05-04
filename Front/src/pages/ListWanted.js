import React from 'react'
import NavBar from '../comp/NavBar'
import UpdateUser from './UpdateUser'

const ListWanted = () => {
  return (
    <>
    <NavBar selected="listwanted" />
    <div>ListWanted</div>
    <UpdateUser/>
    </>
    
  )
}

export default ListWanted