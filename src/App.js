import React from "react";

import "./index.css";

// matching the url and display the rigth conent
import { Switch, Route,useHistory  } from "react-router-dom";

// we want import useState for to inform something change in code
import { useState  } from "react";

// useparams is used to get the value from url

// to use material ui product appbar toolbar TextField Icon and Delete Button 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { AddUser } from "./AddUser";
import { EditUser } from "./EditUser";
import { Home } from "./Home";
import { UserList } from "./UserList";

export default function App() {
  // inital setup
  const InitilaUser = [
    {
      name: "Sree Devi",
      pic:
        "data:image/jpeg;base64,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"
    },
    {
      name: "Bala Krishnan",
      pic: "https://wallpaperaccess.com/full/2213424.jpg"
    },
    {
      name: "Raksha",
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnELq88FqJJ3fRj93adsIGYvhO-TiVlgimVQ&usqp=CAU"
    },
    {
      name: "Bavi",
      pic:
        "http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/07/Beautiful-Profile-Images-4.jpg"
    }
  ]
  
  // initial setup 
  const [userList, setUserList] = useState(InitilaUser);
  const history=useHistory();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>

          {/* to redirect to the url */}
          <Button color="inherit" onClick={()=>history.push("/")}>Home</Button>
          <Button color="inherit"onClick={()=>history.push("/users")}>user List</Button>
          <Button color="inherit"onClick={()=>history.push("/users/addUsers")}>Add User</Button>

        </Toolbar>
      </AppBar>

{/* route path and history are mathes then only its working */}
      <Switch>

      <Route path="/users/addUsers">
        <h1>Add User to User List</h1>
        <AddUser userList ={userList} setUserList={setUserList} />
        </Route>

      <Route path="/users/edit/:id">
          <h1>Edit Users</h1>
        <EditUser userList ={userList} setUserList={setUserList} />
        </Route>

      <Route path="/users">
        <UserList userList ={userList} setUserList={setUserList} />
        </Route>
 
      <Route exact path="/">
          <Home />  
        </Route> 
      </Switch>    
   </div>
  );
}


