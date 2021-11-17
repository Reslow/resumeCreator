import style from "../styles/Save.module.css";
export default function Save() {
  return (
    <div className={style.save}>
      <button className={style.pre}>Preview</button>
      <button className={style.down}>Download</button>
    </div>
  );
}
