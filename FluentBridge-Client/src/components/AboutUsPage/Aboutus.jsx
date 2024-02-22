import React from "react";
import { TeamPage } from "../TeamPage/TeamPage.jsx";
import backCover from "../../assets/aboutBack.jpg";

const About = () => {
    return (
        <section style={{ backgroundImage: `url(${backCover})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <TeamPage />
        </section>
    );
};
export default About;
