import React from "react";
import { useState, useRef, useEffect } from "react";

export function Search() {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  //we need the input element to be focused on load so that user can just start typing
  // we need useRef to keep reference to the input element
  const inputRef = useRef();
  // then add a ref prop to our input and set it to inputRef

  console.log(inputRef);
  // current property is the input itself

  // input element will have focus as soon as the Search Component is loaded
  // dependency array = empty because we only want this function to run once
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <header>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a name..."
        value={searchValue}
        onChange={handleChange}
      />
      ;
    </header>
  );
}
