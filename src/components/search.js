import React from "react";
import { useState } from "react";

export function Search() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <header>
      <input type="text" placeholder="Type a name..." value={searchValue} />;
    </header>
  );
}
