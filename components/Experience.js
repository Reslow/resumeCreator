import style from "../styles/Experience.module.css";

export default function Experience({
  experience,
  handleExperienceChange,
  experiences,
  removeExperience,
  addExperience,
}) {
  console.log(experience.id);
  return (
    <div className={style.experienceContainer}>
      <div>
        <div className={style.workPeriodAndTitle}>
          <input
            type="text"
            className={style.experienceHeadline}
            name="headline"
            placeholder={"headline"}
            defaultValue={experience ? experience.headline : " "}
            onChange={handleExperienceChange}
          />
          <div className={style.workPeriod}>
            <label>From</label>
            <input
              type="date"
              name="startTime"
              defaultValue={experience ? experience.startTime : ""}
              onChange={handleExperienceChange}
            />
            <label>To</label>
            <input
              type="date"
              name="endTime"
              defaultValue={experience ? experience.endTime : null}
              onChange={handleExperienceChange}
            />
          </div>
        </div>
        <div className={style.description}>
          <textarea
            name="description"
            defaultValue={experience ? experience.description : ""}
            onChange={handleExperienceChange}
          ></textarea>
          <button onClick={() => addExperience()}>add experience</button>
          {experiences.length > 1 && (
            <button onClick={() => removeExperience(experience.id)}>
              remove experience
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
