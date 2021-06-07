import React, { useState } from "react";
import Input from "../Utilis/Input";
import useVisible from "../Utilis/useVisible";
import uniqid from "uniqid";
import "../../styles/Education.css";

const EducationSection = () => {
  const [eduSections, setEduSections] = useState(["10", "11"]);
  const { ref, isVisible, setIsVisible } = useVisible(false);

  const addEducation = () => {
    setEduSections(eduSections.concat(uniqid()));
  };

  const deleteEducation = (key) => {
    const newArray = eduSections.filter((section) => section !== key);
    setEduSections(newArray);
  };

  const createEducationSection = () => {
    return eduSections.map((section) => {
      return (
        <Education
          addSection={addEducation}
          deleteSection={deleteEducation}
          key={section}
          id={section}
        />
      );
    });
  };

  return (
    <div onClick={() => setIsVisible(!isVisible)}>
      <h2>Education</h2>
      {createEducationSection()}
      {isVisible && (
        <div className="addSection" ref={ref} onClick={addEducation}>
          + Add Skill
        </div>
      )}
    </div>
  );
};

const Education = ({ addSection, deleteSection, id }) => {
  const { ref, isVisible, setIsVisible } = useVisible(false);

  return (
    <div
      className="eduSection"
      id={id}
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      <div className="eduHeader">
        <div className="date eduDate">
          <Input placeholder="start" defaultValue="2004" />{" "}
          <p style={{ paddingLeft: "3px", paddingRight: "3px" }}>-</p>
          <Input placeholder="End" defaultValue="2006" />
        </div>
        <p style={{ paddingLeft: "10px", paddingRight: "10px" }}>|</p>
        <Input placeholder="School" defaultValue="University of Colombia" />
      </div>
      <Input
        placeholder="Graduation"
        defaultValue=" B.Sc in Management"
        classDefault="eduGrad"
      />
      {isVisible && (
        <div ref={ref}>
          <div
            onClick={() => {
              deleteSection(id);
            }}
            className="remove"
          >
            <i class="far fa-trash-alt trashSection"></i>Remove Section
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationSection;
