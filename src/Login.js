import React from "react";
import { useHistory } from "react-router-dom";
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
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
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
          onClick={() => history.push("/shopMe/products")}
        >
          Login
        </Button>

      </form>
    </div>

  );
}
