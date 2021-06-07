import React, { useState } from "react";
import useVisible from "../Utilis/useVisible";

const SocialMedia = ({ icon, remove }) => {
  const { ref, isVisible, setIsVisible } = useVisible(false);
  const [info, setInfo] = useState({
    inputValue: "Profile / Link",
  });

  const getInfo = (e) => {
    setInfo({
      inputValue: e.target.value,
    });
  };

  if (isVisible) {
    return (
      <div ref={ref} className="socialMediaProfile">
        <input
          onChange={getInfo}
          type="text"
          placeholder="Profile / Link"
          defaultValue={info.inputValue}
          autoFocus
        />
        <i class={icon}></i>

        <div onClick={() => remove(icon)}>
          <i class="far fa-trash-alt trashSM" />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="socialMediaProfile"
        onClick={() => setIsVisible(!isVisible)}
      >
        <div>{info.inputValue}</div>
        <i class={icon}></i>
      </div>
    );
  }
};

export default SocialMedia;
