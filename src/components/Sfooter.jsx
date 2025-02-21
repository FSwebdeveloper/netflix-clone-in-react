import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import abouts from "./abouts";


function Sign() {

  const intialValues = {email: "", password: ""};
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [visible, setVisible ] = useState(false);
    

     

  function handleChange(event){
    
    const {name, value} = event.target;
    
    setFormValues({...formValues, [name]: value});

  }

  function handleSubmit(event){
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    fetch("http://localhost:8080/login",{
    method:"POST",
    body:JSON.stringify(formValues),
    headers:{
        "Content-Type": "application/json"
    }
    })
    .then((result) => {
      return result.json()
    })
    .then((data) => {
    console.log(data)
    });
    
  }

  useEffect(()=> {
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors, isSubmit, formValues]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if(!values.email){
      errors.email = "Email is required";
    } else if(!regex.test(values.email)){
      errors.email = "This is not a valid eamil";
    }
    if(!values.password){
      errors.password = "Password is required";
    }
   
    return errors;

  };


    return (
        <div>
            <div className="first-section sign-first-psudo">
                <div className="header">
                    <Link to="/"><img className="netflix-img" src="/Images/Logonetflix.png" alt="netflix-img"/></Link>
                </div>
                <img
                    className="webp-img"
                    src="/Images/How-to-Get-Netflix-For-Free.webp"
                    alt="netflix-webp"/>

            </div>
          <div className="bg">
            <div className="sign-bg-psudo">
             <h1 className="sign-heading">Sign In</h1>
            <form onSubmit={handleSubmit} className="form-max-width">
             <div className="form-section">
             <div className="form-bg-support">
              <div className="form-top">

              </div>
              <input className="sign-input-box" type="text" name="email" onChange={handleChange} placeholder="" value={formValues.email}></input>

              <label className="sign-form-label">Email or phone number</label>
              </div>
              {formErrors.email && <p style={{color: "red", fontSize: "14px", marginBottom: "-20px"}}>{formErrors.email}</p> }
            </div>
            
            <div className="form-section">
            <div className="form-bg-support">
              <div className="form-top">

              </div>
              <div className="visible-div">
              <input className="sign-input-box" type={visible ? "text" : "password"} name="password" onChange={handleChange} placeholder="" value={formValues.password} ></input>
              <label className="sign-form-label">Password</label>
              
                {formValues.password && <div onClick={()=>setVisible(!visible)}>
                {visible ? <span class="material-symbols-outlined visible-toggle">visibility </span>: <span class="material-symbols-outlined visible-toggle"> visibility_off</span>} 
              </div>}
              </div>
              </div>
              {formErrors.password && <p style={{color: "red", fontSize: "14px", marginBottom: "-20px"}}>{formErrors.password}</p> }
              <input className="form-submit" type="submit" value="Sign In"
              ></input>
            </div>
            {Object.keys(formErrors).length === 0 && isSubmit ? (<div style={{marginLeft: "10px"}}>Signed in successfully</div>) : null}
            </form>
            </div>

            
            
            <div className="footer sign-footer">
                   <div>
                        <p>Questions? Call 000-800-919-1694</p>
                    </div>

            {
                        abouts.map(dataContent => {
                            return (
                                <Footer
                                    id={dataContent.id}
                                    key={dataContent.key}
                                    faqAbout={dataContent.faqAbout}
                                    helpAbout={dataContent.helpAbout}
                                    accountAbout={dataContent.accountAbout}
                                    mediaAbout={dataContent.mediaAbout}
                                    faqAbout1 ={dataContent.faqAbout1}
                                    helpAbout2 ={dataContent.helpAbout2}
                                    accountAbout3 = {dataContent.accountAbout3}
                                    mediaAbout4 = {dataContent.mediaAbout4}
                                    />
                            )
                        })
                    }
            </div>
        </div>
            
            
            
        </div>
    )
};

export default Sign;
