import styles from "../styles/Frame.module.css";
import Presentation from "./Presentation";
import Experience from "./Experience";
import { useState } from "react";
import Prevew from "./Preview";

export default function Frame() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    postalcode: "",
    city: "",
    phone: "",
    github: "",
    linkedin: "",
  });
  const initExperience = {
    website: "",
    headline: "",
    startTime: "",
    endTime: "",
    description: "",
  };

  const [experiences, setExperiences] = useState([initExperience]);

  const [selectedImage, setSelectedImage] = useState();

  const [isShow, setIsShow] = useState(true);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage({
        src: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleExperienceChange = (e, id) => {
    const name = e.target.name;

    const value = e.target.value;
    const newState = experiences.map((exp, index) => {
      if (index === id) {
        return {
          ...exp,
          [name]: value,
        };
      } else {
        return exp;
      }
    });

    setExperiences(newState);
  };

  const removeExperience = (i) => {
    const values = [...experiences];
    values.splice(i, 1);
    setExperiences(values);
  };

  return (
    <>
      {isShow ? (
        <div className={styles.frame}>
          <Presentation
            state={state}
            handleChange={handleChange}
            imageChange={imageChange}
            selectedImage={setSelectedImage}
          />
          {experiences.map((experience, i) => (
            <Experience
              key={i}
              state={experience}
              initExperience={initExperience}
              experiences={experiences}
              setExperiences={setExperiences}
              removeExperience={removeExperience}
              handleExperienceChange={(e) => handleExperienceChange(e, i)}
            />
          ))}
        </div>
      ) : (
        <Prevew
          state={state}
          selectedImage={selectedImage}
          experiences={experiences}
        />
      )}
      <button onClick={handleClick}>Preview</button>
    </>
  );
}
