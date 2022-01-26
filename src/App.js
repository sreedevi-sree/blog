import {useState} from "react";
import { Switch, Redirect, Route, Link } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { AddMovie } from "./AddMovie";
import { MovieList } from "./MovieList";
import { EditMovie } from "./EditMovie";

import "./index.css";

export default function App() {
  const Initialmovie = [
    {
      name: "Thuppaki",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZTc4YWY5MzAtOTc4Zi00NDVmLThlMGItYjliOGNkYmM3NDBmXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      rating: "9",
      year: "2012",
      summary:
"An army captain visits Mumbai to be with his family and find a suitable bride. However, an explosion in the city sets him off on a mission to find and disable a terrorist sleeper cell in the city.",
trailer:"https://www.youtube.com/embed/LLUeCstylF0"   
},
    {
      name: "Spiderman",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQlKOtc-RTtE2ns8fMI990-RHrqGwncy_D0w&usqp=CAU",
      rating: "7.13",
      year: "2002",
      summary:
"Peter Parker's life changes when he is bitten by a genetically altered spider and gains superpowers. He uses his powers to help people and finds himself facing the Green Goblin, an evil maniac",
trailer:"https://www.youtube.com/embed/JfVOs4VSpmA"
    },
    {
      name: "Red notice",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlwYfCCXZcMjUGSM88PBwYhTvWEc_kjUu_Gw&usqp=CAU",
      rating: " 6.4",
      year: "2021",
      summary:
"In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
trailer:
"https://www.youtube.com/embed/AHRQ3cpslIY"
    },
    {
      name: "Hera pheri",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeH5wJvCZbY6_lOec9vAmUNAQkBauGNViwA&usqp=CAU",
      rating: "8.2",
      year: "2000",
      summary:
"Two tenants and a landlord, in desperate need of money, chance upon a ransom call via a cross connection. They hatch a plan to claim the ransom for themselves",
trailer:"https://www.youtube.com/embed/Nj4H-X3FAWU"
    },
    {
      name: "M S Dhoni",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ334LoTpdtqtYk17XPQjRcBim8qRyKiR1d6Q&usqp=CAU",
      rating: "8",
      year: "2016",
      summary:
"M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams",
trailer:"https://www.youtube.com/embed/6L6XqWoS8tw"
    }
  ];
 

const [movieList,setMovieList]=useState(Initialmovie)

  return (    
    <div className="App">
      <ul>
      <li>
        <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movie List</Link>
          </li> 
          <li>
          <Link to="/addMovie">Add Movie</Link>
          </li>    
           
        </ul>

      <Switch>
      <Route path="/films">
          <Redirect to="/movies" />
        </Route>

        <Route path="/movies/:id">
        <MovieDetails movieList={movieList}/>        
        </Route>     
      
        <Route path="/movies/edit/:id">
          <h1>HAI</h1>
        <EditMovie movieList={movieList} setMovieList={setMovieList} />
        </Route>

        <Route path="/addMovie">
        <AddMovie movieList={movieList} setMovieList={setMovieList}  />
        </Route>

        <Route path="/movies">
        <MovieList movieList={movieList} setMovieList={setMovieList} />
        </Route>
          
        <Route exact path="/">
          <Home />  
        </Route> 

        <Route path="**">
          <NotFound />
        </Route>
      </Switch>    
      </div>
    );
  }
