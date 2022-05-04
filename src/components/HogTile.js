import React, { useState } from "react";

function HogTile({ hogs }) {
  let [isDetailed, setIsDetailed] = useState(false);

  function handleClick() {
    setIsDetailed(!isDetailed);
  }

  const details =
    isDetailed === true ? (
      <>
        <h3 className="details"> Specialty: {hogs.specialty}</h3>
        <h3 className="details"> Weight: {hogs.weight} lbs.</h3>
        <h3 className="details"> Medal: {hogs["highest medal achieved"]} </h3>
        <h3 className="details">{hogs.greased ? "Greased" : "Not Greased"}</h3>
      </>
    ) : null;

  return (
    <div className="pigTile" onClick={handleClick}>
      <h2>{hogs.name}</h2>
      <img height="200" width="250" src={hogs.image} alt={hogs.name} />
      {details}
    </div>
  );
}

export default HogTile;
