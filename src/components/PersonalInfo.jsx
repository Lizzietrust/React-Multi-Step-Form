import React, { useState } from "react";
import validator from "validator";

const PersonalInfo = ({ nextPage, handleFormData, prevPage, values }) => {

    const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();

        if (
            validator.isEmpty(values.firstName) ||
            validator.isEmpty(values.lastName) ||
            validator.isEmpty(values.username)
          ) {
            setError(true);
          } else {
            nextPage();
          }
    }

  return (
    <form className='personal' onSubmit={submitFormData}>
        <div className="input">
            <input type="text" name="firstName" defaultValue={values.firstName} placeholder='First Name...'
            onChange={handleFormData("firstName")}/>
            {error ? (
                <div style={{ color: "red" }}>
                    This is a required field
                </div>
            ) : (
                ""
            )}
        </div>
        <div className="input">
            <input type="text" name="lastName" defaultValue={values.lastName} placeholder='Last Name...'
            onChange={handleFormData("lastName")}/>
            {error ? (
                <div style={{ color: "red" }}>
                    This is a required field
                </div>
            ) : (
                ""
            )}
        </div>
        <div className="input">
            <input type="text" name="username" defaultValue={values.username} placeholder='Username...'
            onChange={handleFormData("username")}/>
            {error ? (
                <div style={{ color: "red" }}>
                    This is a required field
                </div>
            ) : (
                ""
            )}
        </div>
        <div className="footer">
            <button onClick={prevPage}>
                Prev
            </button>
            <button type="submit">
                Next
            </button>
        </div>
    </form>
  )
}

export default PersonalInfo
