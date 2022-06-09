import React from "react";
import "../styles/Main.css";
import Personal from "./Sections/Personal";
import Skill from "./Sections/Skill";
import EducationSection from "./Sections/Education";
import ExperienceSection from "./Sections/Experience";
import AwardsSection from "./Sections/Awards";


const Main = () => {
  return (
    <div id="main" className="isPrinted">
      <div className="personalSection">
        <Personal />
        <div className="skillSection">
          <Skill />
        </div>
      </div>
      <div className="rightSide">
        <ExperienceSection />
        <EducationSection />
        <AwardsSection />
      </div>
    </div>
  );
};

export default Main;
