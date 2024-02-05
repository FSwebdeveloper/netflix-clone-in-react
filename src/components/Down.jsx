import React, { useState } from "react";

function Down(props) {
     
    const [show, setShow] = useState(false);

    return (
        <div className="dropDown">
        <div className="drop-down-about-div">
            <h1 className="dropDown-about">{props.question}</h1>
            <div className="drop-down-button" onClick={()=> setShow(!show)}> {props.text}
         {show === false ? <span class="material-symbols-outlined">
add
</span> : <span class="material-symbols-outlined close-btn">
close
</span>}
        </div>
        </div>
        <div className="black-line">

        </div>
        <div className="paragraph-div">
            <h2 className={show === true ? "question-answer" : "question-answer-display"}>
            {props.answer}
            <br/>
            <br/>
            {props.answer1}
            </h2>
        </div>
        </div>
    )
}

export default Down;