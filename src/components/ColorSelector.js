import React from "react";
import { HexColorPicker } from "react-colorful";
import useVisible from "./Utilis/useVisible";

const ColorSelector = ({ colorSettings, changeColor, primaryOrSecondary }) => {
  const { ref, isVisible, setIsVisible } = useVisible();

  const handleChange = (color) => {
    changeColor(color, primaryOrSecondary);
  };

  return (
    <div className="color-view__child">
      <div
        className="color-view__square"
        onClick={() => setIsVisible(true)}
        ref={ref}
        style={{ backgroundColor: `${colorSettings}` }}
      >
        {isVisible && (
          <HexColorPicker color={colorSettings} onChange={handleChange} />
        )}
      </div>
      <div className="color-view__hex">{colorSettings}</div>
    </div>
  );
};

export default ColorSelector;
