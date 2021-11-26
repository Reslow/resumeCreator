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
    website: "",
    headline: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <>
      {isShow ? (
        <div className={styles.frame}>
          <Presentation state={state} handleChange={handleChange} />
          <Experience state={state} handleChange={handleChange} />
        </div>
      ) : (
        <Prevew state={state} />
      )}
      <button onClick={handleClick}>knapp</button>
    </>
  );
}
