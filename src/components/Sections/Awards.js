import React, { useState } from "react";
import Input from "../Utilis/Input";
import useVisible from "../Utilis/useVisible";
import uniqid from "uniqid";
import "../../styles/Awards.css";

const Awards = ({ colorSettings }) => {
  const [awardSections, setAwardSections] = useState(["10"]);
  const { ref, isVisible, setIsVisible } = useVisible(false);

  const addAward = () => {
    setAwardSections(awardSections.concat(uniqid()));
  };

  const deleteAward = (key) => {
    const newArray = awardSections.filter((section) => section !== key);
    setAwardSections(newArray);
  };

  const createAwardSection = () => {
    return awardSections.map((section) => {
      return (
        <Award
          addSection={addAward}
          deleteSection={deleteAward}
          key={section}
          id={section}
        />
      );
    });
  };

  return (
    <div className="awards-Container" onClick={() => setIsVisible(!isVisible)}>
      <h2 className="heading" style={{ color: `${colorSettings.primary}` }}>
        Auszeichnungen
      </h2>
      <div className="editable-hover">
        {createAwardSection()}
        {isVisible && (
          <div className="addSection" ref={ref} onClick={addAward}>
            + Add Section
          </div>
        )}
      </div>
    </div>
  );
};

const Award = ({ deleteSection, id }) => {
  const { ref, isVisible, setIsVisible } = useVisible(false);

  return (
    <div
      className="awardsSection"
      id={id}
      onClick={() => {
        setIsVisible(!isVisible);
      }}
    >
      <div className="eduHeader">
        <div className="date eduDate">
          <Input placeholder="start" defaultValue="2004" />
          <p style={{ paddingLeft: "3px", paddingRight: "3px" }}>-</p>
          <Input placeholder="End" defaultValue="2006" />
        </div>
      </div>
      <Input
        placeholder="Graduation"
        defaultValue="Stipendium"
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

export default Awards;
