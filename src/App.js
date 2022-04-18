import React from "react";


import "./index.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Switch, Route, useHistory } from "react-router-dom";
import { Home } from "./Home";
import { Register } from "./Register";
import { Login } from "./Login";
import { EditBlog } from "./EditBlog";


export default function App() {
  // use history is used to change the url on button click
  const history=useHistory();

  return (
       <div className="App">
      <AppBar position="static">
        <Toolbar>          
      <Button color="inherit" onClick={()=>history.push("/blog/home")}>Home</Button>
      <Button color="inherit"   
      style={{marginLeft:"auto"}}
      onClick={()=>history.push("/blog/signup")}>Sign UP</Button>
      <Button color="inherit" onClick={()=>history.push("/blog/signin")}>Sign In</Button>
      <Button color="inherit" onClick={()=>history.push("/")}>Logout</Button>
      </Toolbar>
      </AppBar>

     <Switch>
     <Route path="/blog/edit/:id">
          <h1>Edit Blog</h1>
        <EditBlog/>
        </Route>  

        <Route path="/blog/signup">           
        <Register/>    
        </Route>

      <Route path="/blog/signin">           
        <Login/>    
        </Route>        

        <Route path="/blog/home">           
        <Home/>    
        </Route>

    </Switch>      
      </div>
     );
     }

   



     
