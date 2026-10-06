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
                <p>Water pump controller that tracks daily household water usage and automatically regulates supply. Senses tank water level with an ultrasonic sensor and operates offline. Load tested with 100K devices each sending an MQTT message every minute (~1,700 messages/sec). Features ESP32 firmware, MQTT broker with mutual TLS (private CA), and a Node.js backend.</p>
                <p><strong>Stack:</strong> ESP32 (Arduino/PlatformIO), React Native, Node.js, Docker, Redis, MQTT, MongoDB, PostgreSQL, Google OAuth.</p>
            </div>
            <div className="project">
                <a href="https://play.google.com/store/apps/details?id=com.hodotriphopper&hl=en_IN" target="_blank" rel="noreferrer"><h2>Hodo App</h2></a>
                <p>Freelance project where I delivered a published Android app available on the Google Play Store.</p>
                <p><strong>Website:</strong> <a href="https://www.hodoapp.com/" target="_blank" rel="noreferrer">hodoapp.com</a></p>
            </div>
            <div className="project">
                <h2>Robotic Pick and Place Arm with OpenCV</h2>
                <p>Developed a real-time robotic control system using Python and ArUco markers for computer vision. Implemented inverse kinematics on Arduino for precise arm movements.</p>
            </div>
            <div className="project">
                <h2>Patents & Open Source</h2>
                <p><strong>Patents:</strong> Patent application No. 202231054142 (Force Based Single Handed UAV Controller). Indian Design Patents: No. 368946-001, No. 367119-001.</p>
                <p><strong>Open Source:</strong> Contributions to ArduPilot (drone software).</p>
            </div>
        </div>
    </div>
    );
}

export default Project;