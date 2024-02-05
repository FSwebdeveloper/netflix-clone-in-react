import React, { useState } from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import abouts from "./abouts";


function Sign() {

     const [submit, setSubmit] = useState(true);
     const [change, setChange] = useState("");



    function handleChange(event) {
     
     setChange({
        ...change,
        [event.target.name] : event.target.value
     })
    //  console.log(change);
    }

    function handleSubmit(event) {
        event.preventDefault();
         fetch("/login", {
           method:"POST",
           body:JSON.stringify(change),
           headers: {
            "Content-Type": "application/json"
           } 
        })
        //  .then((res)=>{return res.json()})
        .then((data)=> {console.log(data)});
    }

    // const handleSubmit = async(e)=> {
    //     e.preventDefault();
    //     const response = await fetch("/login",{
    //     method:"POST",
    //     body:JSON.stringify(change),
    //     headers:{
    //         "Content-Type": "application/json",
    //     },
    //     });
    //     // .then((res)=>{return res.json()})
    //     // .then((data)=> {console.log(data)});
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
              <input className="sign-input-box" type="text" name="email" onChange={handleChange} placeholder=""/>
              <label className="sign-form-label">Email or phone number</label>
              </div>
            </div>
            <div className="form-section">
            <div className="form-bg-support">
              <div className="form-top">

              </div>
              <input className="sign-input-box" type="text" name="password" onChange={handleChange} placeholder=""/>
              <label className="sign-form-label">Password</label>
              </div>
              <input className="form-submit" type="submit" value={submit === true ? "Sign In " : "Submited"}
              onClick={()=> setSubmit(!submit)}
              />
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