import React, { useState } from "react";
import "../../styles/Input.css";

function Input({
  id,
  placeholder,
  defaultValue,
  passInputToParent,
  classDefault,
}) {
  const [info, setInfo] = useState({
    inputValue: defaultValue,
  });
  const [edit, setEdit] = useState(false);

  const getInfo = (e) => {
    e.preventDefault();

    setInfo({
      inputValue: e.target.value,
    });

    if (passInputToParent) {
      passInputToParent(e.target.value);
    }
  };

  const closeEdit = () => {
    setEdit(false);
  };

  if (edit) {
    return (
      <input
        id={id}
        onChange={getInfo}
        onBlur={closeEdit}
        type="text"
        placeholder={placeholder}
        defaultValue={info.inputValue}
        autoFocus
      />
    );
  } else {
    return (
      <div onClick={() => setEdit(true)} className={classDefault}>
        {info.inputValue}
      </div>
    );
  }
}

export default Input;
