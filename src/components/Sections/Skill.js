import React, { useState } from "react";
import SkillBar from "../Utilis/SkillBar";
import uniqid from "uniqid";
import useVisible from "../Utilis/useVisible";
import Textarea from "../Utilis/Textarea";
import "../../styles/Skills.css";
import Input from "../Utilis/Input";
import useHover from "../Utilis/useHover";

const Skills = ({ colorSettings }) => {
  const [skillSections, setSkillSections] = useState(["10", "20"]);
  const [skillTags, setSkillTags] = useState([
    { name: "React", id: 451 },
    { name: "JavaScript", id: 452 },
  ]);
  const { ref, isVisible, setIsVisible } = useVisible(false);
  const [hoverRef, isHovered] = useHover();

  const addSkill = () => {
    setSkillSections(skillSections.concat(uniqid()));
  };

  const addTag = () => {
    setSkillTags(
      skillTags.concat({
        name: "Skill",
        id: uniqid(),
      })
    );
  };

  const editTag = (value, target) => {
    const newTagArray = skillTags.map((obj) => {
      if (obj.id === target.id) {
        return { ...obj, name: value };
      }

      return obj;
    });

    setSkillTags(newTagArray);
  };

  const deleteSkill = (key) => {
    const newArray = skillSections.filter((section) => section !== key);
    setSkillSections(newArray);
  };

  const deleteTag = (targetID) => {
    const newArray = skillTags.filter((x) => targetID !== x.id);
    setSkillTags(newArray);
  };

  const createSkillBars = () => {
    return skillSections.map((section) => {
      return <SkillBar deleteSkill={deleteSkill} id={section} key={section} />;
    });
  };

  const displayTags = () => {
    return skillTags.map((tag) => {
      return (
        <div
          className="tag"
          style={{
            backgroundColor: `${colorSettings.secondary}`,
            color: `${colorSettings.primary}`,
          }}
        >
          <Input
            id={tag.id}
            placeholder="Tag"
            defaultValue={tag.name}
            deleteFunction={deleteTag}
            passInputToParent={editTag}
            key={tag.id}
          />
        </div>
      );
    });
  };

  return (
    <div
      style={{ marginTop: "20px", textAlign: "justify", padding: "25px" }}
      onClick={() => setIsVisible(!isVisible)}
    >
      <h2>Fähigkeiten</h2>
      <div
        ref={hoverRef}
        style={{
          boxShadow: isHovered ? `0 0 2px 2px ${colorSettings.secondary}` : "",
        }}
      >
        <Textarea defaultValue="In eu ipsum odio. Quisque posuere ligula nec erat placerat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu ornare eros. " />
        <div class="tag-container">{displayTags()}</div>
        <div className="bars-container">{createSkillBars()}</div>
        {isVisible && (
          <div ref={ref}>
            <div
              onClick={addSkill}
              className="addSection"
              style={{
                marginTop: "10px",
                color: `${colorSettings.primary}`,
                filter: "invert(100%)",
              }}
            >
              Add Bar
            </div>
            <div
              onClick={addTag}
              className="addSection"
              style={{
                marginTop: "10px",
                color: `${colorSettings.primary}`,
                filter: "invert(100%)",
              }}
            >
              Add Tag
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
