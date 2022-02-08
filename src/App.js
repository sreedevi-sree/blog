import React from "react";

import "./index.css";

// matching the url and display the rigth conent
import { Switch, Route,useHistory  } from "react-router-dom";

// to use material ui product appbar toolbar TextField Icon and Delete Button 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { AddUser } from "./AddUser";
import { EditUser } from "./EditUser";
import { Home } from "./Home";
import { UserList } from "./UserList";

export default function App() {  
  const history=useHistory();
return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>

          {/* to redirect to the url */}
          <Button color="inherit" onClick={()=>history.push("/")}>Home</Button>
          <Button color="inherit"onClick={()=>history.push("/user")}>user List</Button>
          <Button color="inherit"onClick={()=>history.push("/user/addUsers")}>Add User</Button>

        </Toolbar>
      </AppBar>

{/* switch is used to match the url and route path is redirect it */}
      <Switch>

      <Route path="/user/addUsers">
        <h1>Add User to User List</h1>
        <AddUser  />
        </Route>

      <Route path="/user/edit/:id">
          <h1>Edit Users</h1>
        <EditUser />
        </Route>

      <Route path="/user">
        <UserList  />
        </Route>
 
      <Route exact path="/">
          <Home />  
        </Route> 

      </Switch>    
      
   </div>
  );
}


