import React, { useState } from "react";
import useVisible from "./useVisible";

const ListItem = ({ defaultValue, placeholder, id, deleteFunction, colorSettings }) => {
  const [info, setInfo] = useState({
    inputValue: defaultValue,
  });
  const { ref, isVisible, setIsVisible } = useVisible(false);

  const getInfo = (e) => {
    setInfo({
      inputValue: e.target.value,
    });
  };

  if (isVisible) {
    return (
      <li className="listItem" ref={ref} style={{color: `${colorSettings.secondary}`}}>
        <input
          onChange={getInfo}
          type="text"
          placeholder={placeholder}
          defaultValue={info.inputValue}
          autoFocus
        />
        <div onClick={() => deleteFunction(id)}>
          <i class="far fa-trash-alt trashItem"></i>
        </div>
      </li>
    );
  } else {
    return (
      <li className="listItem" onClick={() => setIsVisible(!isVisible)} style={{color: `${colorSettings.secondary}`}}>
        <span style={{color: "black"}}>{info.inputValue}</span>
      </li>
    );
  }
};

export default ListItem;
