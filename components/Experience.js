import style from "../styles/Experience.module.css";
export default function Experience({ state, handleChange }) {
  return (
    <div className={style.experienceContainer}>
      <div className={style.workPeriodAndTitle}>
        <input
          type="text"
          className={style.experienceHeadline}
          name="headline"
          placeholder={"headline"}
          value={state.headline}
          onChange={handleChange}
        />
        <div className={style.workPeriod}>
          <label>From</label>
          <input
            type="date"
            name="startTime"
            value={state.startTime}
            onChange={handleChange}
          />
          <label>To</label>
          <input
            type="date"
            name="endTime"
            value={state.endTime}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={style.description}>
        <textarea
          name="description"
          value={state.description}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
}
