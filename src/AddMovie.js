
// formik for form validation
import { useFormik } from "formik";

// yup is used for validate condition
import * as yup from "yup";

// import { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const formValidationSchema = yup.object({
  name:yup
  .string()
  .required(),
  
  poster:yup
  .string()
  .min(4)
  .required(),

  rating:yup
  .number()
  .required(),

  year:yup
  .string()
  .max(4)
  .required(),

  summary:yup
  .string()
  .min(20,"type min 20 chars")
  .required(),

  trailer:yup
  .string()
  .min(4)
  .required(),
});
export function AddMovie() {
  const {handleSubmit,values,handleChange,handleBlur,errors,touched}=
    useFormik({
        initialValues:{name:"",poster:"",rating:"",year:"",summary:"",trailer:""},
        validationSchema:formValidationSchema,
        onSubmit:(values)=>{
            console.log("onSubmit", values);
        }
    })
  
const history=useHistory();
  return (
    <div className="MovieArray">
      <form onSubmit={handleSubmit}>
      <TextField
    id="name"
    name="name"
    value={values.email}
    onChange={handleChange}
    onBlur={handleBlur}
    type="name"
    placeholder="name"
    label="Name"
     variant="outlined"
      />
{errors.name && touched.name ? errors.name : ""}

    <TextField
      id="poster"
      name="poster"
      value={values.poster}
      onChange={handleChange}
      onBlur={handleBlur}
      type="poster"
      placeholder="poster"
      label="Poster" variant="outlined" />
{errors.poster && touched.poster ? errors.poster : ""}

    <TextField
      id="rating"
      name="rating"
      value={values.rating}
      onChange={handleChange}
      onBlur={handleBlur}
      type="rating"
      placeholder="rating"
      label="Rating" variant="outlined" />
{errors.rating && touched.rating ? errors.rating : ""}

    <TextField
     id="year"
     name="year"
     value={values.year}
     onChange={handleChange}
     onBlur={handleBlur}
     type="year"
     placeholder="year"
     label="Year" variant="outlined" />
{errors.year && touched.year ? errors.year : ""}

    <TextField
      id="summary"
      name="summary"
      value={values.summary}
      onChange={handleChange}
      onBlur={handleBlur}
      type="summary"
      placeholder="summary"
      label="Summary" variant="outlined" />
{errors.summary && touched.summary ? errors.summary : ""}

      <TextField
        id="trailer"
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        type="trailer"
        placeholder="trailer"
       label="trailer" variant="outlined" />
        {errors.trailer && touched.trailer ? errors.trailer : ""}
    <Button
   
      onClick={() => {
        const newMovie = {
          name: values.name,
          poster:values.poster,
          rating: values.rating,
          year: values.year,
          summary:values.summary,
          trailer:values.trailer
        };
        fetch("https://618fa736f6bf4500174849a7.mockapi.io/movies", {
    method:"POST",
    body:JSON.stringify(newMovie),
    headers:{
      "Content-type":"application/json"
    }
  }).then(()=>history.push("/movies"));
}}
type="submit"
      variant="outlined">Add Movie</Button>
      </form>
    
  </div>
  )
}

