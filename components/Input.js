import style from "../styles/Input.module.css";
export default function Input(props) {
  return <input type="text" className={style.text} {...props} />;
}
