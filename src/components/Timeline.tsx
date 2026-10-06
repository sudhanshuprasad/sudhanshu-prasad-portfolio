import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer II</h3>
            <h4 className="vertical-timeline-element-subtitle">1Stay, Ranchi</h4>
            <p>
              Built automatic failover between 2 payment gateways (Razorpay and Cashify), sustaining ~99% payment success.<br/>
              Integrated WhatsApp notifications generating ~20-25 booking/payment PDFs per day.<br/>
              Built internal portals for 5,000 properties and published 2 apps (iOS/Android).<br/>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 - Nov 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dshak, Hyderabad</h4>
            <p>
              Built video transmission and broadcast for drone IoT networks with latency under 100 ms.<br/>
              Developed backend APIs and full-stack features using React Native and Next.js.<br/>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2024 - Aug 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">GrowYT, Bhubaneswar</h4>
            <p>
              Built responsive, scalable apps with Next.js, PostgreSQL, and AWS.<br/>
              Replaced manual deployments with automated CI/CD using GitHub Actions and Docker.<br/>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2023 - Dec 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">IG Drones, Bhubaneswar</h4>
            <p>
              Developed a TCP drone communication platform and swarm apps (REST, MQTT) supporting a 10-drone swarm.<br/>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2020 - Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Institute of Technical Education and Research, Bhubaneswar</h4>
            <p>
              Bachelor of Technology in Computer Science
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;