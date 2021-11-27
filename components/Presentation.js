import React from "react";
import style from "../styles/presentation.module.css";
import Image from "next/dist/client/image";

export default function Presentation({
  state,
  handleChange,
  imageChange,
  selectedImage,
}) {
  return (
    <div>
      <div className={style.formContainer}>
        <div className={style.profile}>
          <input
            type="file"
            name="profileImage"
            placeholder="first name"
            value={state.profileImage}
            accept="image/png, image/jpeg"
            onChange={imageChange}
            id="profileInput"
          />

          <input
            type="text"
            name="firstName"
            placeholder="first name"
            value={state.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="last name"
            value={state.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={state.email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            placeholder="tel"
            value={state.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="address"
            value={state.address}
            onChange={handleChange}
          />
          <input
            type="number"
            name="postalcode"
            placeholder="pstalcode"
            value={state.postalcode}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="city"
            value={state.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="github"
            placeholder="github"
            value={state.github}
            onChange={handleChange}
          />
          <input
            type="text"
            name="linkedin"
            placeholder="linkedin"
            value={state.linkedin}
            onChange={handleChange}
          />
          <input
            type="text"
            name="website"
            placeholder="website"
            value={state.website}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
