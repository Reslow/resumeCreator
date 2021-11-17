import Experience from "./Experience";
import Presentation from "./Presentation";
import styles from "../styles/Frame.module.css";
import Save from "./Save";

export default function Frame() {
  return (
    <div className={styles.frame}>
      <Presentation />
      <Experience />
      <Experience />
      <Experience />
      <Save />
    </div>
  );
}
