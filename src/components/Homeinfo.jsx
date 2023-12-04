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
            <br />A Software Engineer from Kerala
        </h1>
    ),
    2: (
        <InfoBox
            text="Something about work experiences"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: <h1>
        <InfoBox
            text="Something about projects"
            link="/projects"
            btnText="See my projects"
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
