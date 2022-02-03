import { Welcome } from "./Welcome";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
import { useEffect, useState} from "react";

export function MovieList() {
 
  const [movieList,setMovieList]=useState([])

 const getMovies= ()=>{
    fetch("https://618fa736f6bf4500174849a7.mockapi.io/movies", {
      method:"GET"
    })
      .then((data)=>data.json())
      .then ((mvs) =>setMovieList(mvs))
   };

   useEffect(getMovies,[])

  const deleteMovie=(id) => {
    fetch("https://618fa736f6bf4500174849a7.mockapi.io/movies/" +id, {
      method:"DELETE"
    })
    .then((data)=>data.json())
    .then (()=>getMovies());
  }

  const history=useHistory();
  return (
    <section className="movie-list">
    {movieList.map((movie, index) => (
      <Welcome
        key={index}
        name={movie.name}
        poster={movie.poster}
        rating={movie.rating}
        year={movie.year}
        summary={movie.summary}
        id={index} 
        deleteButton={
          <IconButton 
          style={{marginLeft:"auto"}}
          onClick={()=> deleteMovie(movie.id)}           
          aria-label="delete"
          color="error">
  <DeleteIcon />
</IconButton>
        }
        editButton={
          <IconButton
          onClick={()=> history.push("/movies/edit/"+ index)}                  
          aria-label="delete"
          color="secondary">
  <EditIcon />
</IconButton>
        }
        />  
              
    ))}
    
  </section>
  )
}
