import React from "react";
import style from "../styles/presentation.module.css";
import Input from "./Input";

export default function Presentation({ state, handleChange, imageChange }) {
  return (
    <div className={style.container}>
      <div className="selectImage">
        <Input
          type="file"
          name="selectImage"
          placeholder="first name"
          value={state ? state.profileImage : ""}
          accept="image/png, image/jpeg"
          onChange={imageChange}
          id="selectImage"
          className={style.imageInput}
        />
      </div>
      <div className={style.grid}>
        <Input
          name="firstName"
          placeholder="first name"
          value={state ? state.firstName : ""}
          onChange={handleChange}
        />
        <Input
          name="lastName"
          placeholder="last name"
          value={state ? state.lastName : ""}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="email"
          value={state ? state.email : ""}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="phone"
          placeholder="tel"
          value={state ? state.phone : ""}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="address"
          value={state ? state.address : ""}
          onChange={handleChange}
        />
        <Input
          name="postalcode"
          type="number"
          placeholder="pstalcode"
          value={state ? state.postalcode : ""}
          onChange={handleChange}
        />
        <Input
          name="city"
          placeholder="city"
          value={state ? state.city : ""}
          onChange={handleChange}
        />
        <Input
          name="github"
          placeholder="github"
          value={state ? state.github : ""}
          onChange={handleChange}
        />
        <Input
          name="linkedin"
          placeholder="linkedin"
          value={state ? state.linkedin : ""}
          onChange={handleChange}
        />
        <Input
          name="website"
          placeholder="website"
          value={state ? state.website : ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
