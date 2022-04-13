import React from "react";
import { useHistory } from "react-router-dom";
import { useState,useEffect } from "react";
import Button from '@mui/material/Button';

// formik for form validation
import { useFormik } from "formik";

// yup is used for validate condition
import * as yup from "yup";


export const formValidationSchema=yup.object({
    username:yup
    .string()
    .required(),
    
    password:yup
    .string()
    .required()
    .min(8),
  
    
  })

export function Login() {

    // For initial setup
    const [users, setUSers] = useState([]);

    // Get signup data from server 
    const getUsers=()=>{
      fetch("https://618fa736f6bf4500174849a7.mockapi.io/register",{
        method:"GET"
      }).then((data)=>data.json())
      .then((usr)=>setUSers(usr))
    };
  
    // This is a caller function of the get user data 
  useEffect(getUsers,[])
  
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (users) => {
      console.log("onSubmit", values);
    }
  });
  const history = useHistory();
  return (
    <div className="login">
      <h1>Login to the Website</h1>
      <form onSubmit={handleSubmit}>
        User Name:
        <input
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          // TO check user leaves the form field
          onBlur={handleBlur}
          type="username"
          placeholder="username" />
        {errors.username && touched.username ? errors.username : ""}
        <br />
        password:
        <input
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          placeholder="password" />

        {errors.password && touched.password ? errors.password : ""}
        <br />
        <Button
          variant="contained"
          type="submit"
          onClick={() => history.push("/blog/home")}
        >
          Signin
        </Button>

      </form>
    </div>

  );
}
