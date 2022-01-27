// You need useState to maintain state (data) inside the app
import { useState } from "react";
import { ProgressBar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  const marks = [
    {
      id: 10,
      maths: 30,
      physics: 50,
      chemistry: 60,
      biology: 60,
      english: 70
    },
    {
      id: 11,
      maths: 30,
      physics: 50,
      chemistry: 60,
      biology: 60,
      english: 70
    },
    {
      id: 12,
      maths: 30,
      physics: 50,
      chemistry: 60,
      biology: 60,
      english: 70
    },
    {
      id: 13,
      maths: 30,
      physics: 50,
      chemistry: 60,
      biology: 60,
      english: 70
    },
    {
      id: 14,
      maths: 30,
      physics: 50,
      chemistry: 60,
      biology: 60,
      english: 70
    }
  ];
  const defmark = [
    {
      maths: "Maths %",
      physics: "Physics %",
      chemistry: "Chemistry %",
      biology: "Biology %",
      english: "English %"
    }
  ];
  // create state for each data you need
  /* first to store filtered data, i create one state called
     called filteredMarks 
     Initially there will be all data - so all marks stored
  */

  const [filteredMarks, setFilteredMarks] = useState(defmark);
  // create another state to store search value
  const [searchInput, setSearchInput] = useState("");

  // function to filter marks based on id value
  const filterMarks = () => {
    // store filtered result in a variable
    let marksCopy = marks.filter((mark) => mark.id === parseInt(searchInput));
    // change the filteredMarks state with the new data
    setFilteredMarks(marksCopy);
  };

  return (
    <div className="App">
      <div className="studentId">
<h4>
Calculate the percentage level of the person's mark
</h4>   
<br/>
     <input
          type="text"
          class="form-control"
          id="usr"
          placeholder="Student Id"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
              <br />

        {/* on click of button called filter function */}
        <button onClick={filterMarks}>Get Data From Server</button>
      </div>
      {filteredMarks.map((mark) => (
        <Welcome
          id={mark.id}
          maths={mark.maths}
          physics={mark.physics}
          chemistry={mark.chemistry}
          biology={mark.biology}
          english={mark.english}
        />
      ))}
     
    </div>
  );
}

function Welcome({ id, physics, maths, chemistry, english, biology, per }) {
  per = ((maths + physics + chemistry + biology + english) / 500) * 100;

  return (
    <div className="mark">
      <h6>Subject Percentage of id {id}</h6>
      <br />

      <input
        type="text"
        class="form-control"
        placeholder="Maths %"
        value={maths}
      />
      <br />
      <input
        type="text"
        class="form-control"
        placeholder="Physics %"
        value={physics}
      />
            <br />

      <input
        type="text"
        class="form-control"
        placeholder="Chemistry %"
        value={chemistry}
      />
            <br />

      <input
        type="text"
        class="form-control"
        placeholder="Biology %"
        value={biology}
      />
            <br />

      <input
        type="text"
        class="form-control"
        placeholder="English %"
        value={english}
      />
      <br />
      <h4>Total Percentage</h4>
      
{per>=90 ? (<ProgressBar now={per} variant="info" label={`${per}% completed (success)`} />):("")}
{per>=70 ? (<ProgressBar now={per} variant="success" label={`${per}% completed (success)`} />):("")}
{per>=50 ? (<ProgressBar now={per} variant="warning" label={`${per}% completed (success)`} />):("")}
{per<=30 ? (<ProgressBar now={per} variant="danger" label={`${per}% completed (success)`} />):("")}

      



      
    </div>
  );
}
