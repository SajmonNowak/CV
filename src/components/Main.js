import React from "react";
import "../styles/Main.css";
import Personal from "./Sections/Personal";
import Skill from "./Sections/Skill";
import EducationSection from "./Sections/Education";
import ExperienceSection from "./Sections/Experience";
import AwardsSection from "./Sections/Awards";


const Main = ({colorSettings}) => {
  return (
    <div id="main" className="isPrinted">
      <div className="personalSection"  style={{backgroundColor: `${colorSettings.primary}`}}>
        <Personal colorSettings={colorSettings} />
        <div className="skillSection">
          <Skill colorSettings={colorSettings} />
        </div>
      </div>
      <div className="rightSide">
        <ExperienceSection colorSettings={colorSettings}/>
        <EducationSection colorSettings={colorSettings}/>
        <AwardsSection colorSettings={colorSettings}/>
      </div>
    </div>
  );
};

export default Main;
