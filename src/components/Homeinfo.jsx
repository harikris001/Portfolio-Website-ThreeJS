import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} alt="Go to" className="w-4 h-4 object-contain" />
        </Link>
    </div>
);

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hey, I am <span className="font-semibold">Harikrishna</span>
            <br />A Passionate Software Engineer from Kerala 💻
        </h1>
    ),
    2: (
        <InfoBox
            text="My journey with all my certificates and experiences. Explore them"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: <h1>
        <InfoBox
            text="I did do some cool projects and gained a lot of skills along the way. See them here."
            link="/projects"
            btnText="To my Projects"
        />
    </h1>,
    4: <h1>
        <InfoBox
            text="Need help with your project? Looking for a team player?"
            link="/contact"
            btnText="Hit Me up"
        />
    </h1>,
};

const Homeinfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};

export default Homeinfo;
