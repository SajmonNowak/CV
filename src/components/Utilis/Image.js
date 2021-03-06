import React, { useRef, useState } from "react";
import placeHolder from "../../imgs/Placeholder.png";

const Image = () => {
  const [image, setImage] = useState(placeHolder);
  const fileInput = useRef();

  const fileSelectedHandler = (e) => {
    
    if(e.target.files[0] !== undefined){
    const newSrc = URL.createObjectURL(e.target.files[0]);
    setImage(newSrc);
    }
  };

  return (
    <div className="imgDiv">
      <img
        onClick={() => fileInput.current.click()}
        src={image}
        className="image"
        alt=""
      />
      <input
        ref={fileInput}
        type="file"
        onChange={fileSelectedHandler}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Image;
