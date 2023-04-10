import React, {useState} from 'react';
import validator from "validator";

const SignUpInfo = ({nextPage, handleFormData, values}) => {

    const [error, setError] = useState(false);

    const submitFormData = (e) => {
        e.preventDefault();

        if (
            validator.isEmpty(values.email) ||
            validator.isEmpty(values.password) ||
            validator.isEmpty(values.confirmPassword)
          ) {
            setError(true);
          } else {
            nextPage();
          }
    }

  return (
    <form className='sign-up' onSubmit={submitFormData}>
        <div className="input">
            <input type="text" name='email' defaultValue={values.email} placeholder='Email...' 
            onChange={handleFormData("email")}
            />
            {error ? (
                <div style={{ color: "red" }}>
                    This is a required field
                </div>
            ) : (
                ""
            )}
        </div>
        <div className="input">
            <input type="text" name='password' defaultValue={values.password} placeholder='Password...' 
            onChange={handleFormData("password")}
            />
            {error ? (
                <div style={{ color: "red" }}>
                    This is a required field
                </div>
            ) : (
                ""
            )}
        </div>
        <div className="input">
            <input type="text" name='confirmPassword' defaultValue={values.confirmPassword} placeholder='Confirm Password...' 
            onChange={handleFormData("confirmPassword")}/>
            {error ? (
                <div style={{ color: "red" }}>
                    This is a required field
                </div>
            ) : (
                ""
            )}
        </div>
        <button type="submit">
              Next
        </button>
    </form>
  )
}

export default SignUpInfo
