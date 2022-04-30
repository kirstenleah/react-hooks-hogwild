import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import hogs from "../porkers_data"

function App() {
	const [hogs, setHogs] = useState(hogs)

	const hogTiles = hogs.map((hogsObj) => {
		return (
			<HogTile
			name={hogsObj.name}
			specialty={hogsObj.specialty}
			greased={hogsObj.greased}
    		weight={hogsObj.weight}
    		image={hogsObj.image}
			/>

		)
	})
	return (
		<div className="App">
			<Nav />
		</div>
	);
}

export default App;
