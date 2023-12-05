import { workshop, hack, certificate, experience } from "../assets/images";

import {
    opencv,
    bootstrap,
    firebase,
    flutter,
    pytorch,
    django,
    python,
    mysql,
    css,
    git,
    github,
    html,
    javascript,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    tailwindcss,
    typescript,
    linkedin,
    twitter,
    mask,
    chatAI,
    tiger,
    snapgram,
    weather,
    mario,
    arrow,
    contact,
    soundon,
    soundoff
} from "../assets/icons";
export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Backend",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "language"
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend"
    },
    {
        imageUrl: pytorch,
        name: "Pytorch",
        type: "ML"
    },
    {
        imageUrl: opencv,
        name: "OpenCV",
        type: "ML"
    },
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "SDK"
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "Certifications",
        company_name: "Udemy, FreeCodeCamp",
        icon: certificate,
        iconBg: "#accbe1",
        skills: "Skills: Flutter, Web Development, Python ",
        points: [
            "Ultimate Dart & Flutter Course 2023.",
            "Complete Web Development Bootcamp 2023.",
            "Responsive web design - FreeCodeCamp.",
            "Programming, DSA with Python.",
        ],
    },
    {
        title: "Experiences",
        company_name: "Volunteership, TeamLead",
        icon: experience,
        iconBg: "#fbc3bc",
        skills: "Skills: Leadership, Team Player, Collaboration",
        points: [
            "NASA Space Apps Hackathon Volunteer",
            "S7-Main Project Team Lead",
            "S5-Mini Project team Lead",
            "Gtech MuLearn AI/ML Intrest Group Coordinator",
        ],
    },
    {
        title: "Hackathons",
        company_name: "National level",
        icon: hack,
        iconBg: "#b7e4c7",
        skills: "Skills: Problem Solving, Critical thinking",
        points: [
            "TinkerHub Saturday Hacknight Best project",
            "TinkherHub and IEEE HackArch 2.0",
            "ARAMBH 2k22 IEDC hackathon",
        ],
    },
    {
        title: "Workshops",
        company_name: "Seminar, Summits",
        icon: workshop,
        iconBg: "#a2d2ff",
        skills: "Skills: Public Speaking",
        points: [
            "IEDc Summit 2023 at CET Trivandrum",
            "Online self-paced bootcamp by ICT Academy and GDG on Machine Learning with TensorFlow and Android with Compose",
            "Python & ML Bootcamp conducted BIT and Google developer Group",
            "JavaScript & React Bootcamp conducted Google developer group Ranchi",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/harikris001',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/harikrishnarnair',
    },
    {
        name: 'Twitter',
        iconUrl: twitter,
        link: 'https://www.x.com/TheHarikris'
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram using Flutter, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://instagram-harikris.vercel.app/',
    },
    {
        iconUrl: tiger,
        theme: 'btn-back-yellow',
        name: 'Wild Cat Classifier',
        description: 'Created a Deep Laerning Model that can predict upto 10 different types of wild cats. Transfer learning on EfficientNet-b0, Inception, TinyVGG (from scratch).',
        link: 'https://wild-cat-classifier-harikris.streamlit.app/',
    },
    {
        iconUrl: mask,
        theme: 'btn-back-black',
        name: 'Real-time Mask Detector',
        description: 'Real-time mask detector that uses the power of machine learning to detect the person has worn or not worn mask, and even detect mask worn incorrectly. The model has an accuracy of 99%',
        link: 'https://github.com/harikris001/Mask-Detector',
    },
    {
        iconUrl: mario,
        theme: 'btn-back-red',
        name: 'Super Mario AI: Reinforcement learning',
        description: 'A Reinforcement learning based AI Agnet that can play the game Super Mario Bros. Uses the power of Policy Proximal Optimization to make critical decisions. ',
        link: 'https://github.com/harikris001/Super-mario-Reinforcement-Learning-V2',
    },
    {
        iconUrl: chatAI,
        theme: 'btn-back-black',
        name: 'ChatAI Voice Assistant',
        description: 'A flutter application that leverges the power of ChatGPT for interaction with user and perform AI Image generation using DALL-E.',
        link: 'https://github.com/harikris001/chatAI-using-flutter',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-blue',
        name: 'Weather App',
        description: 'A simple flutter based app with an amazing UI. uses OpenWeather API for fetching realtime weather and temprature data.',
        link: 'https://weather-app-harikris001.vercel.app/',
    }
];
