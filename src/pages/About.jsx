import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { skills, experiences } from "../constants";
import CTA from "../components/CTA.jsx";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Harikrishna
        </span> 👋🏻
      </h1>

      <div className="mt-5 flex fflex-col gap-3 text-slate-500">
        <p>As a dedicated Software Engineer, I'm fueled by a fervent desire to revolutionize the world through technology. With a wealth of experience and a passion for innovation, I strive to craft solutions that make a tangible impact. 💻 My skillset arsenal, honed through hands-on experience, reflects my commitment to excellence in creating cutting-edge software. Do checkout my skillset arsenal below 👇 🚀✨
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills 🚀</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div className="block-container w-20 h-20" key={index}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Certifications & Experiences</h3>
        <div className="mt-5 flex fflex-col gap-3 text-slate-500">
          <p>I am an enthusiastic newcomer seeking opportunities to collaborate and work alongside exceptional individuals. My expertise spans across Web Development, React, Flutter, and AI & ML, showcasing a strong foundation and a fervor for innovation. 💡 Throughout my journey, I've actively engaged in coding experiences, hackathons, and acquired numerous certificates, underscoring my commitment and continuous learning in this field. Additionally, my volunteering and leadership experiences have honed my teamwork and organizational skills, equipping me to contribute effectively to impactful projects. 🚀✨</p>
        </div>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.company_name}
              date={exp.skills}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={exp.icon}
                    alt={exp.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
              iconStyle={{background: exp.iconBg}}
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: exp.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {exp.title}
                </h3>
                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  {exp.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {exp.points.map((point, index) => (
                  <li
                    className="text-black-500/50 font-normal pl-1"
                    key={`experience-point-${index}`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
