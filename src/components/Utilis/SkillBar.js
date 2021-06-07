import React, { useState } from "react";
import Input from "./Input";
import useVisible from "./useVisible";
import "../../styles/SkillBar.css";

const SkillBar = ({ deleteSkill, id }) => {
  const { ref, isVisible, setIsVisible } = useVisible(false);
  const [skillName, setSkillName] = useState("My Skill");
  const [skillPercentage, setSkillPercentage] = useState("70");

  const getInputName = (input) => {
    setSkillName(input);
  };

  const changeSkillPercentage = (e) => {
    setSkillPercentage(e.target.value);
  };

  if (isVisible) {
    return (
      <div ref={ref}>
        <Input
          placeholder="Skill Name"
          defaultValue={skillName}
          passInputToParent={getInputName}
        />
        <input type="range" onChange={changeSkillPercentage} />
        <div>
          <i onClick={() => deleteSkill(id)} class="far fa-trash-alt trashSM" />
        </div>
      </div>
    );
  } else {
    return (
      <div onClick={() => setIsVisible(!isVisible)}>
        <div className="skill">
          <div>{skillName}</div>
          <div className="skillBar">
            <div
              className="skillPercentage"
              style={{ width: `${skillPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
};

export default SkillBar;
