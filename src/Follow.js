import React from "react";
import { useState } from "react";


export function Follow() {
  const [followers, setFollowers] = useState(0);
  return (
    <div className="follow">
      {/* click on follow button  and show the followers */}

      <button onClick={() => setFollowers(followers + 1)}> follow </button>
      <h5>Followers: {followers}</h5>
    </div>
  );
}
