import React from 'react'

const Final = ({ values }) => {
    const { email, firstName, lastName, username, nationality, gender } = values;
  return (
    <div className="card-container">
        <div className='card'>
            <h1>SUMMARY</h1>
            <div>
                <span>Email:</span> 
                <p>{email}{" "}</p>
            </div>
            <div>
                <span>First Name:</span> 
                <p>{firstName}{" "}</p>
            </div>
            <div>
                <span>Last Name:</span> 
                <p>{lastName}{" "}</p>
            </div>
            <div>
                <span>username:</span> 
                <p>{username}{" "}</p>
            </div>
            <div>
                <span>Nationality:</span> 
                <p>{nationality}{" "}</p>
            </div>
            <div>
                <span>Gender:</span> 
                <p>{gender}{" "}</p>
            </div>
        </div>
    </div>
  )
}

export default Final
