import style from "../styles/Experience.module.css";
export default function Experience() {
  return (
    <div className={style.experienceContainer}>
      <div className={style.workPeriodAndTitle}>
        <input
          type="text"
          className={style.experienceHeadline}
          name="headline"
        />
        <div className={style.workPeriod}>
          <label>From</label>
          <input type="date" name="time" />
          <label>To</label>
          <input type="date" name="time" />
        </div>
      </div>
      <div className={style.description}>
        <textarea name="description"></textarea>
      </div>
      <div className={style.addbtnContainer}>
        <button className={style.addbtn}>new</button>
      </div>
    </div>
  );
}
