import React, { useState } from "react";

function NewFood({ onFoods, onSetFoods }) {
  const [submit, setSubmit] = useState({
    name: "",
    url: "",
    "nutrition-per-100g": {
      energy: "",
      protein: "",
      fat: "",
      carbohydrate: ""
    }
  })




  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter food name" 
        name="name" 
        value={submit.name}
        onChange={handleChange}
        />
      <input 
        type="text" 
        placeholder="Enter food photo url" 
        name="url" 
        value={submit.url}
        onChange={handleChange}
        />
      <input 
        type="text"
        placeholder="Enter food energy per 100g"
        name="energy"
        value={submit["nutrition-per-100g"].energy}
        onChange={handleNestedChange}
        />
      <input 
        type="text" 
        placeholder="Enter food protein per 100g"
        name="protein"
        value={submit["nutrition-per-100g"].protein}
        onChange={handleNestedChange}
        />
      <input 
        type="text" 
        placeholder="Enter food fat per 100g"
        name="fat"
        value={submit["nutrition-per-100g"].fat}
        onChange={handleNestedChange}
        />
      <input 
        type="text" 
        placeholder="Enter food carbs per 100g"
        name="carbohydrate"
        value={submit["nutrition-per-100g"].carbohydrate}
        onChange={handleNestedChange}
        />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NewFood