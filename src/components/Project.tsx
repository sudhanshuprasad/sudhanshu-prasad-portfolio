import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>Flowbyte</h2>
                <ul>
                    <li>Water pump controller that tracks daily household water usage and automatically regulates supply.</li>
                    <li>Senses tank water level with an ultrasonic sensor and operates offline.</li>
                    <li>Load tested with 100K devices each sending an MQTT message every minute (~1,700 messages/sec).</li>
                    <li>Features ESP32 firmware, MQTT broker with mutual TLS (private CA), and a Node.js backend.</li>
                </ul>
                <p><strong>Stack:</strong> ESP32 (Arduino/PlatformIO), React Native, Node.js, Docker, Redis, MQTT, MongoDB, PostgreSQL, Google OAuth.</p>
            </div>
            <div className="project">
                <a href="https://bulbuldelivery.com/" target="_blank" rel="noreferrer"><h2>Bulbul Delivery (Freelance)</h2></a>
                <ul>
                    <li>Worked on the frontend website control panel to manage drone missions.</li>
                    <li>Built the software that connects a FastAPI backend to drones for autonomous flights using PyMavlink.</li>
                </ul>
                <p><strong>Website:</strong> <a href="https://bulbuldelivery.com/" target="_blank" rel="noreferrer">bulbuldelivery.com</a></p>
            </div>
            <div className="project">
                <h2>Robotic Pick and Place Arm with OpenCV</h2>
                <ul>
                    <li>Developed a real-time robotic control system using Python and ArUco markers for computer vision.</li>
                    <li>Implemented inverse kinematics on Arduino for precise arm movements.</li>
                </ul>
            </div>
            <div className="project">
                <h2>Patents & Open Source</h2>
                <ul>
                    <li><strong>Patents:</strong> Patent application No. 202231054142 (Force Based Single Handed UAV Controller), Indian Design Patents: No. 368946-001, No. 367119-001.</li>
                    <li><strong>Open Source:</strong> Contributions to ArduPilot (drone software).</li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Project;