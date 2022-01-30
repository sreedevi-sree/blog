import { Welcome } from "./Welcome";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";



export function MovieList({ movieList,setMovieList }) {
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
          onClick={()=>{
            const remainingMovies=movieList.filter((mv,idx)=>{
                const removeIdx=index;
                return idx!==removeIdx;                
            }           
            )
            setMovieList(remainingMovies)
        }}
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
