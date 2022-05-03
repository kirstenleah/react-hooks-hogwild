import React, { useState } from "react";

function Form({ hogs, setCurrentHogs }) {
  const [searchName, setSearchName] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);

  function handleNameInput(e) {
    e.preventDefault();
    const searchedHog = hogs.filter((hog) => {
      if (hog.name.includes(searchName)) {
        return hog;
      }
    });
    console.log(searchedHog);
    setCurrentHogs(searchedHog);
  }

  function handleWeight(e) {
    const weightSelection = e.target.value;
    console.log(weightSelection);
    const weightClass = hogs.filter((hog) => {
      if (weightSelection === "small" && hog.weight <= 2) {
        console.log("inside the if");
        console.log(hog);
        return hog;
      } else if (weightSelection === "medium" && hog.weight >= 2 && hog.weight <= 4) {
        return hog;
      } else if (weightSelection === "large" && hog.weight >= 4) {
        return hog;
      } else if (weightSelection === "default") {
        return setCurrentHogs(hogs);
      }
    });
    setCurrentHogs(weightClass);
  }

  function handleGreasedChecked(e) {
    setGreased(!greased);
    if (e.target.checked) {
      const greasedHogs = hogs.filter((hog) => {
        return hog.greased === true;
      });
      setCurrentHogs(greasedHogs);
    } else setCurrentHogs(hogs);
  }

  return (
    <form onSubmit={handleNameInput}>
      <h3>Find a Hog</h3>
      <label htmlFor="name">
        Name
        <input type="text" id="name" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
      </label>
      <input type="submit" /> <label htmlFor="weight"> Weight</label>
      <select id="weight" value={weight} onChange={handleWeight}>
        <option value="default">Select Weight</option>
        <option value="small">0-2 lb</option>
        <option value="medium">2-4 lb</option>
        <option value="large">4+ lb</option>
      </select>
      <label>
        {"   "}
        Show Greased Only <input type="checkbox" id="greased" checked={greased} onChange={handleGreasedChecked} />
      </label>
    </form>
  );
} // enf function

export default Form;

//   function handleSubmit(event) {
//     event.preventDefault();
//     const formData = {
//       name,
//       weight,
//       greased,
//     };
//   }
