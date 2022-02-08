// formik for form validation
import {  useFormik } from "formik";

// yup is used for validate condition
import * as yup from "yup";

import React, { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
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

export function EditUser() {

  // useParams is used to get index value for particular user
  const { id } = useParams();
 const[user, setUser]=useState(null)

//  TO edit user details get data from api
 const getUser=()=>{
   fetch("https://618fa736f6bf4500174849a7.mockapi.io/user/" + id,{
     method:"GET"
   })
   .then((data)=>data.json())
   .then((ur)=>setUser(ur))
 }

// caller function of getUser
 useEffect(getUser)

// It shows the initial value once the user list is ready   
// useState is more appropriate with out give this line we got an ouput but we can't show the initial edit details 
return user? <EditUserForm user={user} /> : "";
}

function EditUserForm({user})
{
  
// Bulit in functions in Formik
const {handleSubmit,values,handleChange,handleBlur,errors,touched}=
useFormik({
  // assign initial values for add data
    initialValues:user,
    validationSchema:formValidationSchema,
    onSubmit:(values)=>{
        console.log("onSubmit", values);
    }
})

  const history = useHistory();

  return (
    <div className="editUser">
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

      <Button
        onClick={() => {
          const updatedUser = {
            name: values.name,
            pic: values.pic
          };

// To change our edited details to  the api
fetch("https://618fa736f6bf4500174849a7.mockapi.io/user/" + user.id,{
method:"PUT",
body:JSON.stringify(updatedUser),
headers:{
  "Content-type":"application/json"
}
         }).then(()=>history.push("/user"))
        }}

        variant="outlined"
        color="success">Edit User</Button>
        </form>
    </div>
  );
}

// To edit details there is two step 

// 1.Get data from particular id
// method:"GET"
// })
// .then((data)=>data.json())
// .then((ur)=>setUser(ur))

// 2.Edit the data
// method:"PUT",
// body:JSON.stringify(updatedUser),
// headers:{
//   "Content-type":"application/json"
// }

