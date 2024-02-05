import React, { useState } from "react";


function Language() {
     
    const [language, setLanguage] = useState(false);

    return ( <div>
         <div className="language-button"
         ><button className="btn-lang">Language </button>
         <div
         onClick={()=> setLanguage(!language)}
         ><i class="fa-solid fa-caret-down"></i>
         </div>
         </div>
         <div className="language-sub">
         <div className={language === true ? "language-item" : null}>English</div>
         <div className={language === true ? "language-item" : null}>हिंदी</div>
         </div>
         
    </div>
         
    )
           
}

export default Language;