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
  const history = useHistory();

  return (

    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-success">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#demo-navbar"
          aria-controls="demo-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="demo-navbar">

            <a class="nav-link text-light" onClick={() => history.push("/blog/home")}>Home <span class="sr-only">(current)</span></a>

            <a class="nav-link text-light" onClick={() => history.push("/blog/signup")}>SIGN UP</a>

            <a class="nav-link text-light" onClick={() => history.push("/blog/signin")}>SIGN IN</a>


            <a class="nav-link text-light" onClick={() => history.push("/")}>LOGOUT</a>
    

          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  id="serchBar"/>
          </form>
          <button class="btn btn-outline-warning my-2 my-sm-0" type="submit" id="buttonWork">Search</button>
        </div>
      </nav>

      <section class="header">
    <h1>Let's BLOG</h1>
    <p>Enjoy writing your blogs here..</p>
    {/* <a class="btn-bgstroke">Call To Action</a> */}
</section>

      <Switch>
        <Route path="/blog/edit/:id">
          <h1>Edit Blog</h1>
          <EditBlog />
        </Route>

        <Route path="/blog/signup">
          <Register />
        </Route>

        <Route path="/blog/signin">
          <Login />
        </Route>





        <Route path="/blog/home">
          <Home />
        </Route>
      </Switch>



      <section class="footer">
      <div class="social">
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-snapchat"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-facebook-f"></i></a>
      </div>

      <ul class="list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <p class="copyright"><b>@RelevanceLab Pvt.Ltd</b></p>
    </section>
    </div>



  );
}





