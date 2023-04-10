import React, { useState } from 'react'
import MoreInfo from './MoreInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';
import Final from './Final';

const Form = () => {

    const [page, setPage] = useState(1);

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

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        setPage(page - 1);
    };

    const handleInputData = input => e => {
        // input value from the form
        const {value } = e.target;
    
        //updating for data state taking previous state and then adding new value to create new object
        setFormData(prevState => ({
          ...prevState,
          [input]: value
      }));
      }

    /*const titles = ['Sign Up', 'Personal Info', 'More Info'];

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
    };*/

  
    switch (page) {
        case 1:
            return (
                <div className="form">
                    <div className="sidebar">
                        <div className="list">
                            <div className='number curr'>1</div>
                            <div className="step">
                                <span>FIRST STEP</span>
                                <p>SIGN UP</p>
                            </div>
                        </div>
                        <div className="list">
                            <div className='number'>2</div>
                            <div className="step">
                                <span>SECOND STEP</span>
                                <p>YOUR INFO</p>
                            </div>
                        </div>
                        <div className="list">
                            <div className='number'>3</div>
                            <div className="step">
                                <span>THIRD STEP</span>
                                <p>MORE INFO</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="body">
                            <SignUpInfo nextPage={nextPage} handleFormData={handleInputData} values={formData}/>
                        </div>
                    </div>
                </div>
            );

        case 2:
            return (
                <div className="form">
                    <div className="sidebar">
                        <div className="list">
                            <div className='number'>1</div>
                            <div className="step">
                                <span>FIRST STEP</span>
                                <p>SIGN UP</p>
                            </div>
                        </div>
                        <div className="list">
                            <div className='number curr'>2</div>
                            <div className="step">
                                <span>SECOND STEP</span>
                                <p>YOUR INFO</p>
                            </div>
                        </div>
                        <div className="list">
                            <div className='number'>3</div>
                            <div className="step">
                                <span>THIRD STEP</span>
                                <p>MORE INFO</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="body">
                            <PersonalInfo nextPage={nextPage} prevPage={prevPage} handleFormData={handleInputData} values={formData}/>
                        </div>
                    </div>
                </div>
            );

        case 3:
            return (
                <div className="form">
                    <div className="sidebar">
                        <div className="list">
                            <div className='number'>1</div>
                            <div className="step">
                                <span>FIRST STEP</span>
                                <p>SIGN UP</p>
                            </div>
                        </div>
                        <div className="list">
                            <div className='number'>2</div>
                            <div className="step">
                                <span>SECOND STEP</span>
                                <p>YOUR INFO</p>
                            </div>
                        </div>
                        <div className="list">
                            <div className='number curr'>3</div>
                            <div className="step">
                                <span>THIRD STEP</span>
                                <p>MORE INFO</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="body">
                            <MoreInfo nextPage={nextPage} prevPage={prevPage} handleFormData={handleInputData} values={formData}/>
                        </div>
                    </div>
                </div>
            );

        case 4:
            return (
                <Final values={formData}/>
            );
        
        default:
            return (
                <div className="form">
                    <div className="sidebar">
                        <div className="list">
                            <div className='number curr'>1</div>
                            <div className="step">
                                <span>FIRST STEP</span>
                                <p>SIGN UP</p>
                            </div>
                        </div>
                        <div className="list">
                            <div className='number'>2</div>
                            <div className="step">
                                <span>SECOND STEP</span>
                                <p>YOUR INFO</p>
                            </div>
                        </div>
                        <div className="list">
                            <div className='number'>3</div>
                            <div className="step">
                                <span>THIRD STEP</span>
                                <p>MORE INFO</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-container">
                        <div className="body">
                            <SignUpInfo nextPage={nextPage} handleFormData={handleInputData} values={formData}/>
                        </div>
                    </div>
                </div>
            );
    }
}

export default Form
