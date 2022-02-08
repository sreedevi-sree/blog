import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import TextField from '@mui/material/TextField';

export function AddUser({ userList, setUserList }) {
  const [name, setName] = useState(" ");
  const [pic, setPic] = useState(" ");
  const history = useHistory();
  return (
    <div className="new-Userlist">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="outlined-basic" label="Name" variant="outlined" />

      <TextField
        value={pic}
        onChange={(event) => setPic(event.target.value)}
        id="outlined-basic" label="profilePicture" variant="outlined" />

      <button
        onClick={() => {
          const newUser = {
            name: name,
            pic: pic
          };
          // add the name and pic to the inital setup
          setUserList([...userList, newUser]);
          history.push("/users");
        }}
      >
        Add User
      </button>
    </div>
  );
}
