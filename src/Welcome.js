import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Counter } from "./Counter";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export function Welcome({ name, poster, rating, year, summary,id ,deleteButton,editButton }) {
  const history=useHistory();
  const styles = { color: rating >= "8.5" ? "green" : "red" };
  const [showText, setShowText] = useState(false);
  const [value, setValue] = useState(2);
  return (
    <Card className="new-movie">
      <img className="movie-poster" src={poster} alt={name} />{" "}
      <CardContent>
        <h1 className="movie-name">{name}
          <IconButton
            onClick={() => setShowText(!showText)}
            color="primary"
            aria-label="Toggle summary">

            {showText ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <IconButton
            onClick={() => history.push("/movies/" + id)}
            color="primary"
            aria-label="Movie details">

           <InfoIcon />
          </IconButton>
        </h1>
        {showText ? <p className="movie-summary">{summary}</p> : ""}
        <p style={styles} className="movie-rating"> <Typography component="legend">Rating:</Typography>
<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>{rating}/10</p>
        <p className="movie-year">Year: {year}</p>

        {/* conditional styling */}
        {/* <p style={summarystyles} className="movie-summary">{summary}</p>   */}

        {/* conditional rendering */}
       
      </CardContent>
      
<div className="counter">
<Counter /> 
      {deleteButton}
      {editButton} 
</div>
     
      
    </Card>
  );
}
