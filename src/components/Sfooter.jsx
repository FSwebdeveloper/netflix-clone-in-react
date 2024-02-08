import React, { useState} from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import abouts from "./abouts";
import Validation from "./Validation";


function Sign() {

     const [submit, setSubmit] = useState(true);
     const [change, setChange] = useState("");
     const [errors, setError] = useState("");



    function handleChange(event) {
     
     setChange({
        ...change,
        [event.target.name] : event.target.value
     })
    //  console.log(change);
    }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     setError(Validation(change));
    //      fetch("/login",{
    //        method:"POST",
    //        headers: {
    //         "Content-Type": "application/json; charset=UTF-8",
    //        },
    //        body:JSON.stringify(change)
    //     })
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res)
    //     });
    // }

  async function handleSubmit(event) {
        event.preventDefault();
        setError(Validation(change));
      await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(change),
        })
          .then((res) => {
            if (!res.ok) {
              // If the response status is not okay, handle the error here
              throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.text(); // Get the raw response text
          })
          .then((text) => {
            // Check if the response is not empty before parsing
            if (text.trim() !== '') {
              return JSON.parse(text);
            } else {
              // Handle empty response
              console.warn('Received empty response');
              return null;
            }
          })
          .then((data) => {
            console.log("Response data:", data);
            // Process the response data as needed
          })
          .catch((error) => {
            console.error("Error during fetch or response processing:", error);
            // Handle the error, show an error message, etc.
          });
      }
      
      

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     setError(Validation(change));
    //     const response = await fetch("/login",{
    //     method:"POST",
    //     body:JSON.stringify(change),
    //     headers:{
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     }
    //     });
    //     const data = await response.json();
    //     console.log(data);
    //   };

        
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
              <input className="sign-input-box" type="text" value={change.email} name="email" onChange={handleChange} placeholder=""></input>
              <label className="sign-form-label">Email or phone number</label>
              </div>
              {errors.email && <p style={{color: "red", fontSize: "14px", marginBottom: "-20px"}}>{errors.email}</p> }
            </div>
            
            <div className="form-section">
            <div className="form-bg-support">
              <div className="form-top">

              </div>
              <input className="sign-input-box" type="text" value={change.password} name="password" onChange={handleChange} placeholder=""></input>
              <label className="sign-form-label">Password</label>
              </div>
              {errors.password && <p style={{color: "red", fontSize: "14px", marginBottom: "-20px"}}>{errors.password}</p> }
              <input className="form-submit" type="submit" value="Sign In"
              onClick={()=> setSubmit(!submit)}
              ></input>
            </div>
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