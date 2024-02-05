import React from "react";
import Language from "./Language";

import { Link } from "react-router-dom";


function One(){
    return (
        <div>
           <div className="first-section">
           <div className="header">
           <Link to="/"><img className="netflix-img" src="/Images/Logonetflix.png" alt="netflix-img"/></Link>
           <div className="button-section">
           <Language/>
          <Link to="/sign"> <button className="sign-button">Sign In</button></Link>
           </div>
           </div>
           <img className="webp-img" src="/Images/How-to-Get-Netflix-For-Free.webp" alt="netflix-webp"/>
            <div className="movie-heading-section">
                <h1 className="movie-heading">Unlimited movies, TV shows and more</h1>
                <p className="movie-paragraph">Watch anywhere. Cancel anytime.</p>
                <p className="email-paragraph">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="from-section">
                <form className="form">
                    <input id="email-input" placeholder="" type="text"/>
                    <label className="form-label">Email address</label>
                </form>
                <button className="started-button">Get Started <i class="fa-solid fa-angle-right"></i></button>
            </div>
            </div>
            <div className="line line-responsive">

            </div>
        </div>
        </div>
    )
}

export default One;