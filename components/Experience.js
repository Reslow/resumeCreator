import style from "../styles/Experience.module.css";
import Input from "./Input";

export default function Experience({
  experience,
  handleExperienceChange,
  experiences,
  removeExperience,
  addExperience,
}) {
  return (
    <div className={style.experienceContainer}>
      <div>
        <div className={style.workPeriodAndTitle}>
          <Input
            name="headline"
            placeholder={"headline"}
            defaultValue={experience ? experience.headline : " "}
            onChange={handleExperienceChange}
          />
          <div className={style.workPeriod}>
            <label className={style.labels}>From</label>
            <Input
              type="date"
              name="startTime"
              defaultValue={experience ? experience.startTime : ""}
              onChange={handleExperienceChange}
            />
            <label className={style.labels}>To</label>
            <Input
              type="date"
              name="endTime"
              defaultValue={experience ? experience.endTime : null}
              onChange={handleExperienceChange}
            />
          </div>
        </div>
        <div className={style.description}>
          <h2>Describe your experience</h2>
          <textarea
            name="description"
            defaultValue={experience ? experience.description : ""}
            onChange={handleExperienceChange}
          ></textarea>
          <button onClick={() => addExperience()}>+</button>
          {experiences.length > 1 && (
            <button onClick={() => removeExperience(experience.id)}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
