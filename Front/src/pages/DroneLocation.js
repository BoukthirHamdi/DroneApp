import React from 'react'
import NavBar from '../comp/NavBar'
import SetMap from '../utils/SetMap'

const DroneLocation = () => {
  return (
    <div className='container-page'>
    <NavBar selected="dronelocation" />
    <div className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Drone Location</h1>
            <p className='text-sm text-gray-500'>If the drone is not working, you will see the last detected location.</p>
      </div>
    <div className="mx-auto min-h-screen h-screen max-w-7xl py-6 sm:px-6 lg:px-8"><SetMap /></div>
    </div>
  )
}

export default DroneLocation