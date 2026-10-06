import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDiagramProject, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "JavaScript",
    "Java",
    "Python",
    "C++",
    "Node.js",
    "NestJS",
    "Express",
    "React.js",
    "Next.js",
    "React Native"
];

const labelsSecond = [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "GitHub Actions",
    "CI/CD"
];

const labelsThird = [
    "ESP32",
    "Arduino",
    "PlatformIO",
    "MQTT",
    "TCP",
    "Kafka",
    "Amazon KVS"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Languages & Full Stack</h3>
                    <p>Programs in JavaScript, Java, Python, and C++. Built responsive, scalable apps with Next.js, React Native, Node.js, and REST APIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud, DevOps & Databases</h3>
                    <p>Experienced in replacing manual deployments with automated CI/CD using GitHub Actions and Docker. Proficient with PostgreSQL, MongoDB, Redis, and AWS.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Devices & Telemetry</h3>
                    <p>Building device-to-cloud systems: ESP32 firmware, MQTT telemetry tested at 100K devices, and sub-100 ms video transmission for drone networks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;