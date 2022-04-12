import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function Bloglist() {
  
  // For initial setup
  const [blog, setBlog] = useState([]);

  // Get bloglist from server 
  const getBlogs=()=>{
    fetch("https://618fa736f6bf4500174849a7.mockapi.io/blog",{
      method:"GET"
    }).then((data)=>data.json())
    .then((blg)=>setBlog(blg))
  };

  // This is a caller function of the getblogs 
useEffect(getBlogs,[])

// To delete the blog from bloglist
const deleteBlog=(id)=>{
  fetch("https://618fa736f6bf4500174849a7.mockapi.io/blog/" + id,{
    method:"DELETE"
  }).then((data)=>data.json())
  .then(()=>getBlogs())
};

  // To change url
  const history=useHistory();
  return (
    <div>
      <section className="bloglist">
        {blog.map((blog,index) => (

// To disply blog in blog app to fetch data from initial setup
          <Blog
          key={index}
            title={blog.title}
            description={blog.description}
            picture={blog.picture}
            text={blog.text}
            id={index}

            // Delete the blog from server
            deleteButton={
                <IconButton 
                style={{marginLeft:"auto"}}
                onClick={()=> deleteBlog(blog.id)}
                aria-label="delete"
                color="error">
        <DeleteIcon />
      </IconButton>
              }

            // Edit the blog from server
              editButton={
                <IconButton
                onClick={()=> history.push("/blog/edit/"+ blog.id)}                  
                aria-label="delete"
                color="secondary">
        <EditIcon />
      </IconButton>
              }
            
            />
        ))}

      </section>
    </div>
  );
}
function Blog({ title, description, picture, text, deleteButton,editButton }) {
  return (
    <div className="new-blog">
      <h1 className="blog-name">{title}</h1>
      <p className="blog-description">{description}</p>
      <img className="blog-poster" src={picture} alt="There is no image file"></img>
      <p className="blog-text">{text}</p>
      {deleteButton}
      {editButton}
    </div>
  );
}
