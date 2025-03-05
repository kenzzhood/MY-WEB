import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import "./Experience.scss";

const Experience = ({ resumeExperience, resumeBasicInfo }) => {
  const sectionName = resumeBasicInfo?.section_name?.experience || "Experience";
  const work = resumeExperience?.map((work, i) => {
    const mainTech = work.mainTech?.map((technology, i) => (
      <Badge pill className="main-badge" key={i}>
        {technology}
      </Badge>
    ));
    const tech = work.technologies?.map((technology, i) => (
      <Badge pill className="experience-badge" key={i}>
        {technology}
      </Badge>
    ));

    return (
      <VerticalTimelineElement
        className="custom-timeline-element"
        date={work.years}
        iconStyle={{
          background: "#6C63FF", // Customize as per your theme color
          color: "#fff",
        }}
        icon={<i className={`experience-icon ${work.icon}`} />}
        key={i}
      >
        <div className="main-tech">{mainTech}</div>
        <h3 className="experience-title">{work.title}</h3>
        <h4 className="experience-subtitle">{work.company}</h4>
        <div className="tech-stack">{tech}</div>
      </VerticalTimelineElement>
    );
  });

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h1 className="section-title">{sectionName}</h1>
        <VerticalTimeline>{work}</VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
