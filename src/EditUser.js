import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function EditUser({ userList, setUserList }) {

  // useParams is used to get index value for particular user
  const { id } = useParams();
  const user = userList[id];

  const [name, setName] = useState(user.name);
  const [pic, setPic] = useState(user.pic);
  const history = useHistory();

  return (
    <div className="editUser">
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="outlined-basic" label="Name" variant="outlined" />

      <TextField
        value={pic}
        onChange={(event) => setPic(event.target.value)}
        id="outlined-basic" label="ProfilePicture" variant="outlined" />

      <Button
        onClick={() => {
          const updatedUser = {
            name: name,
            pic: pic
          };
          const copyUserList = [...userList];
          copyUserList[id] = updatedUser;
          setUserList(copyUserList);
          history.push("/users");
        }}
        variant="outlined"
        color="success">Edit User</Button>
    </div>
  );
}
