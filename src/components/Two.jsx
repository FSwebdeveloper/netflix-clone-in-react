import React from "react";



function Two(props){
    return (
        <div>
           
            <div className="second-section">
            <div className="tv-add-section">
            <h1 className="first-tv-add">{props.title}</h1>
            <p className="first-tv-add-paragraph">{props.description}</p>
            </div>
            <div className="video-section">
                <img className="add-video down-img" src={props.image} alt=""></img>
                <img className="gif-img" src={props.gif} alt="gif-img"/>
            </div>
            </div>

            <div className="line line-two">

            </div>

            <div className="third-section">
            
            <div className="tv-add-section mobile-tv-add-section">
            <h1 className="first-tv-add">{props.downTitle}</h1>
            <p className="first-tv-add-paragraph">{props.downDescription}</p>
            </div>
            <div className="video-section">
                <img className="add-video down-img mobile-down-img" src={props.downImage} alt="add-video" controls></img>
            </div>
            </div>
            <div className="end-line">
            <div className="line line-one">

            </div>
            </div>
        </div>
    )
}


export default Two;