// import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory,useParams } from "react-router-dom";
import { useEffect, useState} from "react";

export function EditMovie() {
 
  const { id } = useParams();
  const [movie,setMovie] = useState(null);
  
 const getMovie= ()=>{
  fetch("https://618fa736f6bf4500174849a7.mockapi.io/movies/" + id, {
    method:"GET"
  })
    .then((data)=>data.json())
    .then ((mv) =>setMovie(mv))
 };

 useEffect(getMovie)
console.log(movie);

return movie ? <EditMovieForm movie={movie} /> : "";
}

function EditMovieForm({movie})
{
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [year, setYear] = useState(movie.year);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);  
const history=useHistory();
return (
  <div className="MovieArray">
    <TextField
      value={name}
      onChange={(event) => setName(event.target.value)}
      id="outlined-basic" label="Name" variant="outlined" />

    <TextField
      value={poster}
      onChange={(event) => setPoster(event.target.value)}
      id="outlined-basic" label="Poster" variant="outlined" />

    <TextField
      value={rating}
      onChange={(event) => setRating(event.target.value)}
      id="outlined-basic" label="Rating" variant="outlined" />

    <TextField
      value={year}
      onChange={(event) => setYear(event.target.value)}
      id="outlined-basic" label="Year" variant="outlined" />

    <TextField
      value={summary}
      onChange={(event) => setSummary(event.target.value)}
      id="outlined-basic" label="Summary" variant="outlined" />

      <TextField
      value={trailer}
      onChange={(event) => setTrailer(event.target.value)}
      id="outlined-basic" label="trailer" variant="outlined" />

    <Button
      onClick={() => {
        const updatedMovie = {
          name: name,
          poster: poster,
          rating: rating,
          year: year,
          summary: summary,
          trailer:trailer
        };
        

  fetch("https://618fa736f6bf4500174849a7.mockapi.io/movies/" + movie.id, {
    method:"PUT",
    body:JSON.stringify(updatedMovie),
    headers:{
      "Content-type":"application/json"
    }
  }).then(()=>history.push("/movies"));   
      }} 
      variant="outlined"
      color="success">Edit Movie</Button>
  </div>
);
}

  
 

