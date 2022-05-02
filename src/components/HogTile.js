import React, { useState } from "react";

function HogTile({ name, specialty, greased, weight, image }) {
  let [isDetailed, setIsDetailed] = useState(false);

  function handleClick() {
    setIsDetailed(!isDetailed);
  }

  const details =
    isDetailed === true ? (
      <>
        <h3 className="details"> Specialty: {specialty}</h3>
        <h3 className="details"> Weight: {weight} lbs.</h3>
        <h3 className="details">{greased ? "Greased" : "Not Greased"}</h3>
      </>
    ) : null;

  return (
    <div className="pigTile" onClick={handleClick}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      {details}
    </div>
  );
}

export default HogTile;
