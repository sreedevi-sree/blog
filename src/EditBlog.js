
import { useHistory } from "react-router-dom";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function EditBlog() {

    // useParams is used to get index value for particular blog
  const { id } = useParams();
  const[blog, setBlog]=useState(null)

 //  TO edit blog details get data from server
  const getBlog=()=>{
    fetch("https://618fa736f6bf4500174849a7.mockapi.io/blog/" + id,{
      method:"GET"
    })
    .then((data)=>data.json())
    .then((bg)=>setBlog(bg))
  }

  // caller function of getBlog
useEffect(getBlog)

// It shows the initial value once the blog list is ready   
// useState is more appropriate with out give this line we got an output but we can't show the initial edit details 
return blog? <EditBlogForm blog={blog} /> : "";
}

function EditBlogForm({blog})
{
  const [title, setTitle] = useState(blog.title);
  const [description, setDescription] = useState(blog.description);
  const [picture, setPicture] = useState(blog.picture);
  const [text, setText] = useState(blog.text);
  const history = useHistory();

  return (
    <div>
      <div className="EditBlog">
        <TextField
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          label="Title" variant="outlined"   />

        <TextField
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          label="Description" variant="outlined" />

        <TextField
          value={picture}
          onChange={(event) => setPicture(event.target.value)}
          label="Picture" variant="outlined"  />

        <TextField
          value={text}
          onChange={(event) => setText(event.target.value)}
          label="Text" variant="outlined"  />
      </div>
      <Button
        onClick={() => {
          const updatedBlog = {
            title: title,
            description: description,
            picture: picture,
            text: text
          };

       // To change our edited details to  the server
       fetch("https://618fa736f6bf4500174849a7.mockapi.io/blog/" + blog.id,{
        method:"PUT",
        body:JSON.stringify(updatedBlog),
        headers:{
          "Content-type":"application/json"
        }
                 }).then(()=>history.push("/blog/home"))
                }}
        variant="outlined"
        color="success">Edit Blog</Button>
    </div>
  );
}
