import React from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import Form from "./Form";
import hogs from "../porkers_data";

function App() {
  //const [currentHogs, setCurrentHogs] = useState(hogs);

  const hogTiles = hogs.map((hogsObj) => {
    return (
      <HogTile
        key={hogs.name}
        name={hogsObj.name}
        specialty={hogsObj.specialty}
        greased={hogsObj.greased}
        weight={hogsObj.weight}
        image={hogsObj.image}
      />
    );
  });
  return (
    <div className="App">
      <Nav />
      <Form hogs={hogs} />
      <main>{hogTiles}</main>
    </div>
  );
}

export default App;
