import React from "react";
import { useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Welcome } from "./Welcome";
import {useEffect,useState} from "react";

export function UserList() {
  // For initial setup
  const[user,setUser]=useState([])

  // Get data from Api  for userlist
  const getUsers=()=>{
    fetch("https://618fa736f6bf4500174849a7.mockapi.io/user",{
      method:"GET"
    }).then((data)=>data.json())
    .then((usr)=>setUser(usr))
  };

  // This is a caller function of the getUsers 
  useEffect(getUsers,[])

  const deleteUser=(id)=>{
    fetch("https://618fa736f6bf4500174849a7.mockapi.io/user/" + id,{
      method:"DELETE"
    }).then((data)=>data.json())
    .then(()=>getUsers)
  };
 

  // To change url
  const history = useHistory();

  return (
    <div>
      <section className="user-list">
        {user.map((user, index) => (
          // To disply name and movie in welcome app to fetch data from initial setup
          <Welcome
            key={index}
            name={user.name}
            pic={user.pic}
            id={user.id}
            //
// Delete the user data from api
            deleteButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => deleteUser(user.id)}
              aria-label="delete"
              color="error">
              <DeleteIcon />
            </IconButton>
            }
            // Edit the user data from api
            editButton={
            <IconButton
              onClick={() => history.push("/user/edit/" + user.id)}
              aria-label="delete"
              color="info">
              <EditIcon />
            </IconButton>} />
        ))}
      </section>
    </div>
  );
}
