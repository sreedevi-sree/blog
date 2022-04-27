import * as yup from 'yup';

import React, { useEffect, useState } from 'react';

import { StatusCodes } from 'http-status-codes';
import axios from 'axios';
import config from './config';
// yup is used for validate condition
// formik for form validation
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

export const formValidationSchema = yup.object({
  username: yup.string().required(),

  password: yup.string().required().min(8),
});

export function Login(props) {
  // For initial setup
  const [users, setUSers] = useState([]);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Get signup data from server
  const getUsers = () => {
    fetch('https://618fa736f6bf4500174849a7.mockapi.io/register/', {
      method: 'GET',
    })
      .then((data) => data.json())
      .then((usr) => setUSers(usr));
  };

  // This is a caller function of the get user data
  useEffect(getUsers, []);

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: { username: '', password: '' },
      validationSchema: formValidationSchema,
      onSubmit: (users) => {
        console.log('onSubmit', values);
      },
    });
  const history = useHistory();

  // SignIn Handler
  const signInHandler = async (event) => {
    event.preventDefault();
    const payload = {
      userName: userName,
      password: password,
    };
    try {
      const responseReceived = await axios.post(
        config.BACKEND_URL_USERS.concat('login'),
        payload
      );

      if (responseReceived.status === StatusCodes.OK) {
        console.log(responseReceived.data);
        // Stored in local storage
        localStorage.setItem('users', JSON.stringify(responseReceived.data));

        props.loginHandler();
        history.push('/blog/home');
      } else {
        throw new Error('Network Error');
      }
    } catch (error) {
      alert(error.message);
      return;
    }
  };
  return (
    <div class="wrapper">
      <form action="" method="post" name="Login_Form" class="form-signin">
        <h3 class="form-signin-heading">Welcome Back! Please Sign In</h3>
        <hr style={{ height: '20px' }} className="colorgraph" /> <br />
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          required={true}
          autofocus={true}
          id="username"
          name="username"
          onChange={handleUserNameChange}
          // TO check user leaves the form field
          onBlur={handleBlur}
        />
        {errors.username && touched.username ? errors.username : ''}
        <br />
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          required={true}
          id="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handleBlur}
        />
        {/* () => history.push('/blog/home') */}
        <button
          class="btn btn-lg btn-primary btn-block"
          value="Login"
          type="Submit"
          variant="contained"
          onClick={signInHandler}
        >
          Signin
        </button>
      </form>
    </div>
  );
}