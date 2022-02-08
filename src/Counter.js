import React from "react";
import { useState } from "react";


export function Counter() {
  const [like, setLike] = useState(0);
  return (
    <div className="counter">
      {/* click on like button like added to one so on */}
      <button onClick={() => setLike(like + 1)}> 👍 </button>
      <h5> likes: {like}</h5>
    </div>
  );
}
