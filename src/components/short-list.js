import React from "react";
import { NameList } from "./name-list";

export function ShortList({ names, shortList, setShortList }) {
  const shortListedNames = names.filter((entry) =>
    shortList.includes(entry.id)
  );

  const removeFromShortList = (nameID) => {
    setShortList(shortList.filter((i) => i !== nameID));
  };

  return (
    <div className="short-list">
      {/* <pre>{JSON.stringify(shortList)}</pre>; */}
      <NameList nameList={shortListedNames} onItemClick={removeFromShortList} />
    </div>
  );
}
