import { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({movieList, setMovieList}) {
  const [name, setName] = useState(" ");
  const [poster, setPoster] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [year, setYear] = useState(" ");
  const [summary, setSummary] = useState(" ");
  const [trailer, setTrailer] = useState(" ");
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
        const newMovie = {
          name: name,
          poster: poster,
          rating: rating,
          year: year,
          summary: summary,
          trailer:trailer
        };
        fetch("https://618fa736f6bf4500174849a7.mockapi.io/movies", {
    method:"POST",
    body:JSON.stringify(newMovie),
    headers:{
      "Content-type":"application/json"
    }
  }).then(()=>history.push("/movies"));
}}
      variant="outlined">Add Movie</Button>
  </div>
  )
}