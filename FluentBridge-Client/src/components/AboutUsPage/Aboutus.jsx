import React from "react";
import { TeamPage } from "../TeamPage/TeamPage.jsx";
import backCover from "../../assets/aboutBack.jpg";
import Footer from "../Footer/Footer.jsx";

const About = () => {
    return (
        <section style={{ backgroundImage: `url(${backCover})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <TeamPage />
            <Footer/>
        </section>
    );
};
export default About;
