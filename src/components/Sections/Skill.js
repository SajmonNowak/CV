import React, { useState } from "react";
import SkillBar from "../Utilis/SkillBar";
import uniqid from "uniqid";
import useVisible from "../Utilis/useVisible";
import Textarea from "../Utilis/Textarea";

const Skills = () => {
  const [skillSections, setSkillSections] = useState(["10", "20", "30"]);
  const { ref, isVisible, setIsVisible } = useVisible(false);

  const addSkill = () => {
    setSkillSections(skillSections.concat(uniqid()));
  };

  const deleteSkill = (key) => {
    const newArray = skillSections.filter((section) => section !== key);
    setSkillSections(newArray);
  };

  const createSkillBars = () => {
    return skillSections.map((section) => {
      return <SkillBar deleteSkill={deleteSkill} id={section} key={section} />;
    });
  };

  return (
    <div
      style={{ marginTop: "20px", textAlign: "justify", paddingRight: "25px" }}
      ref={ref}
      onClick={() => setIsVisible(!isVisible)}
    >
      <h2>Professional Skills</h2>
      <Textarea
        defaultValue=" Exceptional creative and analytical thinking abilities
Extensive familiarity with Photoshop, Flash, and Flex
Strong expertise in digital photography and graphics
Outstanding proficiency in search engine optimization techniques "
      />
      {createSkillBars()}
      {isVisible && (
        <div
          style={{ marginTop: "10px" }}
          onClick={addSkill}
          className="addSection"
        >
          Add Skill
        </div>
      )}
    </div>
  );
};

export default Skills;
