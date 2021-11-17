import style from "../styles/Presentation.module.css";

export default function Presentation() {
  return (
    <div>
      <form>
        <div className={style.formContainer}>
          <div className={style.profile}>
            <label>upload profile image</label>
            <input type="file" id="img" name="img" />
            <textarea
              name="presentation"
              placeholder="why are you, What are your strengths?"
            />
          </div>
          <div className={style.demo}>
            <input type="text" name="fname" placeholder="Name" />
            <input type="text" name="Lname" placeholder="Last Name" />
            <input type="mail" name="Email" placeholder="Email address" />
            <input type="number" name="Number" placeholder="phone number" />
            <input type="text" name="Address" placeholder="your address" />
          </div>
        </div>
      </form>
    </div>
  );
}
