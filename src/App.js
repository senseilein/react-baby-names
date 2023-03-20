import React from "react";
//egghead.io/lessons/react-pass-data-down-to-children-component-with-props-in-react
import { useState } from "react";

import { NamePicker } from "./components/name-picker";
import { Search } from "./components/search";

function App({ names }) {
  // no need to import name here because it is received from parent Component = at the root of the app (in index.js)
  // return (<pre>{JSON.stringify(names, null, 2)}</pre>)

  const [searchValue, setSearchValue] = useState("");

  const [shorlist, setShortList] = useState([]);

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <NamePicker
        names={names}
        searchValue={searchValue}
        // we don't pass setSearchValue here because in Namepicker we never update that state
        shortList={shorlist}
        setShortList={setShortList}
      />
    </>
  );
}

export default App;
