import React, { useState } from "react";

function XDictionary() {
  let [dictionary, setDictionary] = useState([
    {
        word: "React",
        meaning: "A JavaScript library for building user interfaces."
    },
    { 
        word: "Component", 
        meaning: "A reusable building block in React." 
    },
    { 
        word: "State", 
        meaning: "An object that stores data for a component." 
    }
  ]);

  let [search, setSearch] = useState("");
  let [searchReturn, setSearchReturn] = useState("");

  // Function to handle word search
  let handleSearch = () => {
    let foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === search.toLowerCase()
    );
    if (foundWord) {
      setSearchReturn(foundWord.meaning);
    } else {
      setSearchReturn("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          placeholder="Search for a word..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <strong>Definition:</strong>
        <p>{searchReturn}</p>
      </div>
    </div>
  );
}

export default XDictionary;