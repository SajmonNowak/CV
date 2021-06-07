import React, { useState } from "react";
import useVisible from "./useVisible";

const ListItem = ({ defaultValue, placeholder, id, deleteFunction }) => {
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
      <li className="listItem" ref={ref}>
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
      <li className="listItem" onClick={() => setIsVisible(!isVisible)}>
        <span>{info.inputValue}</span>
      </li>
    );
  }
};

export default ListItem;
