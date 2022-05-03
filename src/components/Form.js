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

  return (
    <form onSubmit={handleNameInput}>
      <h3>Find a Hog</h3>
      <label htmlFor="name">
        Name
        <input type="text" id="name" value={searchName} onChange={(e) => setSearchName(e.target.value)} />
      </label>
      <input type="submit" />
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

// <label htmlFor="weight"> Weight</label>
// <select id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}>
//   <option value="small">0-2 lb</option>
//   <option value="medium">2-4 lb</option>
//   <option value="large">4+ lb</option>
// </select>

// <label>
//   {"   "}
//   Show Greased Only
//   <input type="checkbox" id="greased" checked={greased} onChange={(e) => setGreased(e.target.checked)} />
// </label>
