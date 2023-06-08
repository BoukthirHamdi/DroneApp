import React from 'react'

const wantedDetails = (setWantedDetailsIsOpen) => {
  return (
    <div>
        <div className='darkBG' onClick={() => setWantedDetailsIsOpen(false)} />
        
    </div>
  )
}

export default wantedDetails