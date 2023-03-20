import React from "react";
//egghead.io/lessons/react-pass-data-down-to-children-component-with-props-in-react

function App({ names }) {
  // no need to import name here because it is received from parent Component = at the root of the app (in index.js)
  return <pre>{JSON.stringify(names, null, 2)}</pre>;
}

export default App;
