import React, { useState } from "react";
import uniqid from "uniqid";
import Input from "../Utilis/Input";
import List from "../Utilis/List";
import Textarea from "../Utilis/Textarea";
import useVisible from "../Utilis/useVisible";
import "../../styles/Experience.css";

const ExperienceSection = ({ colorSettings }) => {
  const { ref, isVisible, setIsVisible } = useVisible(false);
  const [expSections, setExpSections] = useState(["1", "2"]);

  const addExperience = () => {
    setExpSections(expSections.concat(uniqid()));
  };

  const deleteExperience = (key) => {
    const newArray = expSections.filter((section) => section !== key);
    setExpSections(newArray);
  };

  const createExperienceSection = () => {
    return expSections.map((section) => {
      return (
        <Experience
          addSection={addExperience}
          deleteSection={deleteExperience}
          key={section}
          id={section}
          colorSettings={colorSettings}
        />
      );
    });
  };

  return (
    <div className="experienceBlock" onClick={() => setIsVisible(!isVisible)}>
      <h2 className="heading" style={{ color: `${colorSettings.primary}` }}>
        Erfahrung
      </h2>
      <div className="editable-hover">
        {createExperienceSection()}
        {isVisible && (
          <div ref={ref} onClick={addExperience} className="addSection">
            + Add Experience
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = ({ addSection, deleteSection, id, colorSettings }) => {
  const { ref, isVisible, setIsVisible } = useVisible(false);

  return (
    <div
      className="experienceSection"
      id={id}
      onClick={() => setIsVisible(!isVisible)}
    >
      <Input
        placeholder="Date - Date"
        defaultValue=" November 2018 - Present"
        classDefault="date"
      />
      <Input
        placeholder="Position"
        defaultValue="Creative Director"
        classDefault="position"
      />
      <Input
        placeholder="Company"
        defaultValue="Apple Inc., California"
        classDefault="company"
      />
      <Textarea
        placeholder="Description of your Position"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus turpis ex, sed suscipit tortor fermentum id. In eu ipsum odio. Quisque posuere ligula nec erat placerat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu ornare eros. "
        defaultClass="jobDescription"
      />
      <List colorSettings={colorSettings} />
      {isVisible && (
        <div ref={ref}>
          <div
            onClick={() => {
              deleteSection(id);
            }}
            className="remove removeExperience"
          >
            <i class="far fa-trash-alt trashSection"></i>Remove Experience
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
