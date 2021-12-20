import React from "react";
import AboutMe from "../ResumeParts/AboutMe";
import Contact from "../ResumeParts/Contact";
import Qualification from "../ResumeParts/Qualification";
import PersonalDetails from "../ResumeParts/PersonalDetails";
import Experience from "../ResumeParts/Experience";
import ProfilePic from "../ResumeParts/ProfilePic";
import Skills from "../ResumeParts/Skills";
import Projects from "../ResumeParts/Projects";
const Resume = ({ editing, setediting }) => {
  return (
    <div className="resumeWrapper">
      <div className="resume">
        <div className="leftSection">
          <ProfilePic editing={editing} />
          <AboutMe state={editing} />
          <Qualification editing={editing} />
          <Experience editing={editing} />
        </div>
        <div className="rightSection">
          <PersonalDetails editing={editing} />
          <Contact editing={editing} />
          <Projects editing={editing} />
          <Skills editing={editing} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
