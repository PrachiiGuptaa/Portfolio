import React from 'react';
import './Education.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUniversity, faStar  } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  return (
    <div className="timeline">
        <h2>Education</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          date="March 2023 - Present"
          icon={<FontAwesomeIcon icon={faUniversity} />}
        >
          <h3 className="vertical-timeline-element-title">Front-End Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">FunctionUp, Bengaluru</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="July 2019 - November 2022"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">CA Articleship</h3>
          <h4 className="vertical-timeline-element-subtitle">Singhal Ajay & Associates, Delhi</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="April 2016 - March 2019"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor in Commerce</h3>
          <h4 className="vertical-timeline-element-subtitle">Bundelkhand University, Jhansi</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="April 2015 - March 2016"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">Higher Secondary</h3>
          <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya, Babina</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="April 2013 - March 2014"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">Secondary</h3>
          <h4 className="vertical-timeline-element-subtitle">Kendriya Vidyalaya, Babina</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          icon={<FontAwesomeIcon icon={faStar} />}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
