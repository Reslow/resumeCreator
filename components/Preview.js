import Image from "next/image";
import styles from "../styles/Frame.module.css";
import GenericPdf from "../GenereicPDF";

export default function Preview({ state, selectedImage, experiences }) {
  return (
    <div className={styles.frame}>
      <div className={styles.divToDownload} id={"test"}>
        <div className={styles.presentation}>
          {selectedImage && (
            <Image
              id="profileimg"
              src={`${selectedImage.src}`}
              alt="your image"
              height="150"
              width="250"
            />
          )}
          <div className={styles.presentationInput}>
            <p> {state.firstName}</p>
            <p> {state.lastName}</p>
            <p> {state.email}</p>
            <p> {state.phone}</p>
            <p>{state.address}</p>
            <p>{state.postalcode}</p>
            <p>{state.city}</p>
            <p>{state.github}</p>
            <p>{state.linkedin}</p>
          </div>
        </div>
        <div>
          {experiences.map((exp, i) => {
            return (
              <div key={i}>
                <h2> {exp.headline}</h2>
                <p>
                  <b> from {exp.startTime}</b>
                </p>
                <p>
                  <b> to {exp.endTime}</b>
                </p>
                <p>
                  <b>{exp.description}</b>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <GenericPdf rootElementId="test" downloadFileName="ResumeCreator" />
    </div>
  );
}
