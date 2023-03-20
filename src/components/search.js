import React from "react";
import { useState } from "react";

export function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Type a name..."
        value={searchValue}
        onChange={handleChange}
      />
      ;
    </header>
  );
}
