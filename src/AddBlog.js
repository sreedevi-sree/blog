import * as yup from 'yup';

import React, { useState } from 'react';

// yup is used for validate condition
// formik for form validation
// import { useState } from "react";
import Button from '@mui/material/Button';
import { StatusCodes } from 'http-status-codes';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import config from './config';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

const formValidationSchema = yup.object({
  title: yup.string().min(4).required(),

  description: yup.string().min(4).required(),

  picture: yup.string().min(4).required(),

  text: yup.string().min(4).required(),
});

export function AddBlog() {
  // Bulit in functions in Formik
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      // assign initial values for add data
      initialValues: { title: '', description: '', picture: '', text: '' },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log('onSubmit', values);
      },
    });
  const history = useHistory();

  const [blogPayload, setBlogPayload] = useState({});

  const onChangeHandler = (event) => {
    setBlogPayload((currentPayload) => ({
      ...currentPayload,
      [event.target.name]: event.target.value,
    }));
  };

  const addBlogAction = async (event) => {
    event.preventDefault();
    try {
      if (Object.keys(blogPayload).length === 0) {
        throw new Error('Please fill all values');
      }
      const user = JSON.parse(localStorage.getItem('users'));
      console.log(blogPayload);
      const nPayload = {
        userId: user.user.id,
        content: blogPayload.description,
        picture:blogPayload.picture,
        title: blogPayload.title,
      };

      const responseReceived = await axios.post(
        config.BACKEND_URL_POSTS.concat('createblog'),
        nPayload,
        {
          headers: {
            Authorization: `Bearer ${user.jwttoken.token}`,
          },
        }
      );

      if (responseReceived.status !== StatusCodes.OK) {
        throw new Error('Network Error');
      }

      alert('Post Added Successfully');
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="new-Blog-list">
      <form onSubmit={handleSubmit}>
        <div className="addBlogDivision">
          <TextField
            // based on id and name only formik know what is change.
            id="title"
            name="title"
            // handle the change value
            onChange={onChangeHandler}
            // setting touch varible
            onBlur={handleBlur}
            type="title"
            placeholder="Title"
            label="Title"
            variant="outlined"
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="description"
            name="description"
            // handle the change value
            onChange={onChangeHandler}
            // setting touch varible
            onBlur={handleBlur}
            type="description"
            placeholder="Description"
            label="Description"
            variant="outlined"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="picture"
            name="picture"
            // handle the change value
            onChange={onChangeHandler}
            // setting touch varible
            onBlur={handleBlur}
            type="image"
            placeholder="Picture"
            label="Picture"
            variant="outlined"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="text"
            name="text"
            // handle the change value
            onChange={onChangeHandler}
            // setting touch varible
            onBlur={handleBlur}
            type="text"
            placeholder="Text"
            label="Text"
            variant="outlined"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>

        <div className="blogButton">
          <Button
            style={{ backgroundColor: '#63dee0' }}
            onClick={addBlogAction}
            variant="outlined"
          >
            Add Blog
          </Button>
        </div>
      </form>
    </div>
  );
}