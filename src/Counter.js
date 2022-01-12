import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter">
      <IconButton
        onClick={() => setLike(like + 1)}
        color="primary"
        aria-label="like the movie">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        onClick={() => setDislike(dislike + 1)}
        color="error"
        aria-label="dislike the movie">
        <Badge badgeContent={dislike}
          color="error">
          👎
        </Badge>
      </IconButton>

    </div>
  );
}
