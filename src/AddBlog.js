// formik for form validation
import {  useFormik } from "formik";

// yup is used for validate condition
import * as yup from "yup";

import React from "react";
import { useHistory } from "react-router-dom";
// import { useState } from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const formValidationSchema = yup.object({
  title:yup
  .string()
  .min(4)
  .required(),
  
  description:yup
  .string()
  .min(4)
  .required(),
  
  picture:yup
  .string()
  .min(4)
  .required(),
  
  text:yup
  .string()
  .min(4)
  .required(),

});

export function AddBlog() {
 
  
  // Bulit in functions in Formik
  const {handleSubmit,values,handleChange,handleBlur,errors,touched}=
    useFormik({
      // assign initial values for add data
        initialValues:{title:"",description:"",picture:"",text:""},
        validationSchema:formValidationSchema,
        onSubmit:(values)=>{
            console.log("onSubmit", values);
        }
    })
  const history = useHistory();

  return (
    <div>
      <div className="new-Blog-list">

        <TextField
            // based on id and name only formik know what is change.
          id="title"
          name="title"
          value={values.title}
          // handle the change value
          onChange={handleChange}
          // setting touch varible
          onBlur={handleBlur}
          type="title"
          placeholder="Title"
          label="Title" 
          variant="outlined"  />
{errors.title && touched.title ? errors.title : ""}

        <TextField
         id="description"
         name="description"
         value={values.description}
         // handle the change value
         onChange={handleChange}
         // setting touch varible
         onBlur={handleBlur}
         type="description"
         placeholder="Description"
         label="description" 
         variant="outlined"  />
{errors.description && touched.description ? errors.description : ""}

        <TextField
          id="picture"
          name="picture"
          value={values.picture} 
          // handle the change value
          onChange={handleChange}
           // setting touch varible
          onBlur={handleBlur}
          type="picture"
          placeholder="Picture"
          label="picture" 
          variant="outlined"  />
 {errors.picture && touched.picture ? errors.picture : ""}
 
        <TextField
          id="text"
          name="text"
          value={values.text} 
          // handle the change value
          onChange={handleChange}
           // setting touch varible
          onBlur={handleBlur}
          type="text"
          placeholder="Text"
          label="text" 
          variant="outlined"  />
 {errors.text && touched.text ? errors.text : ""}
 
      </div>
      <Button
        onClick={() => {
          const newBlog = {
            title: values.title,
            description: values.description,
            picture: values.picture,
            text: values.text
          };
 if(errors.title || errors.description || errors.picture || errors.text)
return
          fetch("https://618fa736f6bf4500174849a7.mockapi.io/blog/",{
            method:"POST",
            body:JSON.stringify(newBlog),
            headers:{
              "Content-type":"application/json"
            }
              }).then(()=>history.push("/blog/home"))
                }}
        variant="outlined">Add Blog</Button>

    </div>
  );
}
