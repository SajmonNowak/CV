import React, { useState } from "react";
import "../../styles/Input.css";

function Textarea({ id, placeholder, defaultValue }) {
  const [info, setInfo] = useState({
    inputValue: defaultValue,
  });
  const [edit, setEdit] = useState(false);

  const getInfo = (e) => {
    setInfo({
      inputValue: e.target.value,
    });
  };

  const closeEdit = () => {
    setEdit(false);
  };

  const resize = (e) => {
    e.target.style.height = "";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  if (edit) {
    return (
      <textarea
        id={id}
        onChange={getInfo}
        onBlur={closeEdit}
        type="text"
        placeholder={placeholder}
        defaultValue={info.inputValue}
        autoFocus
        className="textArea"
        onFocus={resize}
        onInput={resize}
      />
    );
  } else {
    return (
      <div className="textArea" onClick={() => setEdit(true)}>
        {info.inputValue}
      </div>
    );
  }
}

export default Textarea;
