import React, { useState} from 'react'
import Navbar from '../comp/NavBar'

const Reports = () => {
    const [users, setUser] = useState({})
  return (
    <div>
        <Navbar />
        <div className="mx-auto flex justify-between w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Users List</h1>
            
        </div>
        <div className="mx-auto max-w-7xl py-2 sm:px-6 lg:px-8">
        
        <div class="card-body px-0 pt-0 pb-2">
          <div class="table-responsive p-0">
            <table class="table align-items-center mb-0">
              <thead>
                <tr>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Name
                  </th>
                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                    Time
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Location
                  </th>
                  <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                    Cin
                  </th>
                  <th class="text-secondary opacity-7"></th>
                  <th class="text-secondary opacity-7"></th>
                </tr>
              </thead>
              <tbody>
                
                
                    <tr>
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src={''}
                            class="avatar avatar-sm me-3"
                            alt="user1"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{}</h6>
                          <p class="text-xs text-secondary mb-0">
                            {}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">{}</p>
                      
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span class="badge badge-sm bg-gradient-success">
                        {}
                      </span>
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold">
                        {}
                      </span>
                      <p class="text-xs text-secondary mb-0">
                            {}
                          </p>
                    </td>
                    <td class="align-middle">
                    <button class="btn btn-link text-dark px-3 mb-0" ><i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</button>
                    </td>
                    <td class="align-middle">
                    
                    </td>
                  </tr>
                 
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports