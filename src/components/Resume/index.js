import React from "react";
import Footer from '../Footer'

function Resume() {
    return (
        <section className="container">

            <h1 className="section-heading" >
                Resume
            </h1>
            <article className="container d-flex justify-content-evenly">
                <iframe className="whistory" src="https://docs.google.com/document/d/12KYnlC4_hCSM4o4hAw_CbGphATCmJDaoyAV7QxtP94Y/edit?usp=sharing" >

                </iframe>
            </article>
            <Footer/>
        </section>
        
       
    )
}

    export default Resume;