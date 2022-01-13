import {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


import "./index.css";
import { Welcome } from "./Welcome";
// import { style } from "@mui/system";
export default function App() {

  const Initialmovie = [
    {
      name: "Thuppaki",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZTc4YWY5MzAtOTc4Zi00NDVmLThlMGItYjliOGNkYmM3NDBmXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      rating: "9",
      year: "2012",
      summary:
"An army captain visits Mumbai to be with his family and find a suitable bride. However, an explosion in the city sets him off on a mission to find and disable a terrorist sleeper cell in the city."
    },
    {
      name: "Spiderman",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlKOtc-RTtE2ns8fMI990-RHrqGwncy_D0w&usqp=CAU",
      rating: "7.13",
      year: "2002",
      summary:
"Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac"
    },
    {
      name: "Red notice",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwYfCCXZcMjUGSM88PBwYhTvWEc_kjUu_Gw&usqp=CAU",
      rating: " 6.4",
      year: "2021",
      summary:
"In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief."
    },
    {
      name: "Hera pheri",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeH5wJvCZbY6_lOec9vAmUNAQkBauGNViwA&usqp=CAU",
      rating: "8.2",
      year: "2000",
      summary:
"Two tenants and a landlord, in desperate need of money, chance upon a ransom call via a cross connection. They hatch a plan to claim the ransom for themselves"
    },
    {
      name: "M S Dhoni",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ334LoTpdtqtYk17XPQjRcBim8qRyKiR1d6Q&usqp=CAU",
      rating: "8",
      year: "2016",
      summary:
"M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams"
    }
  ];
  const [name,setName]=useState(" ");
  const [poster,setPoster]=useState(" ");
  const [rating,setRating]=useState(" ");
  const [year,setYear]=useState(" ");
  const [summary,setSummary]=useState(" ");

const [movieList,setMovieList]=useState(Initialmovie)
  return (
    <div className="App">
      <div className="MovieArray">
        <h3>Enter Movie details</h3>
        <TextField
         value={name}
         onChange={(event)=>
           setName(event.target.value)}        
        id="outlined-basic" label="Name" variant="outlined" />
        <TextField       
        value={poster}
       onChange={(event)=>
         setPoster(event.target.value)}
        id="outlined-basic" label="Poster" variant="outlined" />
        <TextField 
        value={rating}
      onChange={(event)=>
        setRating(event.target.value)}
        id="outlined-basic" label="Rating" variant="outlined" />
        
        <TextField
        value={year}
      onChange={(event)=>
        setYear(event.target.value)}
         id="outlined-basic" label="Year" variant="outlined" />
        <TextField
        value={summary}
      onChange={(event)=>
        setSummary(event.target.value)}
         id="outlined-basic" label="Summary" variant="outlined" />
      
</div>
<Button 
onClick={()=>{
  const newMovie ={
    name:name,
    poster:poster,
    rating:rating,
    year:year,
    summary:summary,

  };
  setMovieList([...movieList,newMovie])
}}
variant="outlined">Add Movie</Button>

      <section className="movie-list">
      {movieList.map((movie) => (
        <Welcome
          name={movie.name}
          poster={movie.poster}
          rating={movie.rating}
          year={movie.year}
          summary={movie.summary}
        />
      ))}
      </section>
    </div>
  );
}

