import React, { useState } from "react";
import Input from "./Input";
import "../../styles/Skills.css";

const Tag = ({ skill, id, deleteTag }) => {
  const [tagName, setTagName] = useState(skill);

  const editTag = (name) => {
    setTagName(name);
  };

  if (tagName.length === 0){
    console.log("carl")
    deleteTag(id);
  }

  return (
    <div className="tag" id={id} onClick={(e)=> e.stopPropagation() } >
      <Input
        placeholder="Tag"
        defaultValue={tagName}
        passInputToParent={editTag}
      />
    </div>
  );
};

export default Tag;
