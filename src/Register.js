import * as yup from 'yup';

import React, { useState } from 'react';

// yup is used for validate condition
// textfield with icons
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import { StatusCodes } from 'http-status-codes';
// for show and hide password
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import config from './config';
// formik for form validation
import { useFormik } from 'formik';
// Click on button to change url
import { useHistory } from 'react-router-dom';

// formValidationSchema is a library in formik
export const formValidationSchema = yup.object({
  username: yup.string().required(),

  password: yup.string().required().min(8),

  name: yup.string().required(),

  mobilenumber: yup.string().required().min(8),

  email: yup
    .string()
    .min(5)
    .required()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      'please enter correct email format'
    ),
});
export function Register() {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        username: '',
        password: '',
        name: '',
        mobilenumber: '',
        email: '',
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log('onSubmit', values);
      },
    });
  // to change url
  const history = useHistory();

  // For show and hide password
  const [show, setShow] = React.useState({
    password: ' ',
    showPassword: false,
  });

  const handleChanged = (prop) => (event) => {
    setShow({ ...show, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShow({
      ...show,
      showPassword: !show.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // if(errors.name || errors.mobilenumber || errors.username || errors.email || errors.password)

  const [userPayload, setUserPayload] = useState({});

  const onInputChangeHandler = (event) => {
    setUserPayload((currentPayload) => ({
      ...currentPayload,
      [event.target.name]: event.target.value,
    }));
  };

  const signUpHandler = async (event) => {
    event.preventDefault();
    try {
      let flag = true;
      for (let key in userPayload) {
        if (
          !['name', 'username', 'password', 'email', 'mobilenumber'].includes(
            key
          )
        ) {
          flag = false;
          break;
        }
      }

      if (!flag || Object.keys(userPayload).length === 0)
        throw new Error('Please fill all the values');

      const nPayload = {
        userName: userPayload.username,
        password: userPayload.password,
        email: userPayload.email,
        mobileNumber: userPayload.mobilenumber,
      };

      const responseReceived = await axios.post(
        config.BACKEND_URL_USERS.concat('signup'),
        nPayload
      );

      if (responseReceived.status !== StatusCodes.OK) {
        throw new Error('Network Error');
      }

      alert('User SignUp Successful, Please Login');
      history.push('/signin');
    } catch (error) {
      alert(error.message);
      return;
    }
  };

  return (
    <div id="main-registration-container">
      <div id="register">
        <h3 style={{ textAlign: 'center' }}>Registration page</h3>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            id="name"
            name="name"
            onBlur={handleBlur}
            type="name"
            variant="filled"
            placeholder="Name"
            label="Name"
            required={true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            onChange={onInputChangeHandler}
          />

          <br />

          <label>Email ID:</label>
          <input
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <MailIcon />
                </InputAdornment>
              ),
            }}
            id="email"
            name="email"
            required={true}
            onChange={onInputChangeHandler}
            onBlur={handleBlur}
            type="email"
            placeholder="Email"
            label="Email"
            variant="filled"
          />

          <br />

          <label>Mobile No:</label>
          <input
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon />
                </InputAdornment>
              ),
            }}
            id="mobilenumber"
            name="mobilenumber"
            required={true}
            onChange={onInputChangeHandler}
            onBlur={handleBlur}
            type="mobilenumber"
            placeholder="Mobilenumber"
            label="mobilenumber"
            variant="filled"
          />

          <br />

          <label>User Name</label>
          <input
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            id="username"
            name="username"
            onChange={onInputChangeHandler}
            onBlur={handleBlur}
            type="username"
            required={true}
            placeholder="Username"
            label="username"
            variant="filled"
          />

          <br />

          <label>Password</label>
          <input
            id="password"
            name="password"
            onChange={onInputChangeHandler}
            onBlur={handleBlur}
            type={show.showPassword ? 'text' : 'password'}
            placeholder="password"
            label="password"
            variant="filled"
            required={true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />

          <br />

          <button
            type="submit"
            className="button"
            onClick={signUpHandler}
            variant="outlined"
          >
            SIGNUP
          </button>
        </form>
      </div>
    </div>
  );
}