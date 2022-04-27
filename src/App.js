import './index.css';

import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { EditBlog } from './EditBlog';
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';
import Toolbar from '@mui/material/Toolbar';

export default function App() {
  const history = useHistory();
  const [isUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('users'));
    if (user && user.user) {
      setIsUserLogged(true);
    }
  }, []);

  const loginHandler = () => {
    setIsUserLogged(true);
  };

  const logoutHandler = (event) => {
    // Delete user saved in localStorage
    localStorage.removeItem('users');
    setIsUserLogged(false);
    history.push('/');
  };

  return (
    <div className="App">
      <AppBar color="success" position="static">
        <Toolbar>
          {isUserLogged && (
            <Button color="inherit" onClick={() => history.push('/blog/home')}>
              Home
            </Button>
          )}
          {!isUserLogged && (
            <Button
              color="inherit"
              onClick={() => history.push('/blog/signup')}
            >
              SIGN UP
            </Button>
          )}

          {!isUserLogged && (
            <Button
              color="inherit"
              onClick={() => history.push('/blog/signin')}
            >
              SIGN IN
            </Button>
          )}
          {
            <Button color="inherit" onClick={logoutHandler}>
              LOGOUT
            </Button>
          }
        </Toolbar>
      </AppBar>

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
          {' '}
          <Register />
        </Route>

        <Route path="/blog/signin">
          <Login loginHandler={loginHandler} />
        </Route>

        <Route path="/blog/home">
          <Home />
        </Route>
      </Switch>

      <section class="footer">
        <div class="social">
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-snapchat"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
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
        <p class="copyright">
          <b>@RelevanceLab Pvt.Ltd</b>
        </p>
      </section>
    </div>
  );
}