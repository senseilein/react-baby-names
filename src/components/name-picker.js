import React from "react";
import { NameList } from "./name-list";

export function NamePicker({ names, searchValue, shortList, setShortList }) {
  // in the <ul> below We want to display the names that includes the searchValue
  const filteredNames = names
    .filter((entry) => entry.name.toLowerCase().includes(searchValue))
    .filter((entry) => !shortList.includes(entry.id));
  // and we only keep the names for which the id is not "shortlisted" (so a name is either in the NamePicker (main)list or in the shortList)

  // it will initially renders the whole list

  const addToShortList = (nameID) => {
    setShortList([...shortList, nameID]);
  };

  return (
    <div id="NamePicker">
      <NameList nameList={filteredNames} onItemClick={addToShortList} />
    </div>
  );
}
