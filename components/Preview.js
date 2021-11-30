import Image from "next/image";
import styles from "../styles/Frame.module.css";
export default function Preview({ state, selectedImage, experiences }) {
  return (
    <div className={styles.frame}>
      <p>Firstname: {state.firstName}</p>
      <p>Lastname {state.lastName}</p>
      <p>Email: {state.email}</p>
      <p>phone: {state.phone}</p>
      <p>address:{state.address}</p>
      <p>postalcode:{state.postalcode}</p>
      <p>city:{state.city}</p>
      <p>github:{state.github}</p>
      <p>Linkedin:{state.linkedin}</p>
      {selectedImage && (
        <Image
          id="profileimg"
          src={`${selectedImage.src}`}
          alt="your image"
          height="100"
          width="50"
        />
      )}
      {experiences.map((exp, i) => {
        console.log(exp);
        return (
          <div key={i}>
            <p>{exp.headline}</p>
            <p>{exp.startTime}</p>
            <p>{exp.endTime}</p>
            <p>{exp.description}</p>
          </div>
        );
      })}
    </div>
  );
}
