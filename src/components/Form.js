import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name,
      weight,
      greased,
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Find a Hog</h3>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="weight">Weight</label>
      <select id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}>
        <option value="small">0-2 lb</option>
        <option value="medium">2-4 lb</option>
        <option value="large">4+ lb</option>
      </select>

      <label>
        Show Greased Only
        <input type="checkbox" id="greased" checked={greased} onChange={(e) => setGreased(e.target.value)} />
      </label>
    </form>
  );
}

export default Form;
