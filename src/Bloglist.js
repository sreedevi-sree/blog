import { useEffect, useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { StatusCodes } from 'http-status-codes';
import axios from 'axios';
import config from './config';
import { useHistory } from 'react-router-dom';

export function Bloglist() {
  // For initial setup
  const [blog, setBlog] = useState([]);
  const [search, setSearch] = useState('');

  const onSearchTextChangeHandler = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const onSearch = async (events) => {
    events.preventDefault();
    const user = JSON.parse(localStorage.getItem('users'));
    try {
      //https://blog-authoring-tool.herokuapp.com/api/posts/searchBlog/15/search?searchText=F
      const responseReceived = await axios.get(
        config.BACKEND_URL_POSTS.concat('searchBlog/')
          .concat(Number(user.user.id))
          .concat('/search?searchText=')
          .concat(search),
        {
          headers: {
            Authorization: `Bearer ${user.jwttoken.token}`,
          },
        }
      );

      if (responseReceived.status === StatusCodes.OK) {
        let nBlogs = [...responseReceived.data];
        setBlog(nBlogs);
      } else {
        throw new Error('Network Error');
      }
    } catch (error) {
      alert('something went wrong while fetching blogs');
    }
  };

  // Get bloglist from server
  const getBlogs = async () => {
    const user = JSON.parse(localStorage.getItem('users'));
    try {
      const responseReceived = await axios.get(
        config.BACKEND_URL_POSTS.concat('getAllBlogs/').concat(
          Number(user.user.id)
        ),
        {
          headers: {
            Authorization: `Bearer ${user.jwttoken.token}`,
          },
        }
      );

      if (responseReceived.status === StatusCodes.OK) {
        let nBlogs = [...responseReceived.data];
        setBlog(nBlogs);
        console.log(blog);
      } else {
        throw new Error('Network Error');
      }
    } catch (error) {
      alert('something went wrong while fetching blogs');
    }
  };

  // This is a caller function of the getblogs
  useEffect(() => {
    getBlogs();
  }, []);

  // To delete the blog from bloglist
  const deleteBlog = async (blogData) => {
    console.log(blogData);
    try {
      const user = JSON.parse(localStorage.getItem('users'));
      console.log(user.jwttoken.token);
      const responseReceived = await axios.delete(
        config.BACKEND_URL_POSTS.concat(`deleteBlog/${blogData.userId}`),
        {
          data: blogData,
          headers: {
            Authorization: `Bearer ${user.jwttoken.token}`,
          },
        }
      );
      if (responseReceived.status !== StatusCodes.OK) {
        throw new Error('Network Error');
      }
      alert('Post deleted Successfully');
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  };

  // To change url
  const history = useHistory();
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter blog title to search"
          onChange={onSearchTextChangeHandler}
        />
        <button onClick={onSearch}>search</button>
      </div>

      <section className="bloglist">
        {blog.length === 0 && <h1>No Blogs To Display</h1>}
        {blog.length !== 0 &&
          blog.map((blog, index) => (
            // To disply blog in blog app to fetch data from initial setup
            <Blog
              key={index}
              title={blog.title}
              description={blog.description}
              picture={'https://blogangle.com/wp-content/uploads/2022/03/Superfollower-Apk.jpg'}
              text={blog.text}
              id={index}
              // Delete the blog from server
              deleteButton={
                <IconButton
                  style={{ marginLeft: 'auto' }}
                  onClick={() => deleteBlog(blog)}
                  aria-label="delete"
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              }
              // Edit the blog from server
              editButton={
                <IconButton
                  onClick={() => history.push('/blog/edit/' + blog.id)}
                  aria-label="delete"
                  color="secondary"
                >
                  <EditIcon />
                </IconButton>
              }
            />
          ))}
      </section>
    </div>
  );
}
function Blog({ title, description, picture, text, deleteButton, editButton }) {
  return (
    <div className="new-blog">
      <h1 className="blog-name">{title}</h1>
      <p className="blog-description">{description}</p>
      <img className="blog-poster" src={picture} alt="Pics" />
      <p className="blog-text">{text}</p>
      {deleteButton}
      {editButton}
    </div>
  );
}