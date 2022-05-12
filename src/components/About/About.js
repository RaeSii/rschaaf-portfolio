import React from "react";
import profImage from "../../assets/images/prof.jpg";

function About () {
    return (
        <section>
            <h1>
                About Me ...
            </h1>
            <img src={profImage} className="my-2" style={{width: "100"}} alt="profile picture"/>


        </section>
    );
}

export default About;