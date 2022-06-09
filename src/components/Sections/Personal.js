import React, { useRef, useState, useEffect } from "react";
import Input from "../Utilis/Input";
import Textarea from "../Utilis/Textarea";
import "../../styles/Personal.css";
import useVisible from "../Utilis/useVisible";
import SocialMedia from "../Utilis/SocialMedia";
import Image from "../Utilis/Image";

const Personal = () => {
  const [social, setSocial] = useState([]);
  const [linkedIn, setLinkedIn] = useState(false);
  const [xing, setXing] = useState(false);
  const [gitHub, setGitHub] = useState(false);
  const { ref, isVisible, setIsVisible } = useVisible(false);

  const addContact = (type) => {
    let icon;

    switch (type) {
      case "LinkedIn":
        icon = "fab fa-linkedin-in";
        setLinkedIn(true);
        break;
      case "Xing":
        icon = "fab fa-xing";
        setXing(true);
        break;
      case "GitHub":
        icon = "fab fa-github";
        setGitHub(true);
        break;
        default:
          break;
    }

    setSocial(social.concat(icon));
  };

  const removeSM = (sm) => {
    const newArray = social.filter((item) => item !== sm);

    switch (sm) {
      case "fab fa-linkedin-in":
        setLinkedIn(false);
        break;
      case "fab fa-xing":
        setXing(false);
        break;
      case "fab fa-github":
        setGitHub(false);
        break;
        default:
          break;
    }

    setSocial(newArray);
  };

  const createSocialMedia = () => {
    return social.map((sm) => {
      return <SocialMedia icon={sm} remove={removeSM} />;
    });
  };

  const changeImage = () => {};

  return (
    <div id="personalDiv" onClick={() => setIsVisible(!isVisible)}>
      <div className="pictureDiv">
        <Image />
      </div>
      <div className="personalInfo">
        <Input
          defaultValue="Max Mustermann"
          placeholder="Full Name"
          classDefault="name"
        />
        <Input
          defaultValue="Web Developer"
          placeholder="Profession"
          id="professionInput"
          classDefault="job"
        />
        <div id="descriptionDiv">
          <Textarea
            placeholder="Description"
            id="descriptionInput"
            defaultValue="Highly seasoned and reliable Entry Level Web Designer with a strong work ethic and customer service and satisfaction record. Adept multitasker capable of bringing simultaneous web page creation and repair projects to completion with full accuracy and efficiency. Able to function well independently with little to no supervision or in coordination with a professional electronic media team."
          />
        </div>
        <div className="contact">
          <div className="socialMediaProfile">
            <Input
              defaultValue="contact@mustermail.com"
              id="mailInput"
              placeholder="E-Mail"
            />
            <i class="far fa-envelope-open"></i>
          </div>
          <div className="socialMediaProfile">
            <Input
              defaultValue="0176-576298692"
              id="telInput"
              placeholder="Telephone"
            />
            <i class="fas fa-mobile-alt"></i>
          </div>
          {createSocialMedia()}
        </div>
        {isVisible && (
          <div ref={ref} className="addContact">
            {!linkedIn && (
              <div
                className="addSection"
                onClick={() => addContact("LinkedIn")}
              >
                + LinkedIn
              </div>
            )}
            {!xing && (
              <div className="addSection" onClick={() => addContact("Xing")}>
                + Xing
              </div>
            )}
            {!gitHub && (
              <div className="addSection" onClick={() => addContact("GitHub")}>
                + GitHub
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Personal;
