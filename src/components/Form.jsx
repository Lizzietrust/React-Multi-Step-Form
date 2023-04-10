import React, { useState } from 'react'
import MoreInfo from './MoreInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';

const Form = () => {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        gender: "",
    });

    const titles = ['Sign Up', 'Personal Info', 'More Info'];

    const DisplayPage = () => {
        if (page === 0) {
          return <SignUpInfo formData={formData} setFormData={setFormData}/>;
        }
         else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData}/>;
        }
        else {
            return <MoreInfo formData={formData} setFormData={setFormData}/>;
        }
    };

  return (
    <div className='form'>
      <div className="sidebar">
        <div className="list">
            <div className={page === 0 ? 'number curr' : 'number'}>1</div>
            <div className="step">
                <span>FIRST STEP</span>
                <p>SIGN UP</p>
            </div>
        </div>
        <div className="list">
            <div className={page === 1 ? 'number curr' : 'number'}>2</div>
            <div className="step">
                <span>SECOND STEP</span>
                <p>YOUR INFO</p>
            </div>
        </div>
        <div className="list">
            <div className={page === 2 ? 'number curr' : 'number'}>3</div>
            <div className="step">
                <span>THIRD STEP</span>
                <p>MORE INFO</p>
            </div>
        </div>
      </div>
      <div className="form-container">
        <div className="header"><h1>{titles[page]}</h1></div>
        <div className="body">{DisplayPage()}</div>
        <div className="footer">
            <button 
                disabled={page == 0}
                onClick={() => {
                setPage((currPage) => currPage - 1);
            }}
            >Prev</button>
            <button 
                onClick={() => {
                    if (page === titles.length - 1) {
                      alert("FORM SUBMITTED");
                      console.log(formData);
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}>
                  {page === titles.length - 1 ? "Submit" : "Next"}</button>
        </div>
      </div>
    </div>
  )
}

export default Form
