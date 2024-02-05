import React from "react";

function Footer(props) {
    return (

        <div>
        
        <div className="footer-about-text">
        <div className="footer-about">
                <div className="footer-text">{props.faqAbout}</div>
                <div className="footer-text">{props.helpAbout}</div>
                <div className="footer-text">{props.accountAbout}</div>
                <div className="footer-text">{props.mediaAbout}</div>
        </div>
        
        <div className="footer-about">
                <div className="footer-text">{props.faqAbout1}</div>
                <div className="footer-text">{props.helpAbout2}</div>
                <div className="footer-text">{props.accountAbout3}</div>
                <div className="footer-text">{props.mediaAbout4}</div>
        </div>

        </div>
        </div>
        
    )
}


export default Footer;