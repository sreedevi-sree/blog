import React, { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function EditUser() {

  // useParams is used to get index value for particular user
  const { id } = useParams();
 const[user, setUser]=useState(null)

//  TO edit user details get data from api
 const getUser=()=>{
   fetch("https://618fa736f6bf4500174849a7.mockapi.io/user/" + id,{
     method:"GET"
   })
   .then((data)=>data.json())
   .then((ur)=>setUser(ur))
 }

// caller function of getUser
 useEffect(getUser)

// It shows the initial value once the user list is ready   
// useState is more appropriate with out give this line we got an ouput but we can't show the initial edit details 
return user? <EditUserForm user={user} /> : "";
}

function EditUserForm({user})
{
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
// To change our edited details to  the api

         fetch("https://618fa736f6bf4500174849a7.mockapi.io/user/" + user.id,{
method:"PUT",
body:JSON.stringify(updatedUser),
headers:{
  "Content-type":"application/json"
}
         }).then(()=>history.push("/user"))
        }}
        
        variant="outlined"
        color="success">Edit User</Button>
    </div>
  );
}
