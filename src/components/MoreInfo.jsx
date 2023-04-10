import React, { useState } from "react";
import validator from "validator";

const MoreInfo = ({ nextPage, handleFormData, prevPage, values }) => {

    const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();

        if (
            validator.isEmpty(values.nationality) ||
            validator.isEmpty(values.gender) 
          ) {
            setError(true);
          } else {
            nextPage();
          }
    }

  return (
    <form className='more' onSubmit={submitFormData}>
        <div className="input">
            <input type="text" name="nationality" defaultValue={values.nationality} placeholder='Nationality...'
            onChange={handleFormData("nationality")}/>
            {error ? (
                <div style={{ color: "red" }}>
                    This is a required field
                </div>
            ) : (
                ""
            )}
        </div>
        <div className="input">
            <input type="text" name="gender" defaultValue={values.gender} placeholder='Gender...'
            onChange={handleFormData("gender")}/>
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

export default MoreInfo
