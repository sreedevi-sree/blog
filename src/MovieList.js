import { Welcome } from "./Welcome";
import Button from '@mui/material/Button';


export function MovieList({ movieList,setMovieList }) {
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
        <Button 
        variant="contained"

        onClick={()=>{
            const remainingMovies=movieList.filter((mv,idx)=>{
                const removeIdx=index;
                return idx!==removeIdx;                
            }           
            )
            setMovieList(remainingMovies)
        }}
        >Delete me!!!</Button>}
        />        
    ))}
    
  </section>
  )
}
