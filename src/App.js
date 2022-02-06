import {  useState} from "react";
import { Switch, Redirect, Route, useHistory } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { AddMovie } from "./AddMovie";
import { MovieList } from "./MovieList";
import { EditMovie } from "./EditMovie";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import "./index.css";
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { BasicForm } from "./BasicForm";



export default function App() {
 
 
const [movieList,setMovieList]=useState([])
const [mode,setMode]=useState("dark");
const history=useHistory();
const themeCtx=createTheme({
  palette:{
    mode:mode,
  },
});
  return (    
    <ThemeProvider theme={themeCtx}>
<Paper sx={{borderRadius:"0px", minHeight: "100vh"}}
elevation={4}>
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          
          <Button color="inherit" onClick={()=>history.push("/")}>Home</Button>
          <Button color="inherit"onClick={()=>history.push("/movies")}>Movie List</Button>
          <Button color="inherit"onClick={()=>history.push("/movies/addMovie")}>Add Movie</Button>
<Button
  style={{marginLeft:"auto"}}
  color="inherit"
  startIcon={
    mode==="dark"?<Brightness7Icon />:<Brightness4Icon />}

  onClick={() => setMode(mode==="light" ? "dark" : "light") }
  >
  {mode ==="light"?"dark":"light" } mode
  </Button>
        </Toolbar>
      </AppBar>
     
      <Switch>
      <Route path="/films">
          <Redirect to="/movies" />
        </Route>

        <Route path="/movies/edit/:id">
          <h1>Edit Movie</h1>
        <EditMovie  />
        </Route>

        <Route path="/movies/addMovie">
        <AddMovie   />
        </Route>

        <Route path="/movies/basicForm">
        <BasicForm   />
        </Route>

        <Route path="/movies/:id">
        <MovieDetails />        
        </Route>     
      
        <Route path="/movies">
        <MovieList  />
        </Route>
          
        <Route exact path="/">
          <Home />  
        </Route> 

        <Route path="**">
          <NotFound />
        </Route>
      </Switch>    
      </div>
      </Paper>
      </ThemeProvider>
    );
  }

