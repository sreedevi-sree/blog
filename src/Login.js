import React from "react";
import { useHistory } from "react-router-dom";
import { useState,useEffect } from "react";

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
      fetch("https://618fa736f6bf4500174849a7.mockapi.io/register/",{
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
    <div class="wrapper">
    <form action="" method="post" name="Login_Form" class="form-signin">
        <h3 class="form-signin-heading">Welcome Back! Please Sign In</h3>
        <hr style={{height:"20px"}} className="colorgraph"/> <br/>

    <input type="text" class="form-control" placeholder="Username" required="" autofocus=""

        id="username"
        name="username"
        value={values.username}
        onChange={handleChange}
        // TO check user leaves the form field
        onBlur={handleBlur} />
    {errors.username && touched.username ? errors.username : ""}
    <br />

    <input type="password" class="form-control" placeholder="Password" required=""

        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur} 
        />

    <button class="btn btn-lg btn-primary btn-block" value="Login" type="Submit"
        variant="contained"
        onClick={() => history.push("/blog/home")}>Signin</button>
</form>
</div >


  );
}
