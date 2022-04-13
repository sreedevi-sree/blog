import React from "react";

// Click on button to change url
import { useHistory } from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// textfield with icons
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import IconButton from '@mui/material/IconButton';

// for show and hide password
import FilledInput from '@mui/material/FilledInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// formik for form validation
import { useFormik } from "formik";

// yup is used for validate condition
import * as yup from "yup";

// formValidationSchema is a library in formik 
export const formValidationSchema=yup.object({
    username:yup
    .string()
    .required(),
    
    password:yup
    .string()
    .required()
    .min(8),
  
    name:yup
    .string()
    .required(),
    
    mobilenumber:yup
    .string()
    .required()
    .min(8),
  
     email:yup
      .string()
      .min(5)
      .required()
      .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          "please enter correct email format"
          ),
  
  })
export function Register() {
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: { username:"", password:"",name: "", mobilenumber: "",email:"" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    }
  });
  // to change url
  const history = useHistory();

// For show and hide password
  const [show, setShow] = React.useState({
    password:" ",
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

  return (
    <div className="register">

      <form onSubmit={handleSubmit}>

        Name:
        <TextField    
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="name"
          variant="filled"
          placeholder="Name"
          label="Name"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>     
            ),}}/>
        {errors.name && touched.name ? errors.name : ""}
        <br />

        Mobilenumber:
        <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>),}}
          id="mobilenumber"
          name="mobilenumber"
          value={values.mobilenumber}
          onChange={handleChange}
          onBlur={handleBlur}
          type="mobilenumber"
          placeholder="Mobilenumber"
          label="mobilenumber"
          variant="filled" />
        {errors.mobilenumber && touched.mobilenumber ? errors.mobilenumber : ""}
        <br />

        Email:
        <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          ),}}
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          placeholder="Email" 
          label="Email"
          variant="filled"/>
        {errors.email && touched.email ? errors.email : ""}
        <br />

        User Name:
        <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>),}}
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          type="username"
          placeholder="Username" 
          label="username"
          variant="filled"/>
        {errors.username && touched.username ? errors.username : ""}
        <br />

       Password:
          <FilledInput
          id="password"
          name="password"
          // value={values.password}
          onChange={handleChanged('password')}
          onBlur={handleBlur}
          type={show.showPassword ? 'text' : 'password'}
         
          placeholder="password" 
          label="password"
          variant="filled"
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
     {errors.password && touched.password ? errors.password : ""}
        <br />
        <Button
onClick={() => {
   values.password = show.password;

  const newUser = {
    name: values.name,
    mobilnumber: values.mobilenumber,
    email: values.email,
    password: values.password
  };
  fetch("https://618fa736f6bf4500174849a7.mockapi.io/register/",{
    method:"POST",
    body:JSON.stringify(newUser),
    headers:{
      "Content-type":"application/json"
    }
      }).then(()=>history.push("/blog/signin"))
        }}
variant="outlined">signup</Button>
      </form>
    </div>
  );
}



