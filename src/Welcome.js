import React from "react";
import { Follow } from "./Follow";
import { Counter } from "./Counter";

// to display name and pic 

export function Welcome({ name, pic, deleteButton, editButton }) {
  return (
    <div className="user-details">

      <img src={pic} alt="profilePicture" />
      <h1>{name}</h1>
      {/* to add like and dislike button  */}
      <Counter />
      {/* To add follow button  */}
      <Follow />

      {deleteButton}
      {editButton}

    </div>
  );
}
