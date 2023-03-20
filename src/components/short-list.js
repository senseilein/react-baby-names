import React from "react";
import { NameList } from "./name-list";

export function ShortList({ names, shortList, setShortList }) {
  const shortListedNames = names.filter((entry) =>
    shortList.includes(entry.id)
  );

  const removeFromShortList = (nameID) => {
    setShortList(shortList.filter((i) => i !== nameID));
  };

  const hasNames = shortListedNames.length > 0;

  return (
    <div className="short-list">
      {/* <pre>{JSON.stringify(shortList)}</pre>; */}
      <h2>{hasNames ? "Your Shortlist" : "Click on a name to shortlist it"}</h2>
      {hasNames && (
        <>
          <NameList
            nameList={shortListedNames}
            onItemClick={removeFromShortList}
          />
          <hr />
        </>
      )}
    </div>
  );
}
