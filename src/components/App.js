import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import Form from "./Form";
import hogs from "../porkers_data";

const App = () => {
  const [currentHogs, setCurrentHogs] = useState(hogs);
  return (
    <div className="App">
      <Nav />
      <Form hogs={hogs} setCurrentHogs={setCurrentHogs} />
      <main>
        {currentHogs.map((hog) => (
          <HogTile hogs={hog} />
        ))}
      </main>
    </div>
  );
};

export default App;
