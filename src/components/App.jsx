import React from "react";
import Two from "./Two";
import content from "./content";
import One from "./One";
// import Drop from "./Drop";
// import questions from "./questons";
import Footer from "./Footer";
import abouts from "./abouts";
import Down from "./Down";
import qnas from "./qnas";


function App() {
    return (
        <div>
            <One/> {
                content.map(contentAbout => {
                    return (
                        <Two
                            key={contentAbout.id}
                            id={contentAbout.id}
                            title={contentAbout.title}
                            description={contentAbout.description}
                            image={contentAbout.image}
                            gif={contentAbout.gif}
                            downTitle={contentAbout.downTitle}
                            downDescription={contentAbout.downDescription}
                            downImage={contentAbout.downImage}/>
                    )
                })
            }

            {/* <Drop/> */}

            <div className="question-section">
                <h1 className="first-tv-add">Frequently Asked Questions</h1>
                {
                    qnas.map(questionItem => {
                        return (
                            <Down
                                id={questionItem.id}
                                key={questionItem.id}
                                question={questionItem.question}
                                answer = {questionItem.answer}
                                answer1 = {questionItem.answer1}
                                text = {questionItem.text}  
                                />

                        )
                    })
                }

                

                {/* {details.map(function detailAbout(detailContent){
    return (
        <Down
            id = {detailContent.id}
            key= {detailContent.id}
            paragraph = {detailContent.paragraph}
        />
    )
}
)} */}
            
            </div>
            <div className="question-section-footer">
                <p className="email-paragraph">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="from-section">
                    <form>
                        <input id="email-input" placeholder="" type="text"/>
                        <label className="form-label">Email address</label>
                    </form>
                    <button className="started-button">Get Started <i class="fa-solid fa-angle-right"></i></button>
                </div>
                <div className="line question-section-footer-line res-link"></div>
                <div className="footer">
                    <div>
                        <p>Questions? Call 000-800-919-1694</p>
                    </div>

                    {/* <Footer/> */}

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
}

export default App;