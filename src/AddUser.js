// formik for form validation
import {  useFormik } from "formik";

// yup is used for validate condition
import * as yup from "yup";

import React from "react";
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';


const formValidationSchema = yup.object({
  name:yup
  .string()
  .min(4)
  .required(),
  
  pic:yup
  .string()
  .min(4)
  .required(),

});

export function AddUser() {

// Bulit in functions in Formik
  const {handleSubmit,values,handleChange,handleBlur,errors,touched}=
    useFormik({
      // assign initial values for add data
        initialValues:{name:"",pic:""},
        validationSchema:formValidationSchema,
        onSubmit:(values)=>{
            console.log("onSubmit", values);
        }
    })

  const history = useHistory();
  return (
    <div className="new-Userlist">
      <form onSubmit={handleSubmit}>

      <TextField

      // based on id and name only formik know what is change.
    id="name"
    name="name"
    value={values.name}

// handle the change value
    onChange={handleChange}

// setting touch varible
    onBlur={handleBlur}
    type="name"
    placeholder="name"
    label="Name"
     variant="outlined"
      />
{errors.name && touched.name ? errors.name : ""}

      <TextField
    id="pic"
    name="pic"
    value={values.pic}
    onChange={handleChange}
    onBlur={handleBlur}
    type="pic"
    placeholder="pic"
    label="pic"
     variant="outlined"
      />
{errors.pic && touched.pic ? errors.pic : ""}

      <button
        onClick={() => {
          const newUser = {
            name: values.name,
            pic: values.pic
          };

          //  add user details to api and For add data know these three steps:
          fetch("https://618fa736f6bf4500174849a7.mockapi.io/user/",{
            method:"POST",
            body:JSON.stringify(newUser),
            headers:{
              "Content-type":"application/json"
            }

              }).then(()=>history.push("/user"))
                }}
      type="submit">
        Add User
      </button>
      </form>
    </div>
  );
}

// For add data know these three steps:           
//             method:"POST",
//             body:JSON.stringify(newUser),
//             headers:{
//               "Content-type":"application/json"
//             }