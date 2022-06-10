import React, { useState, useRef } from "react";
import "../../styles/Input.css";
import useOutsideAlerter from "./useOutsideAlerter"

function Input({
  id,
  key,
  placeholder,
  defaultValue,
  passInputToParent,
  classDefault,
  deleteFunction,
  colorSettings
}) {
  const [info, setInfo] = useState(defaultValue);

  const [edit, setEdit] = useState(false);
  const wrapperRef = useRef(null);

  const getInfo = (e) => {
    e.preventDefault();

    setInfo(e.target.value);
    
    if (passInputToParent) {
      passInputToParent(e.target.value, e.target);
    }
  };

  const closeEdit = () => {
    setEdit(false);
  };

  useOutsideAlerter(wrapperRef, closeEdit);

  if (edit) {
    return (
      <div style={{display: "flex"}} ref={wrapperRef}>
        <input
        id={id}
          onChange={getInfo}
          type="text"
          placeholder={placeholder}
          defaultValue={info}
          autoFocus
        />
        {deleteFunction && <div style={{padding: "0 10px", color: "red"}} onClick={(e) => {deleteFunction(id); setEdit(false)}}>X</div>}
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          setEdit(true);
        }}
        className={classDefault}
        key={key}
      >
        {info}
      </div>
    );
  }
}

export default Input;
