import { useState } from "react";
import { useParams } from "react-router-dom";
import { MovieList } from "./MovieList";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function EditMovie({ movieList, setMovieList }) {
  const [name, setName] = useState(" ");
  const [poster, setPoster] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [year, setYear] = useState(" ");
  const [summary, setSummary] = useState(" ");
  const { id } = useParams();
  const movie = movieList[id];

  return (
    <div className="MovieArray">
        <MovieList movieList={movieList} setMovieList={setMovieList} />
      <TextField
        value={movie.name}
        onChange={(event) => setName(event.target.value)}
        id="outlined-basic" label="Name" variant="outlined" />

      <TextField
        value={movie.poster}
        onChange={(event) => setPoster(event.target.value)}
        id="outlined-basic" label="Poster" variant="outlined" />

      <TextField
        value={movie.rating}
        onChange={(event) => setRating(event.target.value)}
        id="outlined-basic" label="Rating" variant="outlined" />

      <TextField
        value={movie.year}
        onChange={(event) => setYear(event.target.value)}
        id="outlined-basic" label="Year" variant="outlined" />

      <TextField
        value={movie.summary}
        onChange={(event) => setSummary(event.target.value)}
        id="outlined-basic" label="Summary" variant="outlined" />
      <Button
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            year: year,
            summary: summary,
          };
          setMovieList([...movieList, newMovie]);
        }}
        variant="outlined">Edit Movie</Button>
    </div>
  );
}
