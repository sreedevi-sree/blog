
import "./index.css";

import React from "react";


// matching the url and display the rigth conent
import { Switch, Route,useHistory  } from "react-router-dom";

// to use material ui product appbar toolbar TextField Icon and Delete Button 
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';



import { AboutUs } from "./AboutUs";
import { Login } from "./Login";
import { Home } from "./Home";
import { Contact } from "./Contact";
import { Mensfashion } from "./Mensfashion";
import { Girlsfashion } from "./Girlsfashion";
import { Toys } from "./Toys";
import { Mobiles } from "./Mobiles";
import { Kids } from "./Kids";



export default function App() {  
  // To click on the button the url change
  const history=useHistory();
return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>

          {/* to redirect to the url */}
          <Button color="inherit" onClick={()=>history.push("/")}>Home</Button>
          <Button color="inherit"onClick={()=>history.push("/shopMe/aboutUs")}>About Us </Button>
          <Button color="inherit"onClick={()=>history.push("/shopMe/products")}>products </Button>
          <Button color="inherit"onClick={()=>history.push("/shopMe/contactUs")}>Contact Us</Button>
          <Button   style={{marginLeft:"auto"}}  color="inherit"onClick={()=>history.push("/shopMe/login")}>Login </Button>
          <Button color="inherit"onClick={()=>history.push("/")}>Logout </Button>

        </Toolbar>
      </AppBar>

{/* switch is used to match the url and route path is redirect it */}
      <Switch>

      <Route path="/shopMe/aboutUs">
       <AboutUs/>    
        </Route>
              
        <Route path="/shopMe/products">
        <Products/>     
        </Route>

       <Route path="/shopMe/contactUs">
      <Contact />
        </Route>

        
       <Route path="/shopMe/login">
           
        <Login />    
        </Route>

       <Route exact path="/">
      <Home />
        </Route> 

      </Switch>    
      
   </div>
  );
}

function Products(){

  const history=useHistory();
  return (
    <div className="products">
              <h1>Our products</h1>  

         
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDdKm_6e4M2mK58d0qzYg_LY46_8wmznX0iw&usqp=CAU" alt="none"/>
          <Button color="inherit" onClick={()=>history.push("/shopMe/products/menfashion")}>Mens Fashion</Button>
          
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTTIYmHsR6UhpdUDChlIKlsgqnECr9nvuAg&usqp=CAU" alt="none"/>
          <Button color="inherit" onClick={()=>history.push("/shopMe/products/girlsfashion")}>Girls Fashion</Button>
          
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2GWyKT4KRjzYLpcz29ZKCananBk0TbG9v8Q&usqp=CAU" alt="none"/>
          <Button color="inherit" onClick={()=>history.push("/shopMe/products/kids")}>Kids</Button>
         
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmWUR-pMdNmO4L4a4JAWkv8ZNo6FCIgp0aDw&usqp=CAU" alt="none"/>
          <Button color="inherit" onClick={()=>history.push("/shopMe/products/toys")}>Toys</Button>
         
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT511fJ4_R6TEJH_N3o9o5ZszIYef-437aSDQ&usqp=CAU" alt="none"/>
          <Button color="inherit" onClick={()=>history.push("/shopMe/products/mobiles")}>Moblies</Button>
         
          
          <Switch>

          <Route exact path="/shopMe/products/menfashion">
           <Mensfashion/>
          </Route>

           <Route path="/shopMe/products/girlsfashion">
           <Girlsfashion/>
          </Route>

           <Route path="/shopMe/products/kids">
             <Kids/>
          </Route> 

          <Route path="/shopMe/products/toys">
            <Toys/>
          </Route> 

          <Route path="/shopMe/products/mobiles">
          <Mobiles />
          </Route>

          </Switch>
    </div>

  )
}

